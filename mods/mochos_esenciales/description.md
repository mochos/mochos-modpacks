**Mochos Esenciales** hace con pantallas de verdad todo lo que otros mods de esenciales hacen con comandos: jugadores, grupos de amigos, lugares y warps, terrenos protegidos, una economía con monedas, banco y tienda, un chat nuevo, páginas de ayuda y un panel de administración completo, todo a un clic de tu inventario.

Abre el inventario y aparece una columna de pestañas a la izquierda. Todas las pantallas se adaptan a cualquier tamaño de ventana y escala de GUI. Pensado para servidores, pero también funciona en un jugador.

### Requisitos

- **[Diorama](https://modrinth.com/mod/diorama-map)** 0.6.0 o posterior (cliente, opcional), para la pestaña **Mapa**. El launcher de Mochos instala Diorama 0.7.0 junto con el mod.

> **No uses Diorama Addons: Claims ni Client Map con este mod:** los terrenos y el mapa ya vienen incluidos. Si los tenías, quítalos; tus terrenos y su configuración se conservan, y los grupos de mapa pasan a ser grupos de amigos.

### Pestañas

- **Inventario:** el inventario de siempre, con las pestañas al lado y **tus estadísticas** a la izquierda (dinero, tiempo de juego, muertes, lugares, terrenos…).
- **Mapa:** abre el mapa de [Diorama](https://modrinth.com/mod/diorama-map) con las pestañas encima. El mapa muestra los terrenos, lo que exploraron los demás, los **waypoints compartidos** y a los **jugadores lejanos** de tus grupos. En Configuración eliges si ver los terrenos en el mapa y en el minimapa, y si compartir tu ubicación y lo que exploras. Cada waypoint se puede dejar **privado**, hacer **público** o compartir con **uno de tus grupos** desde su propia pantalla.
- **Terrenos:** reclama y protege chunks desde un mapa del terreno real: clic o arrastrar para reclamar o liberar, varios terrenos con nombre, amigos (también **grupos de amigos** enteros) con plantillas y permisos uno a uno, permisos públicos, **notificaciones de bienvenida y despedida** con formato y una **alarma de visitantes** para el dueño y los miembros. Tecla **G** o `/claims menu`.
- **Jugadores:** conectados, buscador y orden por cercanía o alfabético. Chat directo, solicitudes de viaje e invitaciones a grupos. **Bloquea** los mensajes directos o las solicitudes de viaje de quien quieras. **Grupos de amigos**: crear, invitar, expulsar, renombrar, elegir color y salir. Una **brújula** arriba de la pantalla muestra a los miembros de tus grupos con su cabeza, nombre y distancia.
- **Viajes:** warps del servidor (con nombre, icono y descripción opcionales) y tus lugares (nombre, mundo y coordenadas), que puedes **compartir** como públicos o con cada uno de tus grupos. Debajo de «Mis lugares» salen los lugares de tus grupos y los públicos, con un buscador que filtra todos. Clic o botón para viajar; mover, renombrar y eliminar en un desplegable. Precio y espera por tipo de viaje.
- **Economía:** banco (consignar, retirar, transferir con sugerencias de jugadores, ranura para consignar y casillas para **agrupar o separar monedas**), tienda con buscador por objeto o vendedor y el precio en cada botón (comprar en dorado, vender en verde), vender tus objetos y **Mi tienda**: tus anuncios con su propio inventario de stock y el **historial de ventas**. El admin lleva una **tienda del servidor** con stock infinito que también puede comprar a los jugadores.
- **Ayuda:** páginas escritas por el admin en **Markdown**: títulos, negrita, cursiva, tachado, código, listas (anidadas y de tareas), citas, tablas, enlaces e imágenes desde URL (PNG, JPG, GIF) con el ancho que quieras (`{width=120}`). Editor en el juego con vista previa.
- **Configuración:** quién puede pedirte viajes, escribirte o invitarte (todos, solo amigos o nadie), aceptar solo los viajes de amigos, ocultar tu distancia, avisos de pagos, sonido y volumen de cada chat, notificaciones, el aspecto del chat (hora, líneas, ancho, opacidad y duración), cerrar el chat al enviar un mensaje o un comando, tu dinero junto a la barra rápida, tus estadísticas junto al inventario, las opciones del **mapa** y de la **brújula** y, con **Simple Voice Chat**, sus opciones principales y botones para sus grupos y el volumen de cada jugador.
- **Administración** (solo operadores): activar o desactivar cada módulo (también Terrenos y Mapa), precios y esperas de viajes, lugares por jugador, límites de terrenos (chunks, terrenos y amigos), dinero inicial, comisión de la tienda, límites del chat e historial de mensajes directos; **difusión** de anuncios (en el chat, como título o como notificación, para todos o algunos jugadores, al momento o cada N minutos); **textos** del servidor (mensajes de entrada, salida y bienvenida, nombre de la moneda); **orden de las pestañas**; **Configuraciones** para guardar en JSON, cargar, copiar, pegar y limpiar la tienda del servidor, la configuración general y los apartados de los addons (con una **tienda de ejemplo** de 58 anuncios lista para cargar); dificultad, PvP, MOTD y reglas del juego; porcentaje de jugadores durmiendo para pasar la noche, con un amanecer animado; baneos (también temporales) y lista blanca. Por jugador: estadísticas (con dinero), ver su inventario (con la armadura, la mano secundaria y, con **Curios API**, sus ranuras de Curios) y su cofre de ender, ir o traer, curar, modo de juego, silenciar en el chat global, expulsar, banear, sumar o fijar dinero y **su propia configuración** de viajes y terrenos (precios, esperas, lugares y límites distintos a los del servidor). Un **modo admin global** que se enciende y apaga con un switch, para ver el servidor como un jugador normal.

### Un chat nuevo

Sustituye al chat de vanilla (**T**) y ocupa solo la esquina inferior izquierda. Pestañas **Global, Grupos y Directos** con sus no leídos, y cada mensaje marcado con un chip de color de su canal: al pasar el ratón cada una despliega sus conversaciones. Los directos se quitan de la lista sin perder el historial, que guarda el servidor. Mensajes con formato Markdown y enlaces clicables, notificaciones emergentes y sonido por tipo de chat. Las solicitudes de viaje y las invitaciones a grupos llegan al chat directo con botones **Aceptar / Rechazar**. **Tab** cambia de conversación. Al dormir se abre este chat con el botón «Salir de la cama». Los **comandos** se escriben en el mismo chat (también con la tecla `/`), con el autocompletado y las sugerencias de vanilla.

### El Ceitil, una moneda de verdad

| Objeto | Valor |
|---|---:|
| Ceitil | 1 |
| Pila de ceitiles | 10 |
| Bolsa de ceitiles | 100 |

El efectivo son objetos; el banco guarda tu saldo. Al retirar recibes las mínimas monedas y al pagar te dan el cambio. En la mesa de trabajo una pila se deshace en 10 ceitiles y una bolsa en 10 pilas (el conversor del banco agrupa y separa las que quieras). El nombre de la moneda se puede cambiar.

### Textos con formato

Anuncios, mensajes de entrada y salida y notificaciones de terrenos aceptan Markdown y colores de Minecraft (`&a`, `&6`, `&#FF8800`…), con vista previa y variables como `{player}` o `{online}`.

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

### Addons

Mods opcionales que se instalan aparte, desde esta misma sección, y necesitan Mochos Esenciales (0.11.0 o posterior para los más nuevos): al instalar un addon, el launcher también instala o actualiza Mochos Esenciales si hace falta. El mod funciona igual sin ellos. Van en el servidor y en los clientes.

- **Mochos Tablist:** editor de la lista de jugadores (Tab) en Administración → Tablist, con vista previa en vivo: fondo, borde, imagen, cabecera y pie con variables, y cómo se ve cada jugador.
- **Mochos Acciones Rápidas:** rueda de acciones al mantener **Z** (pestañas, warps, lugares, banco, terrenos, cambiar de skin, comandos propios…), configurable por cada jugador.
- **Mochos Trabajos:** pestaña Trabajos con niveles, pago en Ceitiles, misiones diarias, ventajas, ranking, eventos x2 e historial, y un editor de trabajos para el administrador.
- **Mochos Apariencia:** pestaña Apariencia para subir skins SD y HD desde un archivo o una URL y elegir la que llevas; todos la ven. Con Mochos Cédula, también tus skins de Mochos.
- **Mochos Tareas:** una lista de tareas por grupo de amigos, con categorías, responsables y estados, y tareas fijadas en pantalla, bajo el Tab o junto al inventario.
- **Mochos Tiempo:** límite de tiempo de juego por día, con hora de recarga y excepciones por jugador.
- **Mochos Anuncios:** tablón de anuncios de los jugadores, con destacados, aviso a todos, botón de viaje y un tablón que se coloca en el mundo.
- **Mochos Misiones:** una campaña de 66 misiones hasta el Dragón del End, con árbol de misiones, recompensas, bloqueos de progresión opcionales y editor en el juego.
- **Mochos Recursos:** paquetes de recursos del servidor desde el juego: sube .zip o añade enlaces, ordénalos, hazlos obligatorios y recárgalos en vivo a todos.
- **Mochos Forja:** editor de items para administradores: nombre y lore con formato, encantamientos, pociones, atributos, luz de colores, biblioteca de items y modelos de Blockbench.
- **Mochos NPCs:** comerciantes de jugadores que venden y compran con su propio inventario y aspecto (también de jugador con skin), banqueros, editor de entidades y aldeanos y plantillas de NPCs.

### Combina muy bien con

- **[Diorama](https://modrinth.com/mod/diorama-map)** (opcional, cliente): la pestaña **Mapa** abre el mapa de Diorama con las pestañas encima, y el mapa muestra los terrenos, el mapa explorado compartido, los waypoints compartidos (públicos o por grupo) y los jugadores de tus grupos aunque estén lejos. Compatible con Diorama 0.6.0, 0.6.1 y 0.7.0.
- **Diorama Addons: Web Map** (servidor): tus terrenos y el chat público en un mapa web en vivo.

### Acerca de

No está afiliado ni respaldado por los autores de Diorama.
