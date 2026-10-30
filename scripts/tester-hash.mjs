#!/usr/bin/env node
// Calcula el hash que va en desarrollo.json para dar acceso a los modpacks y servidores en modo
// desarrollo. El launcher compara el mismo hash con la cuenta de Microsoft con la que se entró:
// así la lista no dice quién tiene acceso.
// Uso: node scripts/tester-hash.mjs <nombre de Minecraft | UUID>
import { createHash } from "node:crypto";

// Igual que DEV_SALT en el launcher (src-tauri/src/modpacks/mod.rs).
const SALT = "mochos-dev:";

const arg = process.argv[2]?.trim();
if (!arg) {
  console.error("Uso: node scripts/tester-hash.mjs <nombre de Minecraft | UUID>");
  process.exit(1);
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
