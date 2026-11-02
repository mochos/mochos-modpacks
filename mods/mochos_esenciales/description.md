**Mochos Esenciales** hace con pantallas de verdad todo lo que otros mods de esenciales hacen con comandos: jugadores, grupos de amigos, lugares y warps, terrenos protegidos, una economía con monedas, banco y tienda, un chat nuevo, páginas de ayuda y un panel de administración completo, todo a un clic de tu inventario.

Abre el inventario y aparece una columna de pestañas a la izquierda. Todas las pantallas se adaptan a cualquier tamaño de ventana y escala de GUI. Pensado para servidores, pero también funciona en un jugador.

### Requisitos

- **[Diorama](https://modrinth.com/mod/diorama-map)** 0.6.0 o posterior (cliente, opcional), para la pestaña **Mapa**. El launcher de Mochos instala Diorama 0.7.0 junto con el mod.

> **No uses Diorama Addons: Claims ni Client Map con este mod:** los terrenos y el mapa ya vienen incluidos. Si los tenías, quítalos; tus terrenos y su configuración se conservan.

### Pestañas

- **Inventario:** el inventario de siempre, ahora con las pestañas al lado.
- **Mapa:** abre el mapa de [Diorama](https://modrinth.com/mod/diorama-map) con las pestañas encima. El mapa muestra los terrenos, el mapa explorado compartido, ubicaciones compartidas y los jugadores de tu grupo.
- **Terrenos:** reclama y protege chunks desde un mapa del terreno real: clic o arrastrar para reclamar o liberar, varios terrenos con nombre, amigos con plantillas y permisos uno a uno, y permisos públicos. Tecla **G** o `/claims menu`.
- **Jugadores:** conectados, buscador y orden por cercanía o alfabético. Chat directo, solicitudes de viaje e invitaciones a grupos. **Grupos de amigos**: crear, invitar, expulsar, renombrar, elegir color y salir.
- **Viajes:** warps del servidor (con nombre, icono y descripción opcionales) y tus lugares (nombre, mundo y coordenadas). Clic para viajar. Precio y espera por tipo de viaje.
- **Economía:** banco (consignar, retirar, transferir, agrupar monedas y una ranura para soltarlas), tienda con buscador por objeto o vendedor, vender tus objetos y gestionar tus ventas con su propio inventario de stock. El admin lleva una **tienda del servidor** con stock infinito que también puede comprar a los jugadores.
- **Ayuda:** páginas escritas por el admin en **Markdown**: títulos, negrita, cursiva, tachado, código, listas (anidadas y de tareas), citas, tablas, enlaces e imágenes desde URL (PNG, JPG, GIF) con el ancho que quieras (`{width=120}`). Editor en el juego con vista previa.
- **Configuración:** quién puede pedirte viajes, escribirte o invitarte (todos, solo amigos o nadie), aceptar solo los viajes de amigos, ocultar tu distancia, avisos de pagos, sonido y volumen de cada chat, notificaciones, el aspecto del chat (hora, líneas, ancho, opacidad y duración) y tu dinero junto a la barra rápida.
- **Administración** (solo operadores): activar o desactivar cada módulo (también Terrenos y Mapa), precios y esperas de viajes, lugares por jugador, límites de terrenos (chunks, terrenos y amigos), dinero inicial, comisión de la tienda y límites del chat; dificultad, PvP, MOTD y reglas del juego; baneos (también temporales) y lista blanca. Por jugador: estadísticas (con dinero), ver su inventario y cofre de ender, ir o traer, curar, modo de juego, silenciar, expulsar, banear, sumar o fijar dinero y **su propia configuración** de viajes y terrenos (precios, esperas, lugares y límites distintos a los del servidor). Un **modo admin global** que se enciende y apaga con un switch, para ver el servidor como un jugador normal.

### Un chat nuevo

Sustituye al chat de vanilla (**T**): conversaciones a la izquierda (global, grupos y directos) con contador de no leídos, mensajes con formato Markdown y enlaces clicables, notificaciones emergentes y sonido por tipo de chat. Las solicitudes de viaje y las invitaciones a grupos llegan al chat directo con botones **Aceptar / Rechazar**. **Tab** cambia de conversación. Los **comandos** se escriben en el mismo chat (también con la tecla `/`), con el autocompletado y las sugerencias de vanilla.

### El Ceitil, una moneda de verdad

| Objeto | Valor |
|---|---:|
| Ceitil | 1 |
| Pila de ceitiles | 10 |
| Bolsa de ceitiles | 100 |

El efectivo son objetos; el banco guarda tu saldo. Al retirar recibes las mínimas monedas y al pagar te dan el cambio. En la mesa de trabajo una pila se deshace en 10 ceitiles y una bolsa en 10 pilas («Agrupar monedas» en el banco hace lo contrario).

### Comandos rápidos

| Comando | Qué hace |
|---|---|
| `/home [nombre]` · `/sethome [nombre]` · `/delhome <nombre>` | Tus lugares |
| `/warp <nombre>` | Viajar a un warp del servidor |
| `/tpa <jugador>` | Pedir viajar hasta un jugador |
| `/balance` · `/pay <jugador> <cantidad>` | Dinero |
| `/claim` · `/unclaim` · `/claims menu` | Reclamar o liberar el chunk donde estás, abrir la pantalla de terrenos |
| `/eco give\|take\|set <jugador> <cantidad>` | Admin: cambiar el dinero de un jugador |

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** (el mod añade objetos y pantallas) |

Requiere **Minecraft 1.21.1** y **NeoForge 21.1.265 o superior**. No necesita otros mods: los terrenos y el mapa vienen incluidos.

- Configuración del servidor: `config/mochos_esenciales-server.toml` (también desde la pestaña Administración).
- Terrenos: `config/mochos_esenciales-claims-server.toml` (los límites también desde Administración → Terrenos).
- Mapa: `config/mochos_esenciales-clientmap-common.toml`.
- Configuración personal: `config/mochos_esenciales-client.toml` (desde la pestaña Configuración).
- Páginas de ayuda: `config/mochos_esenciales/help/*.md`. El orden lo da el prefijo del archivo (`01-…`) y el título, el primer encabezado. La primera vez se crean cuatro páginas de ejemplo.

Idiomas: **español** e **inglés**.

### Combina muy bien con

- **[Diorama](https://modrinth.com/mod/diorama-map)** (opcional, cliente): la pestaña **Mapa** abre el mapa de Diorama con las pestañas encima, y el mapa muestra los terrenos, el mapa explorado compartido, ubicaciones compartidas y los jugadores de tu grupo.
- **Diorama Addons: Web Map** (servidor): tus terrenos y el chat público en un mapa web en vivo.

### Acerca de

No está afiliado ni respaldado por los autores de Diorama.
