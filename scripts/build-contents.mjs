#!/usr/bin/env node
// Genera modpacks/<id>/contents.json con los mods, resourcepacks y shaders de cada modpack y su
// enlace a Modrinth o CurseForge (pestaña «Contenido» de la web).
// Uso: node scripts/build-contents.mjs [id...] [--file <ruta>]
//   id      solo esos modpacks (por defecto, todos los que tienen archivo en source.url)
//   --file  usa un .mrpack/.zip local en vez de descargarlo de la Release (con un solo id)
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { inflateRawSync } from "node:zlib";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const USER_AGENT = "mochos/mochos-modpacks (build-contents)";
const CATEGORIES = ["mods", "resourcepacks", "shaders"];
const FOLDERS = { mods: "mods", resourcepacks: "resourcepacks", shaderpacks: "shaders" };
const CF_CLASSES = { "mc-mods": "mods", "texture-packs": "resourcepacks", shaders: "shaders" };

// CURSEFORGE_API_KEY (en .env o en el entorno) solo hace falta para los iconos de CurseForge.
try { process.loadEnvFile(join(ROOT, ".env")); } catch {}
const CF_KEY = process.env.CURSEFORGE_API_KEY;

// Lector de zip mínimo (sin dependencias): directorio central + deflate.
function readZip(buf) {
  let eocd = buf.length - 22;
  while (eocd >= 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd--;
  if (eocd < 0) throw new Error("no es un zip válido");
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  const entries = new Map();
  for (let i = 0; i < count; i++) {
    const method = buf.readUInt16LE(p + 10);
    const size = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const offset = buf.readUInt32LE(p + 42);
    const name = buf.toString("utf8", p + 46, p + 46 + nameLen);
    entries.set(name, { method, size, offset });
    p += 46 + nameLen + extraLen + commentLen;
  }
  const read = (name) => {
    const e = entries.get(name);
    if (!e) return undefined;
    const start = e.offset + 30 + buf.readUInt16LE(e.offset + 26) + buf.readUInt16LE(e.offset + 28);
    const data = buf.subarray(start, start + e.size);
    return (e.method === 0 ? data : inflateRawSync(data)).toString("utf8").replace(/^﻿/, "");
  };
  return { names: [...entries.keys()], read };
}

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'");

// Archivos sueltos en overrides/ (no vienen de ninguna plataforma): se listan sin enlace.
function overrides(names) {
  const found = new Map();
  for (const name of names) {
    const m = name.match(/^(?:client-)?overrides\/(mods|resourcepacks|shaderpacks)\/([^/]+)(\/)?/);
    if (!m) continue;
    const [, folder, file, isDir] = m;
    if (file.startsWith(".") || (!isDir && /\.(txt|rpo|toml|json|md)$/i.test(file))) continue;
    if (folder === "mods" && !file.endsWith(".jar")) continue;
    found.set(`${folder}/${file}`, { category: FOLDERS[folder], name: file.replace(/\.(zip|jar)$/i, "") });
  }
  return [...found.values()];
}

async function fromMrpack(zip) {
  const index = JSON.parse(zip.read("modrinth.index.json"));
  const files = index.files
    .map((f) => ({ category: FOLDERS[f.path.split("/")[0]], file: f.path.split("/").pop(), url: f.downloads?.[0] ?? "" }))
    .filter((f) => f.category);
  const ids = [...new Set(files.map((f) => f.url.match(/^https:\/\/cdn\.modrinth\.com\/data\/([^/]+)\//)?.[1]).filter(Boolean))];
  const projects = new Map();
  if (ids.length) {
    const res = await fetch(`https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(JSON.stringify(ids))}`, {
      headers: { "User-Agent": USER_AGENT },
    });
    if (!res.ok) throw new Error(`API de Modrinth: HTTP ${res.status}`);
    for (const p of await res.json()) projects.set(p.id, p);
  }
  const items = files.map(({ category, file, url }) => {
    const p = projects.get(url.match(/\/data\/([^/]+)\//)?.[1]);
    if (!p) return { category, name: file.replace(/\.(zip|jar)$/i, "") };
    return {
      category,
      name: p.title,
      url: `https://modrinth.com/${p.project_type}/${p.slug}`,
      icon: p.icon_url || undefined,
      platform: "modrinth",
    };
  });
  return [...items, ...overrides(zip.names)];
}

// Iconos por slug a partir de los projectID de manifest.json. La API de CurseForge pide key: sin ella
// la lista sale igual, solo que sin iconos.
async function curseforgeIcons(zip) {
  if (!CF_KEY) { console.warn("  · sin CURSEFORGE_API_KEY: los elementos de CurseForge salen sin icono"); return new Map(); }
  const modIds = JSON.parse(zip.read("manifest.json") ?? '{"files":[]}').files.map((f) => f.projectID);
  if (!modIds.length) return new Map();
  const res = await fetch("https://api.curseforge.com/v1/mods", {
    method: "POST",
    headers: { "x-api-key": CF_KEY, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ modIds }),
  });
  if (!res.ok) throw new Error(`API de CurseForge: HTTP ${res.status}`);
  const { data } = await res.json();
  return new Map(data.filter((p) => p.logo?.thumbnailUrl).map((p) => [p.slug, p.logo.thumbnailUrl]));
}

// modlist.html (lo exporta CurseForge) trae nombre, autor y enlace; la ruta del enlace dice el tipo.
async function fromCurseforgeZip(zip) {
  const html = zip.read("modlist.html");
  if (!html) throw new Error("el .zip no trae modlist.html");
  const icons = await curseforgeIcons(zip);
  const items = [];
  for (const [, href, text] of html.matchAll(/<li>\s*<a href="([^"]+)">([\s\S]*?)<\/a>\s*<\/li>/g)) {
    const kind = href.match(/curseforge\.com\/minecraft\/([^/]+)\//)?.[1];
    const category = CF_CLASSES[kind];
    if (!category) { console.warn(`  · omitido (${kind ?? "tipo desconocido"}): ${href}`); continue; }
    const by = decode(text).match(/^(.*) \(by (.*)\)$/s);
    items.push({
      category,
      name: (by ? by[1] : decode(text)).trim(),
      author: by?.[2].trim() || undefined,
      url: href,
      icon: icons.get(href.match(/curseforge\.com\/minecraft\/[^/]+\/([^/?#]+)/)?.[1]),
      platform: "curseforge",
    });
  }
  return [...items, ...overrides(zip.names)];
}

async function packFile(m, local) {
  const buf = local
    ? readFileSync(local)
    : Buffer.from(await (async () => {
        const res = await fetch(m.source.url);
        if (!res.ok) throw new Error(`descarga ${m.source.url}: HTTP ${res.status}`);
        return res.arrayBuffer();
      })());
  if (m.source.sha1) {
    const sha1 = createHash("sha1").update(buf).digest("hex");
    if (sha1 !== m.source.sha1) throw new Error(`el sha1 del archivo (${sha1}) no coincide con modpack.json`);
  }
  return buf;
}

const args = process.argv.slice(2);
const fileIdx = args.indexOf("--file");
const local = fileIdx >= 0 ? args.splice(fileIdx, 2)[1] : undefined;
const packsDir = join(ROOT, "modpacks");
const ids = args.length ? args : readdirSync(packsDir).filter((id) => statSync(join(packsDir, id)).isDirectory()).sort();
if (local && ids.length !== 1) {
  console.error("--file solo se puede usar con un id: node scripts/build-contents.mjs <id> --file <ruta>");
  process.exit(1);
}

let failed = false;
for (const id of ids) {
  const file = join(packsDir, id, "modpack.json");
  if (!existsSync(file)) { console.error(`${id}: no existe modpacks/${id}/modpack.json`); failed = true; continue; }
  const m = JSON.parse(readFileSync(file, "utf8"));
  if (m.hidden && !args.length) continue;
  if (!["mrpack", "curseforge-zip"].includes(m.source?.type) || !m.source.url) {
    if (args.length) console.warn(`${id}: source.type "${m.source?.type}" no tiene archivo; se omite`);
    continue;
  }
  try {
    console.log(`${id} ${m.version}…`);
    const zip = readZip(await packFile(m, local));
    const items = m.source.type === "mrpack" ? await fromMrpack(zip) : await fromCurseforgeZip(zip);
    const contents = { version: m.version };
    for (const c of CATEGORIES) {
      contents[c] = items
        .filter((i) => i.category === c)
        .map(({ category, ...item }) => item)
        .sort((a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }));
    }
    writeFileSync(join(packsDir, id, "contents.json"), JSON.stringify(contents, null, 2) + "\n");
    const linked = items.filter((i) => i.url).length;
    console.log(`  ${CATEGORIES.map((c) => `${contents[c].length} ${c}`).join(", ")} (${items.length - linked} sin enlace)`);
  } catch (e) {
    console.error(`${id}: ${e.message}`);
    failed = true;
  }
}
if (failed) process.exit(1);
