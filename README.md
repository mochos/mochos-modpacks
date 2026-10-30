# Mochos Modpacks

Repositorio público con los modpacks oficiales de **Mochos Studio** que aparecen en el [Mochos Launcher](https://mochos.xyz).
El launcher lee el archivo [`index.json`](index.json), que se genera automáticamente a partir de la carpeta `modpacks/`.

> **Guías paso a paso:** [cargar o actualizar un modpack](modpacks/README.md) ·
> [publicar un servidor de la comunidad](servidores/README.md).

## Estructura

```
mochos-modpacks/
├── index.json                  ← generado (no editar a mano)
├── schema/modpack.schema.json  ← esquema de validación de modpack.json
├── schema/servidor.schema.json ← esquema de validación de servidor.json
├── scripts/build-index.mjs     ← genera y valida index.json
├── scripts/build-contents.mjs  ← genera contents.json de cada modpack (pestaña «Contenido»)
├── scripts/tester-hash.mjs     ← hash de una cuenta para desarrollo.json
├── desarrollo.json             ← cuentas que ven lo que está en desarrollo (hashes)
├── servidores/                 ← servidores de la comunidad (ver más abajo)
│   └── la-linea-rota/
│       └── servidor.json
└── modpacks/
    └── vanilla-mochos/         ← una carpeta por modpack (el nombre = id)
        ├── modpack.json        ← metadatos (obligatorio)
        ├── description.md      ← descripción larga en markdown
        ├── CHANGELOG.md        ← historial de cambios
        ├── contents.json       ← generado: mods, resourcepacks y shaders con su enlace
        ├── icon.png            ← icono cuadrado (recomendado 256×256)
        └── images/
            ├── banner.png      ← imagen de cabecera (recomendado 1600×600)
            └── captura-1.png   ← capturas para la galería
```

> Los archivos pesados (`.mrpack` / `.zip`) **no se suben al repositorio**: se publican como *assets* de una
> [Release de GitHub](https://github.com/mochos/mochos-modpacks/releases) (hasta 2 GB por archivo, gratis).
> Así el repositorio se mantiene ligero y cada versión queda archivada.

## `modpack.json`

```jsonc
{
  "$schema": "../../schema/modpack.schema.json",
  "id": "vanilla-mochos",                 // = nombre de la carpeta
  "name": "Vanilla Mochos",
  "summary": "Frase corta para las tarjetas.",
  "description": "description.md",        // archivo .md o texto directo
  "changelog": "CHANGELOG.md",
  "version": "1.5",                       // cambiarla → el launcher muestra «Actualizar»
  "minecraft": "1.21.4",
  "loader": { "type": "fabric", "version": "0.16.10" },  // vanilla | fabric | quilt | forge | neoforge
  "icon": "icon.png",
  "banner": "images/banner.png",
  "gallery": ["images/captura-1.png"],
  "tags": ["Survival", "Optimizado"],
  "featured": true,                       // aparece destacado en la portada
  "hidden": false,                        // true = oculto en el launcher
  "dev": false,                           // true = en desarrollo (ver «Modo desarrollo»)
  "recommendedRamMb": 4096,
  "source": { ... },                      // ver abajo
  "server": {
    "enabled": true,                      // permite «Crear servidor» desde el launcher
    "address": "mc.mochos.xyz",           // servidor oficial (opcional)
    "recommendedRamMb": 4096,
    "excludeMods": ["iris-", "sodium-"]   // mods que NO se instalan en el servidor (prefijos)
  },
  "links": { "website": "https://mochos.xyz", "discord": "https://discord.mochos.xyz" }
}
```

### Tipos de `source`

| Tipo | Ejemplo | Notas |
|------|---------|-------|
| `mrpack` | `{ "type": "mrpack", "url": "https://github.com/mochos/mochos-modpacks/releases/download/vanilla-mochos-1.5/Vanilla-Mochos-1.21.4-v1.5.mrpack", "sha1": "…" }` | Exportado desde Modrinth App, Prism, etc. **Recomendado.** |
| `curseforge-zip` | `{ "type": "curseforge-zip", "url": "https://github.com/…/pack.zip" }` | Exportado desde CurseForge. Requiere que el launcher tenga API key de CurseForge. |
| `modrinth` | `{ "type": "modrinth", "project": "fabulously-optimized", "version": "abc123" }` | Enlace a un modpack publicado en Modrinth. Sin `version` = siempre la última. |
| `curseforge` | `{ "type": "curseforge", "projectId": 123456, "fileId": 789012 }` | Enlace a un modpack de CurseForge. Sin `fileId` = siempre el último. |

`url` puede ser absoluta o relativa a la carpeta del modpack (p. ej. `"packs/mi-pack.mrpack"`), aunque se recomienda usar Releases.

## Publicar una nueva versión de un modpack

1. Exporta el modpack como `.mrpack` (Modrinth App / Prism Launcher → *Exportar → Modrinth*).
2. Crea una release con el archivo:
   ```bash
   gh release create vanilla-mochos-1.6 Vanilla-Mochos-1.21.4-v1.6.mrpack \
     --repo mochos/mochos-modpacks --title "Vanilla Mochos 1.6" --notes "Cambios…"
   ```
3. En `modpacks/vanilla-mochos/modpack.json` actualiza `version`, `source.url`, `source.sha1`
   (`sha1sum archivo.mrpack`) y `source.size`. Añade los cambios a `CHANGELOG.md`.
4. Haz commit y push a `main`. La GitHub Action regenera `index.json` y en unos minutos
   todos los launchers mostrarán **Actualizar** en ese modpack.

### Cómo actualiza el launcher

Al actualizar, el launcher **solo toca mods, resource packs y shaders** que vienen del modpack:
borra los que ya no están, descarga los nuevos y reemplaza los que cambiaron.
Las configuraciones (`config/`, `options.txt`, `servers.dat`, mundos, capturas…) del jugador
**no se sobrescriben**: los archivos de `overrides/` fuera de `mods/`, `resourcepacks/` y `shaderpacks/`
solo se copian si el jugador todavía no los tiene.

## Añadir un modpack nuevo

1. Crea `modpacks/<id>/` con `modpack.json`, `icon.png` y (opcional) `description.md`, `images/`.
2. Ejecuta `node scripts/build-index.mjs` para validar (la Action lo hará igualmente).
3. Commit + push.

## Servidores de la comunidad

La pestaña **Servidores → Comunidad** del launcher muestra los servidores de la carpeta `servidores/`
(una carpeta por servidor, el nombre = id). Para cada uno enseña si está en línea, los jugadores
conectados, la IP para copiar y un botón para jugar.

```jsonc
{
  "$schema": "../../schema/servidor.schema.json",
  "id": "la-linea-rota",                  // = nombre de la carpeta
  "name": "La Línea Rota",
  "summary": "Frase corta para la tarjeta.",
  "game": "minecraft",                    // minecraft | hytale
  "address": "linearota.mochos.xyz",      // se puede añadir el puerto: "mc.mochos.xyz:25566"
  "modpack": "la-linea-rota",             // opcional: modpack de Mochos necesario para entrar
  "query": "minecraft",                   // opcional: minecraft | hyquery | none (ver abajo)
  "queryPort": 25565,                     // opcional: puerto de la consulta si es otro
  "icon": "icon.png",                     // opcional: si falta se usa el del modpack
  "banner": "banner.png",                 // opcional: si falta se usa el del modpack
  "tags": ["Survival"],
  "featured": true,                       // aparece primero
  "hidden": false,                        // true = oculto en el launcher
  "links": { "discord": "https://discord.mochos.xyz" }
}
```

- **Minecraft**: el estado y los jugadores se consultan con el ping estándar de Minecraft (el mismo de
  la lista de servidores del juego). Si el servidor tiene `modpack`, el botón **Jugar** abre ese modpack
  y entra directamente al servidor; si el jugador no lo tiene, el botón lleva a instalarlo.
- **Hytale**: el launcher detecta si el *Hytale Launcher* está instalado; si lo está, **Jugar** lo abre
  y copia la IP; si no, **Descargar** lleva a hytale.com. Hytale no tiene una consulta de estado
  propia: el servidor necesita el plugin [HyQuery](https://github.com/Hyvote/hyquery) (UDP en el mismo
  puerto del juego) y `"query": "hyquery"`. Sin plugin (`"query": "none"`, el valor por defecto) no
  se muestran el estado ni los jugadores. Para ver los nombres de los conectados, activa
  `showPlayerList` en `mods/HyQuery/config.json`.

Después de añadir o cambiar un servidor, ejecuta `node scripts/build-index.mjs` (o deja que lo haga la Action).

## Modo desarrollo

Un modpack o servidor con `"dev": true` solo aparece en el launcher (1.4 o posterior) de las
cuentas de [`desarrollo.json`](desarrollo.json), con la etiqueta **«Desarrollo»**. Sirve para ver
cómo queda antes de publicarlo. No sale en el catálogo de la web ni en launchers anteriores:
`build-index.mjs` lo pone en la sección `dev` de `index.json`, que solo lee el launcher 1.4+. Su
página de la web sí se abre con el enlace (`mochos.xyz/launcher/modpacks/<id>`, el botón **Copiar
enlace** del launcher), con un aviso de que está en desarrollo y sin la descarga del archivo.

`desarrollo.json` no guarda nombres sino un hash de la cuenta (SHA-256 del UUID de Minecraft), así
que la lista no dice quién tiene acceso. Para añadir a alguien:

```bash
node scripts/tester-hash.mjs lorspi      # busca el UUID de la cuenta y escribe su hash
```

y pega el hash en `testers`. Solo valen **cuentas de Microsoft**: una cuenta offline puede ponerse
cualquier nombre.

> **Ojo:** el repositorio es público. El modpack en desarrollo (su `modpack.json`, imágenes y
> Release) se puede leer aquí; el modo desarrollo solo evita que aparezca en el launcher y en la
> web. Y quien sospeche de una cuenta concreta puede calcular su hash y ver si está en la lista.

- Para **publicarlo**, quita `"dev": true` (o ponlo en `false`). El id no cambia, así que quien lo
  instaló en desarrollo sigue con la misma instancia.
- Si **pasas a desarrollo** un modpack que ya era público, quien lo tenga instalado lo conserva y
  sigue recibiendo actualizaciones en el launcher 1.4+, pero deja de verlo en el catálogo. En los
  launchers anteriores se desvincula (como al retirarlo); al abrir el launcher 1.4+ le aparece
  **Actualizar** para volver a vincularlo.
- Un servidor público no puede usar un modpack en desarrollo (`build-index.mjs` da error): pon
  también `"dev": true` en el servidor.
