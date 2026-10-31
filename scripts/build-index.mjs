#!/usr/bin/env node
// Genera index.json a partir de modpacks/*/modpack.json, servidores/*/servidor.json, mods/*/mod.json y desarrollo.json.
// Uso: node scripts/build-index.mjs [--check]
//   --check  falla si index.json no está actualizado (útil en CI).
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = process.env.MODPACKS_REPO ?? "mochos/mochos-modpacks";
const BRANCH = process.env.MODPACKS_BRANCH ?? "main";
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const LOADERS = ["vanilla", "fabric", "quilt", "forge", "neoforge"];
const SOURCES = ["mrpack", "curseforge-zip", "modrinth", "curseforge"];
const GAMES = ["minecraft", "hytale"];
const QUERIES = ["minecraft", "hyquery", "none"];

const errors = [];
const warnings = [];
const isUrl = (s) => /^https?:\/\//.test(s);

function asset(dir, id, value, field, folder = "modpacks") {
  if (!value) return undefined;
  if (isUrl(value)) return value;
  if (!existsSync(join(dir, value))) errors.push(`${id}: ${field} "${value}" no existe`);
  return `${RAW}/${folder}/${id}/${value.split("/").map(encodeURIComponent).join("/")}`;
}

function markdown(dir, id, value, field) {
  if (!value) return undefined;
  if (value.endsWith(".md")) {
    const p = join(dir, value);
    if (!existsSync(p)) { errors.push(`${id}: ${field} "${value}" no existe`); return undefined; }
    // Saltos de línea de Unix: el índice sale igual en Windows (autocrlf) que en la Action.
    return readFileSync(p, "utf8").replace(/\r\n/g, "\n");
  }
  return value;
}

const packsDir = join(ROOT, "modpacks");
const modpacks = [];
for (const id of readdirSync(packsDir).sort()) {
  const dir = join(packsDir, id);
  if (!statSync(dir).isDirectory()) continue;
  const file = join(dir, "modpack.json");
  if (!existsSync(file)) { errors.push(`${id}: falta modpack.json`); continue; }
  let m;
  try { m = JSON.parse(readFileSync(file, "utf8")); }
  catch (e) { errors.push(`${id}: JSON inválido (${e.message})`); continue; }

  for (const k of ["id", "name", "summary", "version", "minecraft", "loader", "source"]) {
    if (m[k] === undefined) errors.push(`${id}: falta el campo "${k}"`);
  }
  if (m.id !== id) errors.push(`${id}: "id" (${m.id}) debe coincidir con el nombre de la carpeta`);
  if (m.loader && !LOADERS.includes(m.loader.type)) errors.push(`${id}: loader.type inválido "${m.loader.type}"`);
  if (m.loader && m.loader.type !== "vanilla" && !m.loader.version) errors.push(`${id}: falta loader.version`);
  if (m.source && !SOURCES.includes(m.source.type)) errors.push(`${id}: source.type inválido "${m.source?.type}"`);
  if (m.hidden) continue;
  if (m.dev !== undefined && typeof m.dev !== "boolean") errors.push(`${id}: "dev" debe ser true o false`);

  const { $schema, ...rest } = m;
  const source = { ...m.source };
  if (source.url) source.url = asset(dir, id, source.url, "source.url");

  // Lista de mods/resourcepacks/shaders para la web (la genera scripts/build-contents.mjs).
  const contentsFile = join(dir, "contents.json");
  const contents = existsSync(contentsFile) ? asset(dir, id, "contents.json", "contents") : undefined;
  if (contents && JSON.parse(readFileSync(contentsFile, "utf8")).version !== m.version) {
    warnings.push(`${id}: contents.json es de otra versión. Ejecuta: node scripts/build-contents.mjs ${id}`);
  }

  modpacks.push({
    ...rest,
    description: markdown(dir, id, m.description, "description") ?? "",
    changelog: markdown(dir, id, m.changelog, "changelog"),
    icon: asset(dir, id, m.icon, "icon"),
    banner: asset(dir, id, m.banner, "banner"),
    gallery: (m.gallery ?? []).map((g, i) => asset(dir, id, g, `gallery[${i}]`)),
    source,
    contents,
  });
}

// Servidores de la comunidad (pestaña «Comunidad» del launcher).
const serversDir = join(ROOT, "servidores");
const servers = [];
for (const id of existsSync(serversDir) ? readdirSync(serversDir).sort() : []) {
  const dir = join(serversDir, id);
  if (!statSync(dir).isDirectory()) continue;
  const file = join(dir, "servidor.json");
  if (!existsSync(file)) { errors.push(`servidores/${id}: falta servidor.json`); continue; }
  let s;
  try { s = JSON.parse(readFileSync(file, "utf8")); }
  catch (e) { errors.push(`servidores/${id}: JSON inválido (${e.message})`); continue; }

  for (const k of ["id", "name", "game", "address"]) {
    if (s[k] === undefined) errors.push(`servidores/${id}: falta el campo "${k}"`);
  }
  if (s.id !== id) errors.push(`servidores/${id}: "id" (${s.id}) debe coincidir con el nombre de la carpeta`);
  if (s.game && !GAMES.includes(s.game)) errors.push(`servidores/${id}: game inválido "${s.game}"`);
  if (s.query && !QUERIES.includes(s.query)) errors.push(`servidores/${id}: query inválido "${s.query}"`);
  const pack = s.modpack ? modpacks.find((m) => m.id === s.modpack) : undefined;
  if (s.modpack && !pack) errors.push(`servidores/${id}: el modpack "${s.modpack}" no existe (o está oculto)`);
  if (pack?.dev && !s.dev) errors.push(`servidores/${id}: el modpack "${s.modpack}" está en desarrollo; pon también "dev": true en el servidor`);
  if (s.hidden) continue;

  const { $schema, hidden, ...rest } = s;
  servers.push({
    ...rest,
    summary: s.summary ?? "",
    query: s.query ?? (s.game === "minecraft" ? "minecraft" : "none"),
    icon: asset(dir, id, s.icon, "icon", "servidores") ?? pack?.icon,
    banner: asset(dir, id, s.banner, "banner", "servidores") ?? pack?.banner,
  });
}

