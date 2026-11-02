**Diorama Addons: Web Map** pone todo tu mundo en el navegador, dibujado en ángulo al estilo del mapa de Diorama, con texturas reales de bloques, sol y sombras.

Corre dentro de tu servidor NeoForge 1.21.1 y sirve un mapa en vivo en `http://<tu-servidor>:8123/`. Los jugadores no instalan nada: solo abren un enlace. Es un mod **de servidor**; en una instancia del launcher solo sirve el mapa de tus mundos de un jugador.

### Características

- **Estilo Diorama:** el mundo se dibuja en ángulo a partir de las texturas reales de los bloques, con sol, sombras y contornos. Los árboles y acantilados sobresalen del mapa.
- **Bloques de mods bien dibujados:** usan las texturas de sus propios jars.
- **En vivo:** el terreno recién explorado o modificado aparece en segundos, incluso antes de que el juego lo guarde. Las páginas abiertas solo recargan los tiles que cambiaron.
- **Ligero para el servidor:** los tiles se generan en segundo plano, con baja prioridad y un límite de chunks por segundo; las comprobaciones en vivo usan un pequeño presupuesto de tiempo por tick.
- **Zoom, dimensiones y spawn:** niveles de zoom, un selector para cada dimensión que actives en la configuración y un botón que centra el mapa en el punto de aparición.
- **Terrenos:** los claims de Diorama Addons: Claims o de Mochos Esenciales se pintan sobre el terreno con un color por propietario y una etiqueta con el nombre del terreno y su dueño. Los miembros y permisos nunca se publican.
- **Chat y conectados:** chat público opcional de solo lectura (con entradas y salidas) y lista de jugadores conectados.
- **Casillas de capas:** los visitantes muestran u ocultan terrenos, jugadores y chat; el navegador recuerda la elección.
- **Configuración en el juego:** los operadores con el mod en su cliente cambian el título, el icono y las capas desde una pantalla (lista de mods → Config, o `/webmap config`). Todo está también en el archivo de configuración y se aplica sin reiniciar.
- **Privado por defecto:** las posiciones de los jugadores y el chat están **desactivados** hasta que los actives, porque el mapa puede estar expuesto a internet.
- **Nunca tumba el servidor:** si el puerto está ocupado, registra un error claro y el juego sigue funcionando.
- **API JSON:** `/api/info`, `/api/claims`, `/api/players`, `/api/chat` y `/api/changes` para tus propias herramientas.
- **Opción de mapa plano:** usa `render.style = "TOP_DOWN"` para un mapa cenital clásico.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | Opcional: solo para la pantalla de configuración en el juego |

Requiere **Minecraft 1.21.1** y **NeoForge 21.1.265 o superior**.

1. Pon el jar en la carpeta `mods` del servidor y arráncalo.
2. Abre `http://<dirección-del-servidor>:8123/` en un navegador.
3. Cambia el puerto, la dirección de enlace, la velocidad de renderizado, las dimensiones, el título, el icono y las capas en `config/dioaddons_webmap-common.toml` (o en el juego con `/webmap config`).

> **Primer arranque:** el estilo Diorama usa las texturas vanilla del jar oficial del cliente de Minecraft, que se descarga una vez desde Mojang (unos 27 MB, verificado con el SHA-1 de Mojang). El estilo `TOP_DOWN` no necesita descarga.

### Comandos (operadores)

| Comando | Qué hace |
|---|---|
| `/webmap status` | Servidor web, cola de renderizado y capas |
| `/webmap render [dimensión]` | Vuelve a renderizar todo |
| `/webmap clearcache` | Borra todos los tiles y empieza de nuevo |
| `/webmap reload` | Aplica los cambios del archivo de configuración |
| `/webmap restart` | Reinicia solo el servidor web |
| `/webmap config` | Abre la pantalla de configuración (necesita el mod en tu cliente) |

Referencia de la API HTTP: [docs/webmap-api.md](https://github.com/lorspi/diorama-addons/blob/main/docs/webmap-api.md).

### Combina muy bien con

- **Diorama Addons: Claims:** protección de terreno; sus claims aparecen en el mapa web.
- **Diorama Addons: Client Map:** claims, exploración compartida y waypoints dentro del mapa de Diorama.
- **Mochos Esenciales:** sus terrenos y su chat público también aparecen en el mapa web.

Cada mod funciona solo; juntos comparten los claims automáticamente.

### Acerca de

Diorama Addons es un conjunto de addons no oficial, hecho por la comunidad e inspirado en el mod de mapa [Diorama](https://modrinth.com/mod/diorama-map). No está afiliado ni respaldado por los autores de Diorama. La interfaz web usa [Leaflet](https://leafletjs.com) (BSD-2-Clause). Código abierto con licencia MIT.
