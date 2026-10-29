# Cómo publicar un servidor de la comunidad

Cada carpeta de aquí es un servidor que aparece en el **Mochos Launcher**, en
**Servidores → Comunidad**. El nombre de la carpeta es el `id` del servidor (minúsculas, números y
guiones: `la-linea-rota`).

El launcher muestra de cada servidor: el juego, si está en línea, los jugadores conectados, la IP
para copiar y un botón para jugar.

```
servidores/
└── mi-servidor/
    ├── servidor.json   ← datos del servidor (obligatorio)
    └── icon.png        ← icono cuadrado, 256×256 (opcional)
```

No hace falta sacar una versión nueva del launcher: al hacer push, el servidor aparece en todos los
launchers en unos minutos.

---

## Publicar un servidor nuevo

### 1. Crear la carpeta y `servidor.json`

Crea `servidores/<id>/servidor.json`.

**Servidor de Minecraft con un modpack de Mochos:**

```json
{
  "$schema": "../../schema/servidor.schema.json",
  "id": "la-linea-rota",
  "name": "La Línea Rota",
  "summary": "Survival entre amigos con Create, aviones y dirigibles.",
  "game": "minecraft",
  "address": "linearota.mochos.xyz",
  "modpack": "la-linea-rota",
  "tags": ["Survival", "Create"],
  "featured": true,
  "links": {
    "discord": "https://discord.mochos.xyz"
  }
}
```

**Servidor de Hytale:**

```json
{
  "$schema": "../../schema/servidor.schema.json",
  "id": "hytale",
  "name": "Mochos Hytale",
  "summary": "El servidor de Hytale de la comunidad Mochos.",
  "game": "hytale",
  "address": "hytale.mochos.xyz",
  "icon": "icon.png",
  "query": "hyquery",
  "links": {
    "discord": "https://discord.mochos.xyz"
  }
}
```

### 2. (Opcional) Añadir un icono

Pon un `icon.png` cuadrado (256×256) en la carpeta y añade `"icon": "icon.png"`.

- Si el servidor tiene `modpack` y no tiene icono, se usa el icono del modpack.
- Si no tiene ninguno, se muestra el logo genérico de Mochos.

### 3. Validar, hacer commit y push

```bash
node scripts/build-index.mjs        # valida y regenera index.json; si hay errores, los lista
git add servidores/mi-servidor index.json
git commit -m "Añadir servidor Mi Servidor"
git push
```

Si no tienes Node, sube solo la carpeta del servidor: la GitHub Action valida y regenera `index.json`
sola (revisa en la pestaña **Actions** que salga en verde).

---

## Campos de `servidor.json`

| Campo | Obligatorio | Descripción |
|-------|:-----------:|-------------|
| `id` | ✔ | Igual que el nombre de la carpeta. |
| `name` | ✔ | Nombre que se muestra. |
| `game` | ✔ | `minecraft` o `hytale`. |
| `address` | ✔ | IP o dominio para entrar. Si no usa el puerto por defecto, añádelo: `mc.mochos.xyz:25566`. |
| `summary` | | Frase corta para la tarjeta. |
| `modpack` | | `id` de un modpack de la carpeta [`modpacks/`](../modpacks). Solo Minecraft. |
| `query` | | Cómo se consulta el estado: `minecraft`, `hyquery` o `none` (ver abajo). |
| `queryPort` | | Puerto de la consulta, si no es el mismo de `address`. |
| `icon` | | Icono (ruta dentro de la carpeta). |
| `banner` | | Imagen de cabecera. |
| `tags` | | Etiquetas: `["Survival", "PvP"]`. |
| `featured` | | `true` = aparece primero en la lista. |
| `hidden` | | `true` = se oculta del launcher sin borrarlo. |
| `links` | | Enlaces: `discord`, `website`, o cualquier otro (`"mapa": "https://…"`). |

Puertos por defecto: **Minecraft 25565**, **Hytale 5520**.

## Estado y jugadores conectados (`query`)

| Valor | Para | Requisito en el servidor |
|-------|------|--------------------------|
| `minecraft` | Minecraft (valor por defecto) | Ninguno: es el mismo ping de la lista de servidores del juego (`enable-status=true` en `server.properties`, que viene activado). |
| `hyquery` | Hytale | Plugin [HyQuery](https://github.com/Hyvote/hyquery) en `mods/`. Usa UDP en el mismo puerto del juego, no hay que abrir otro. |
| `none` | Cualquiera (valor por defecto en Hytale) | — No se muestra el estado; solo la IP y el botón. |

Para que en Hytale aparezcan los **nombres** de los conectados (al pasar el ratón), activa
`"showPlayerList": true` en `mods/HyQuery/config.json` del servidor y reinícialo.

## Qué hace el botón de cada servidor

| Juego | Botón |
|-------|-------|
| Minecraft con `modpack` | **Instalar** si el jugador no tiene el modpack, **Actualizar** si hay versión nueva, y **Jugar**, que abre el modpack y entra directamente al servidor. |
| Minecraft sin `modpack` | Solo la IP para copiar (el jugador entra con el modpack que quiera). |
| Hytale | **Jugar** abre el Hytale Launcher y copia la IP; **Descargar** lleva a hytale.com si no lo tiene instalado. |

---

## Cambios habituales

| Quiero… | Qué hacer |
|---------|-----------|
| Cambiar la IP | Edita `address`. |
| Cambiar el modpack del servidor | Edita `modpack` (el modpack tiene que existir y no estar oculto). |
| Quitar un servidor temporalmente | `"hidden": true` |
| Borrar un servidor | Borra su carpeta. |
| Ponerlo el primero | `"featured": true` |

> Si actualizas el modpack de un servidor (carpeta [`modpacks/`](../modpacks)), actualiza también el
> servidor a la misma versión: con mods distintos los jugadores no pueden entrar.

## Errores frecuentes

- **«el modpack "…" no existe (o está oculto)»**: el valor de `modpack` no coincide con ninguna
  carpeta de `modpacks/`, o ese modpack tiene `"hidden": true`.
- **«"id" debe coincidir con el nombre de la carpeta»**: el `id` y la carpeta tienen que ser iguales.
- **Sale «Desconectado» con el servidor encendido**: revisa el puerto de `address`, que el firewall
  deje pasar el puerto (TCP en Minecraft, UDP en Hytale) y, en Hytale, que HyQuery esté instalado.
- **Sale «Estado no disponible»**: el servidor tiene `"query": "none"` (o no lo tiene, en Hytale).
