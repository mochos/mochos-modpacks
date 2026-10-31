#!/usr/bin/env node
// Calcula el hash que va en desarrollo.json para dar acceso a los modpacks y servidores en modo
// desarrollo. El launcher compara el mismo hash con la cuenta con la que se entró: así la lista no
// dice quién tiene acceso.
// Uso: node scripts/tester-hash.mjs <nombre de Minecraft | UUID>     (cuenta de Microsoft)
//      node scripts/tester-hash.mjs --discord <nombre en mochos.xyz> (cuenta de Discord)
import { createHash } from "node:crypto";

// Igual que DEV_SALT en el launcher (src-tauri/src/modpacks/mod.rs).
const SALT = "mochos-dev:";

const discord = process.argv[2] === "--discord";
const arg = process.argv[discord ? 3 : 2]?.trim();
if (!arg) {
  console.error("Uso: node scripts/tester-hash.mjs <nombre de Minecraft | UUID>\n     node scripts/tester-hash.mjs --discord <nombre en mochos.xyz>");
  process.exit(1);
}

// Cuenta de Discord del launcher: el nombre que reclamó en mochos.xyz (el launcher comprueba con
// su sesión que el nombre es suyo).
if (discord) {
  if (!/^[A-Za-z0-9_]{3,16}$/.test(arg)) {
    console.error(`«${arg}» no es un nombre válido (3 a 16 letras, números o guion bajo)`);
    process.exit(1);
  }
  console.log(`${arg} (Discord)`);
  console.log(createHash("sha256").update(`${SALT}discord:${arg.toLowerCase()}`).digest("hex"));
  process.exit(0);
}

let uuid = arg.replace(/-/g, "").toLowerCase();
let name = arg;
if (!/^[0-9a-f]{32}$/.test(uuid)) {
  const res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(arg)}`);
  if (!res.ok) {
    console.error(res.status === 404 || res.status === 204 ? `No existe una cuenta de Minecraft llamada «${arg}»` : `API de Mojang: HTTP ${res.status}`);
    process.exit(1);
  }
  ({ id: uuid, name } = await res.json());
}

console.log(`${name} (${uuid})`);
console.log(createHash("sha256").update(SALT + uuid).digest("hex"));