// Mods propios (mods/<id>/mod.json + jars en builds/): el launcher los ofrece en los modpacks compatibles.
const modsDir = join(ROOT, "mods");
const mods = [];
for (const id of existsSync(modsDir) ? readdirSync(modsDir).sort() : []) {
  const dir = join(modsDir, id);
  if (!statSync(dir).isDirectory()) continue;
  const file = join(dir, "mod.json");
  if (!existsSync(file)) { errors.push(`mods/${id}: falta mod.json`); continue; }
  let m;
  try { m = JSON.parse(readFileSync(file, "utf8")); }
  catch (e) { errors.push(`mods/${id}: JSON inválido (${e.message})`); continue; }

  for (const k of ["id", "name", "summary", "builds"]) {
    if (m[k] === undefined) errors.push(`mods/${id}: falta el campo "${k}"`);
  }
  if (m.id !== id) errors.push(`mods/${id}: "id" (${m.id}) debe coincidir con el nombre de la carpeta`);
  if (m.hidden) continue;

  const builds = [];
  for (const [i, b] of (m.builds ?? []).entries()) {
    const where = `mods/${id}: builds[${i}]`;
    for (const k of ["file", "version", "minecraft", "loader"]) {
      if (b[k] === undefined) errors.push(`${where}: falta el campo "${k}"`);
    }
    if (b.loader && (!LOADERS.includes(b.loader.type) || b.loader.type === "vanilla")) errors.push(`${where}: loader.type inválido "${b.loader.type}"`);
    if (!b.file || !b.loader || !Array.isArray(b.minecraft)) continue;
    const jar = join(dir, b.file);
    if (!existsSync(jar)) { errors.push(`${where}: "${b.file}" no existe`); continue; }
    // mochoscedula-1.0.1-MC1.21.1-neoforge21.1.248.jar
    const expected = `${id}-${b.version}-MC${b.minecraft[0]}-${b.loader.type}${b.loader.minVersion ?? ""}.jar`;
    if (b.file.split("/").pop() !== expected) warnings.push(`${where}: el jar debería llamarse ${expected}`);
    const data = readFileSync(jar);
    builds.push({
      version: b.version,
      minecraft: b.minecraft,
      loader: b.loader,
      fileName: b.file.split("/").pop(),
      url: asset(dir, id, b.file, `builds[${i}].file`, "mods"),
      sha1: createHash("sha1").update(data).digest("hex"),
      size: data.length,
    });
  }
  const { $schema, hidden, builds: _, ...rest } = m;
  mods.push({ ...rest, icon: asset(dir, id, m.icon, "icon", "mods"), builds });
}

// Acceso a lo que está en desarrollo: hashes de cuentas (ver scripts/tester-hash.mjs).
const devFile = join(ROOT, "desarrollo.json");
let testers = [];
if (existsSync(devFile)) {
  try { testers = JSON.parse(readFileSync(devFile, "utf8")).testers ?? []; }
  catch (e) { errors.push(`desarrollo.json: JSON inválido (${e.message})`); }
  for (const t of testers) {
    if (!/^[0-9a-f]{64}$/.test(t)) errors.push(`desarrollo.json: "${t}" no es un hash válido (usa node scripts/tester-hash.mjs <nombre>)`);
  }
}
if (warnings.length) console.warn("Avisos:\n - " + warnings.join("\n - "));
if (errors.length) {
  console.error("Errores:\n - " + errors.join("\n - "));
  process.exit(1);
}

const byFeatured = (a, b) => Number(!!b.featured) - Number(!!a.featured) || a.name.localeCompare(b.name);
// Lo que está en desarrollo va aparte: la web y los launchers anteriores a la 1.4 solo leen
// "modpacks" y "servers", así que no lo muestran.
const index = {
  formatVersion: 1,
  modpacks: modpacks.filter((m) => !m.dev).sort(byFeatured),
  servers: servers.filter((s) => !s.dev).sort(byFeatured),
  mods,
  dev: { testers, modpacks: modpacks.filter((m) => m.dev).sort(byFeatured), servers: servers.filter((s) => s.dev).sort(byFeatured) },
};
const out = JSON.stringify(index, null, 2) + "\n";
const target = join(ROOT, "index.json");

if (process.argv.includes("--check")) {
  const current = existsSync(target) ? readFileSync(target, "utf8") : "";
  if (current !== out) {
    console.error("index.json no está actualizado. Ejecuta: node scripts/build-index.mjs");
    process.exit(1);
  }
  console.log(`index.json OK (${index.modpacks.length} modpacks, ${index.servers.length} servidores, ${modpacks.length - index.modpacks.length + servers.length - index.servers.length} en desarrollo)`);
} else {
  writeFileSync(target, out);
  console.log(`index.json generado con ${index.modpacks.length} modpack(s), ${index.servers.length} servidor(es) y ${index.dev.modpacks.length + index.dev.servers.length} en desarrollo`);
}
