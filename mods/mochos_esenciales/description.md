**Mochos Esenciales** hace con pantallas de verdad todo lo que otros mods de esenciales hacen con comandos: jugadores, grupos de amigos, lugares y warps, una economía con monedas, banco y tienda, un chat nuevo, páginas de ayuda y un panel de administración completo, todo a un clic de tu inventario.

Abre el inventario y aparece una columna de pestañas a la izquierda. Todas las pantallas se adaptan a cualquier tamaño de ventana y escala de GUI. Pensado para servidores, pero también funciona en un jugador.

### Pestañas

- **Inventario:** el inventario de siempre, ahora con las pestañas al lado.
- **Mapa:** abre el mapa de [Diorama](https://modrinth.com/mod/diorama-map) con las pestañas encima (si Diorama está instalado).
- **Jugadores:** conectados, buscador y orden por cercanía o alfabético. Chat directo, solicitudes de viaje e invitaciones a grupos. **Grupos de amigos**: crear, invitar, expulsar, renombrar, elegir color y salir.
- **Viajes:** warps del servidor (con nombre, icono y descripción opcionales) y tus lugares (nombre, mundo y coordenadas). Clic para viajar. Precio y espera por tipo de viaje.
- **Economía:** banco (consignar, retirar, transferir, agrupar monedas y una ranura para soltarlas), tienda con buscador por objeto o vendedor, vender tus objetos y gestionar tus ventas con su propio inventario de stock. El admin lleva una **tienda del servidor** con stock infinito que también puede comprar a los jugadores.
- **Ayuda:** páginas escritas por el admin en **Markdown**: títulos, negrita, cursiva, tachado, código, listas (anidadas y de tareas), citas, tablas, enlaces e imágenes desde URL (PNG, JPG, GIF). Editor en el juego con vista previa.
- **Configuración:** quién puede pedirte viajes, escribirte o invitarte (todos, solo amigos o nadie), aceptar solo los viajes de amigos, ocultar tu distancia, avisos de pagos, sonido y volumen de cada chat, notificaciones y el aspecto del chat (hora, líneas, ancho, opacidad y duración).
- **Administración** (solo operadores): activar o desactivar módulos, precios y esperas de viajes, lugares por jugador, dinero inicial, comisión de la tienda y límites del chat; dificultad, PvP, MOTD y reglas del juego; baneos (también temporales) y lista blanca. Por jugador: estadísticas (con dinero), ver su inventario y cofre de ender, ir o traer, curar, modo de juego, silenciar, expulsar, banear, sumar o fijar dinero y límite de lugares.

### Un chat nuevo

Sustituye al chat de vanilla (**T**): conversaciones a la izquierda (global, grupos y directos) con contador de no leídos, mensajes con formato Markdown y enlaces clicables, notificaciones emergentes y sonido por tipo de chat. Las solicitudes de viaje y las invitaciones a grupos llegan al chat directo con botones **Aceptar / Rechazar**. **Tab** cambia de conversación; al escribir `/` pasa al chat de comandos de vanilla con su autocompletado.

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
| `/eco give\|take\|set <jugador> <cantidad>` | Admin: cambiar el dinero de un jugador |

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** (el mod añade objetos y pantallas) |

Requiere **Minecraft 1.21.1** y **NeoForge 21.1.265 o superior**. No necesita otros mods.

- Configuración del servidor: `config/mochos_esenciales-server.toml` (también desde la pestaña Administración).
- Configuración personal: `config/mochos_esenciales-client.toml` (desde la pestaña Configuración).
- Páginas de ayuda: `config/mochos_esenciales/help/*.md`. El orden lo da el prefijo del archivo (`01-…`) y el título, el primer encabezado. La primera vez se crean cuatro páginas de ejemplo.

Idiomas: **español** e **inglés**.

### Combina muy bien con

- **[Diorama](https://modrinth.com/mod/diorama-map)** (opcional, cliente): la pestaña **Mapa** abre el mapa de Diorama con las pestañas encima.
- **Diorama Addons: Claims** (opcional, servidor y cliente): añade la pestaña **Terrenos** con una pantalla de claims al estilo de Mochos: mapa de chunks sobre el terreno real, clic o arrastrar para reclamar, miembros con plantillas y permisos por jugador y públicos. La tecla **G** abre esta versión; la original se puede recuperar en Configuración.

### Acerca de

Código abierto con licencia MIT. No está afiliado ni respaldado por los autores de Diorama.
