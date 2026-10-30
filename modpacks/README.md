# Cómo cargar o actualizar un modpack

Cada carpeta de aquí es un modpack que aparece en el **Mochos Launcher**. El nombre de la carpeta es
el `id` del modpack (minúsculas, números y guiones: `la-linea-rota`).

El archivo pesado del modpack (`.mrpack` o `.zip`) **no se sube al repositorio**: va a una
[Release de GitHub](https://github.com/mochos/mochos-modpacks/releases). En esta carpeta solo van los
metadatos y las imágenes.

```
modpacks/
└── mi-modpack/
    ├── modpack.json      ← metadatos (obligatorio)
    ├── description.md    ← descripción larga (markdown)
    ├── CHANGELOG.md      ← historial de cambios
    ├── contents.json     ← generado: lista de mods, resourcepacks y shaders (no editar a mano)
    ├── icon.png          ← icono cuadrado, 256×256
    └── images/
        ├── banner.png    ← cabecera, 1600×600
        └── captura-1.png ← capturas para la galería (opcional)
```

---

## Actualizar un modpack existente

Ejemplo: subir **La Línea Rota** de la versión `1.11.1` a la `1.12`.

### 1. Exportar el modpack

- **Modrinth App / Prism Launcher:** *Exportar → Modrinth* → archivo `.mrpack` (recomendado).
- **CurseForge:** *Exportar perfil* → archivo `.zip`.

Ponle un nombre claro, por ejemplo `La-Linea-Rota-1.21.1-v1.12.mrpack`.

### 2. Sacar el SHA-1 y el tamaño del archivo

En **PowerShell** (Windows):

```powershell
(Get-FileHash .\La-Linea-Rota-1.21.1-v1.12.mrpack -Algorithm SHA1).Hash.ToLower()
(Get-Item .\La-Linea-Rota-1.21.1-v1.12.mrpack).Length
```

En **Linux / macOS**:

```bash
sha1sum La-Linea-Rota-1.21.1-v1.12.mrpack
stat -c %s La-Linea-Rota-1.21.1-v1.12.mrpack   # macOS: stat -f %z
```

Guarda los dos valores: el SHA-1 (40 caracteres) y el tamaño en bytes.

### 3. Crear la Release con el archivo

**Desde la web:** [Releases → Draft a new release](https://github.com/mochos/mochos-modpacks/releases/new).

| Campo | Valor |
|-------|-------|
| Tag | `<id>-<versión>` → `la-linea-rota-1.12` (crear el tag nuevo) |
| Título | `La Línea Rota 1.12` |
| Descripción | Los cambios de esta versión |
| Archivos | Arrastra el `.mrpack` / `.zip` |

Pulsa **Publish release**.

**O desde la terminal** (con [GitHub CLI](https://cli.github.com/)):

```bash
gh release create la-linea-rota-1.12 La-Linea-Rota-1.21.1-v1.12.mrpack \
  --repo mochos/mochos-modpacks --title "La Línea Rota 1.12" --notes "Cambios…"
```

La URL de descarga queda así:

```
https://github.com/mochos/mochos-modpacks/releases/download/<tag>/<nombre-del-archivo>
```

> Comprueba que la URL descarga el archivo (pégala en el navegador) antes de seguir.

### 4. Editar `modpack.json`

Cambia estos campos:

```jsonc
{
  "version": "1.12",                       // ← versión nueva: los jugadores verán «Actualizar»
  "minecraft": "1.21.1",                   // ← solo si cambió
  "loader": { "type": "neoforge", "version": "21.1.260" },  // ← solo si cambió
  "source": {
    "type": "mrpack",                      // mrpack para .mrpack, curseforge-zip para .zip de CurseForge
    "url": "https://github.com/mochos/mochos-modpacks/releases/download/la-linea-rota-1.12/La-Linea-Rota-1.21.1-v1.12.mrpack",
    "sha1": "…",                           // ← el SHA-1 del paso 2
    "size": 13600000                       // ← el tamaño del paso 2
  },
  "updatedAt": "2026-11-02"                // ← fecha de hoy (AAAA-MM-DD)
}
```

### 5. Añadir los cambios a `CHANGELOG.md`

La versión nueva va **arriba**:

```markdown
## 1.12

- Añadido Create: Steam 'n' Rails.
- Quitado Distant Horizons (daba problemas en equipos con poca RAM).

## 1.11.1

- …
```

### 6. Generar la lista de contenido

La pestaña **Contenido** de la web ([mochos.xyz/launcher/modpacks/&lt;id&gt;](https://mochos.xyz/launcher))
muestra cada mod, resourcepack y shader del modpack con su enlace a Modrinth o CurseForge. Esa lista
sale de `contents.json`, que se genera leyendo el archivo del modpack:

```bash
node scripts/build-contents.mjs la-linea-rota                                         # descarga el archivo de la Release
node scripts/build-contents.mjs la-linea-rota --file ./La-Linea-Rota-1.21.1-v1.12.mrpack  # o usa el que ya tienes
```

- Comprueba que el archivo coincide con el `sha1` de `modpack.json`, así que hazlo **después** del paso 4.
- **`.mrpack`:** los nombres, iconos y enlaces salen de la API de Modrinth (no pide key).
- **`.zip` de CurseForge:** salen del `modlist.html` que CurseForge mete en el `.zip` al exportar.
  Los iconos se piden a la API de CurseForge, que necesita key: ponla en un `.env` en la raíz del
  repo (`CURSEFORGE_API_KEY=...`, ya está en `.gitignore`). Sin key la lista sale igual, sin iconos.
- Lo que va suelto en `overrides/mods`, `overrides/resourcepacks` u `overrides/shaderpacks` aparece
  en la lista **sin enlace**, con el nombre del archivo.

Sin `contents.json`, la web no muestra la pestaña. Si `version` cambia y no lo regeneras,
`build-index.mjs` avisa y la web sigue mostrando la lista anterior.

### 7. Validar, hacer commit y push

```bash
node scripts/build-index.mjs        # valida y regenera index.json; si hay errores, los lista
git add modpacks/la-linea-rota index.json
git commit -m "La Línea Rota 1.12"
git push
```

Si no tienes Node, sube solo la carpeta del modpack: la GitHub Action valida y regenera `index.json`
sola (revisa en la pestaña **Actions** que salga en verde). `contents.json` sí hay que generarlo con
Node (paso 6).

En unos minutos todos los launchers muestran **Actualizar** en ese modpack.

### Qué hace el launcher al actualizar

Solo toca **mods, resourcepacks y shaders del modpack**: borra los que ya no están, descarga los
nuevos y reemplaza los que cambiaron. **No** se sobrescriben las configuraciones, `options.txt`, la
lista de servidores, los mundos ni lo que haya añadido el jugador.

> Si el modpack tiene un **servidor de la comunidad** (carpeta [`servidores/`](../servidores)),
> actualiza también el servidor a la misma versión: los jugadores con el modpack nuevo podrían no
> poder entrar a un servidor con mods antiguos.

---

## Cargar un modpack nuevo

1. Crea la carpeta `modpacks/<id>/` (por ejemplo `modpacks/mi-modpack/`).
2. Añade `icon.png` (256×256) y, si quieres, `images/banner.png` (1600×600) y capturas.
3. Escribe `description.md` (qué incluye, requisitos) y `CHANGELOG.md`.
4. Sigue los pasos **1 a 3** de arriba para exportar el modpack y crear su Release.
5. Crea `modpack.json` (copia uno existente y cámbialo):

```jsonc
{
  "$schema": "../../schema/modpack.schema.json",
  "id": "mi-modpack",                       // = nombre de la carpeta
  "name": "Mi Modpack",
  "summary": "Frase corta para las tarjetas.",
  "description": "description.md",
  "changelog": "CHANGELOG.md",
  "version": "1.0",
  "minecraft": "1.21.1",
  "loader": { "type": "neoforge", "version": "21.1.252" },  // vanilla | fabric | quilt | forge | neoforge
  "icon": "icon.png",
  "banner": "images/banner.png",
  "gallery": ["images/captura-1.png"],      // [] si no hay capturas
  "tags": ["Survival", "Shaders"],
  "featured": false,                        // true = destacado en la portada del launcher
  "authors": ["Mochos Studio"],
  "recommendedRamMb": 6144,
  "source": {
    "type": "mrpack",
    "url": "https://github.com/mochos/mochos-modpacks/releases/download/mi-modpack-1.0/Mi-Modpack-1.21.1-v1.0.mrpack",
    "sha1": "…",
    "size": 0
  },
  "server": {
    "enabled": true,                        // permite «Crear servidor» desde el launcher
    "recommendedRamMb": 6144,
    "excludeMods": []                       // prefijos de mods que NO van al servidor ("iris-", "sodium-")
  },
  "links": {
    "website": "https://mochos.xyz",
    "discord": "https://discord.mochos.xyz"
  },
  "updatedAt": "2026-11-02"
}
```

6. Genera `contents.json` (paso **6** de arriba).
7. Valida, haz commit y push (paso **7** de arriba).

---

## Otros cambios habituales

| Quiero… | Qué cambiar en `modpack.json` |
|---------|-------------------------------|
| Ocultar un modpack sin borrarlo | `"hidden": true` |
| Destacarlo en la portada | `"featured": true` |
| Cambiar icono o portada | Reemplaza `icon.png` / `images/banner.png` (mismo nombre) |
| Cambiar solo la descripción | Edita `description.md` (no hace falta cambiar `version`) |
| Usar un modpack de Modrinth | `"source": { "type": "modrinth", "project": "slug-del-proyecto" }` |
| Usar un modpack de CurseForge | `"source": { "type": "curseforge", "projectId": 123456 }` |

Los cambios que **no** tocan `version` (descripción, imágenes, etiquetas) se ven en el launcher sin
que los jugadores tengan que actualizar nada.

## Errores frecuentes

- **«"id" debe coincidir con el nombre de la carpeta»**: el `id` de `modpack.json` y la carpeta tienen
  que ser iguales.
- **«icon "…" no existe»**: la ruta no coincide con el archivo (ojo con mayúsculas y extensiones).
- **La descarga falla con «hash incorrecto»**: el `sha1` no corresponde al archivo de la Release
  (¿se volvió a exportar después de calcularlo?). Recalcúlalo con el archivo que subiste.
- **Los jugadores no ven «Actualizar»**: no se cambió `version`, o la Action falló (pestaña Actions).
- **«contents.json es de otra versión»**: se cambió `version` sin regenerar la lista. Ejecuta
  `node scripts/build-contents.mjs <id>`.
- **`build-contents.mjs`: «el sha1 del archivo no coincide»**: el archivo no es el de la Release
  (o el `sha1` de `modpack.json` está mal).
- **`build-contents.mjs`: «el .zip no trae modlist.html»**: el `.zip` no se exportó desde CurseForge.
  Vuelve a exportarlo con *Exportar perfil*.
