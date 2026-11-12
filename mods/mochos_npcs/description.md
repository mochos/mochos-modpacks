**Mochos NPCs** es un addon de [Mochos Esenciales](https://mochos.xyz) con comerciantes, aldeanos, NPCs con diálogos, misiones aleatorias, árboles de misiones, banqueros y un editor de entidades para tu servidor. Lleva la economía y la aventura al mundo: los jugadores ponen sus propias tiendas, el servidor tiene guías, cazarrecompensas, comerciantes y banqueros, y los administradores editan cualquier entidad sin comandos.

### Capacidades

Cada NPC combina las **capacidades** que quieras, cada una con su interruptor en el editor: **diálogo**, **comercio** (en la tienda de Mochos o en la ventana de aldeano de Minecraft), **banco**, **experiencia**, **misiones aleatorias** y **árboles de misiones**. Al hacer clic derecho, si tiene diálogo se abre el diálogo; si solo tiene una capacidad, esa directamente; y si tiene varias, un menú con un botón por capacidad.

### Comerciantes de jugadores

Con el objeto **Generar comerciante** (se fabrica, se compra en la tienda o lo da el admin), cualquier jugador pone su propio comerciante:

- **Vende y compra:** cada comercio vende un ítem (por dinero, por ítems o por cualquiera de los dos: el comprador elige) o lo compra a otros jugadores, pagando con las monedas que el dueño deja en su inventario, con cambio.
- **Inventario propio** de hasta dos cofres dobles: lo que vende sale de ahí y ahí llegan los pagos. El dinero va al banco del dueño.
- **Sin ranuras de pago:** los ítems que pide se descuentan directamente de tu inventario. La tienda muestra tu dinero en el banco y en efectivo.
- **Aviso de cada venta** e **historial** de ventas y compras. Con **Mochos Ranking**, cuentan en los rankings de ventas y compras.
- **Su aspecto:** aldeano (con profesión y bioma), vendedor ambulante, gólem, zorro, allay… o un **jugador con skin SD o HD** (hasta 1024×1024) subida desde un archivo o una URL. También bebé, tamaño y si mira a los jugadores.
- Bajo su nombre aparece **su dueño** en letra más pequeña. Con el inventario vacío, el comerciante se puede recoger: queda guardado entero en el huevo (aspecto, nombre, comercios y opciones) y al usarlo vuelve el mismo comerciante.

### Banqueros y comerciantes de experiencia

Cualquier entidad puede ser **banquero**: con clic derecho abre el banco (consignar, retirar, transferir y el cambio de monedas) en su propia ventana. Son empleados del estado: no muestran dueño. Un **comerciante de experiencia** guarda tu experiencia en frascos de 15 y 30 niveles y te la devuelve, gratis y exacta; los frascos se pueden intercambiar. Con la opción **«Ocultar la pestaña Economía»**, el comercio y el banco pasan a hacerse solo con comerciantes y banqueros.

### Aldeanos

Un NPC con comercio en la **ventana de aldeano** tiene el aspecto que quieras (también jugador con skin) y abre la **ventana de comercios de Minecraft**. Sus comercios se editan como los de un aldeano (costes y resultado soltando ítems del cursor, usos máximos o infinitos, experiencia que suelta) y se reponen cada mañana.

### NPCs con diálogo

Como los NPCs de Minecraft Bedrock, pero más personalizables: al hablar con ellos se abre una ventana con el **modelo del NPC al lado** y páginas con título, texto en **Markdown con imágenes** y hasta 12 **botones** con icono. Cada botón puede ir a otra página, cerrar, abrir otra **capacidad del NPC** (comercio, banco, experiencia, misiones), abrir una pestaña de Mochos Esenciales o de un addon (Economía, Viajes, Trabajos, Misiones…), viajar a un warp, abrir el banco, abrir un enlace o ejecutar un **comando** como el jugador o como el servidor; la acción se elige de una lista con buscador. Las páginas se editan en el juego con vista previa, y `{player}` y `{coins}` se rellenan solos.

### Misiones aleatorias

Un NPC con **misiones aleatorias** ofrece a cada jugador un tablero que se renueva cada 30 minutos, con misiones de rareza **gris, verde, azul, morada o dorada** y **tiempo límite**: matar jugadores o **cazar a uno conectado** (se le avisa), matar criaturas, entregar objetos, ordeñar una champivaca, hacer crecer azaleas, ir a unas coordenadas, encontrar una estructura, fabricar, picar, pescar o criar. Las recompensas son monedas, experiencia y objetos: los que el admin pone en cada rareza (también de otros mods) o, si la deja vacía, objetos aleatorios. Las misiones aceptadas se pueden **seguir** en el panel de misiones de la pantalla, con su progreso y el tiempo que queda.

### Árboles de misiones

Con **Mochos Misiones**, un NPC muestra en su propia ventana los capítulos de misiones que el admin le vincula. Pueden ser públicos u **ocultos**: los ocultos no salen en la pestaña Misiones y solo se descubren hablando con ese NPC.

### Editor de entidades

En modo creativo, **mayús + clic derecho sobre cualquier entidad**: nombre con colores y formato, mostrar el nombre, brillo, mirar al jugador, inteligencia artificial, invulnerable, silencioso, gravedad, invisible, bebé, vida y tamaño. En los aldeanos, además: profesión, bioma, nivel, **comercios fijos** y sus comercios (añadir, quitar, reordenar, usos infinitos y experiencia que sueltan).

### Plantillas de NPCs

Exporta cualquier NPC o entidad editada a **JSON** (con sus comercios, páginas y recompensas) y queda como plantilla en **Administración → NPCs**: créala delante de ti, copia su JSON o bórrala. Lo que importes desde un archivo o el portapapeles también se guarda. Trae **diez plantillas de ejemplo**: siete con los comercios de las tiendas de ejemplo de Mochos Esenciales (granjera, constructor, aventurera, decoradora, cambista, pescador y el Banco Central), la **Guía del servidor**, un diálogo que explica Mochos Esenciales y sus addons, **Rosa la cazarrecompensas**, con misiones aleatorias, y **Anselmo el aldeano**.

### Para el administrador

En **Administración → NPCs**: permitir comerciantes de jugadores, máximo por jugador, ranuras de inventario, qué pueden personalizar los jugadores y qué entidades pueden elegir, la **receta** del objeto Generar comerciante (editable, con una por defecto), ocultar la pestaña Economía, las plantillas y la lista de comerciantes con un botón para ir. En **Misiones aleatorias**: misiones contra jugadores, cuántas a la vez, cuántas en el tablero, cada cuánto se renueva y qué tipos se ofrecen (lo que pueden pedir, de cualquier mod, está en `config/mochos/npcs-misiones.json`). Comandos: `/npcs huevo [jugadores] [cantidad]`, `/npcs misiones recargar` y `/npcs misiones reiniciar <jugadores>`.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.20.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

### Otros addons de Mochos Esenciales

- **Mochos Tablist:** diseña la lista de jugadores del servidor.
- **Mochos Acciones Rápidas:** rueda de acciones con una tecla.
- **Mochos Trabajos:** trabajos con niveles, pago en Ceitiles y misiones diarias.
- **Mochos Apariencia:** sube tus skins SD y HD y elige la que llevas.
- **Mochos Tareas:** listas de tareas para tus grupos de amigos.
- **Mochos Tiempo:** límite de tiempo de juego por día.
- **Mochos Anuncios:** tablón de anuncios de los jugadores.
- **Mochos Misiones:** una campaña de misiones hasta el Dragón del End.
- **Mochos Recursos:** paquetes de recursos del servidor desde el juego.
- **Mochos Forja:** editor de items para administradores.
- **Mochos Ranking:** rankings de jugadores, con tablones y podios en el mundo.
- **Mochos Mapa Web:** el mapa del servidor en el navegador.
- **Mochos Carteles:** carteles con texto, imágenes y modelos en el mundo.
