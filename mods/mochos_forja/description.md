**Mochos Forja** es un addon de [Mochos Esenciales](https://mochos.xyz) para crear los items, las prendas y los objetos de tu servidor sin comandos. Añade la pestaña **Forja** para administradores: pon un item en la ranura y debajo aparecen todas las opciones para personalizarlo, con una vista previa de cómo lo verán los jugadores.

### Qué se puede personalizar

- **Nombre y lore** con colores y formato (`&a`, `&#FF8800`, `&l`… y Markdown), con vista previa. Las líneas se reordenan, editan y quitan.
- **Encantamientos:** cualquiera, en cualquier item, hasta nivel 255. También libros encantados.
- **Pociones:** poción base, color del líquido y efectos con nivel, duración y partículas. Convierte cualquier item en poción, poción arrojadiza, persistente o flecha con efecto.
- **Atributos:** daño, armadura, velocidad, vida, alcance…, con su operación y la ranura en la que funcionan.
- **Aspecto:** tinte de armaduras de cuero, adornos de armadura (patrón y material), cabezas de jugador y modelos o imágenes propias.
- **Luz:** cualquier item puede iluminar de verdad su alrededor mientras se lleva en la mano o está en el suelo (también bajo el agua), con un brillo y partículas del color que elijas.
- **Libros:** título, autor, generación y páginas con formato.
- **Comida:** cualquier item puede volverse comestible.
- **General:** cantidad, tipo de item, rareza, brillo de encantamiento, irrompible, resistente al fuego, tamaño de pila, durabilidad, custom model data y ocultar la descripción.
- **Avanzado:** copia el item en SNBT o como comando `/give`, pega un item del portapapeles y edita su `custom_data`.

### Plantillas

12 **plantillas en blanco** de distintos materiales (madera, piedra, hierro, oro, diamante, esmeralda, netherita, cobre, amatista, cuero, pergamino y cristal) para crear items nuevos, y 9 **plantillas de luz** (blanca, roja, naranja, amarilla, verde, cian, azul, morada y rosa) que ya brillan. Se sacan con un clic desde la Forja o desde el modo creativo.

### Modelos de Blockbench

Importa un proyecto de **Blockbench** (`.bbmodel`) o una **imagen PNG**: el juego lo dibuja directamente, **sin paquetes de recursos**, con cubos, mallas, grupos y **texturas animadas** (con la velocidad que elijas). Cada jugador lo descarga del servidor la primera vez y los cambios llegan a todos al momento. Cada modelo puede ser:

- **Item:** cualquier item con tu modelo, en la mano o en el inventario.
- **Prenda:** sombreros, camisetas, pantalones o botas para la cabeza, el torso, las piernas o los pies. En la **ranura de armadura** (se dibuja en lugar de la armadura y protege lo que le pongas en Atributos) o **cosmética**, encima de la armadura, en el **Vestuario** (pestaña para todos los jugadores o `/vestuario`) o en las ranuras de **Curios**. Los grupos `cabeza`, `cuerpo`, `brazo_derecho`… (o `head`, `body`, `right_arm`…) siguen esa parte del cuerpo al andar: una camiseta mueve las mangas con los brazos.
- **Objeto colocable:** decoración, peluches o estatuas que se colocan mirando al jugador y al romperlos devuelven el mismo item. Colisión a elegir: ninguna, la forma del modelo o bloque completo. Respeta los terrenos y protecciones.

### Biblioteca

Guarda los items que crees para sacarlos o dárselos a un jugador cuando quieras. También con comandos:

- `/forja`: abre la Forja.
- `/forja dar <jugador> <item> [cantidad]`
- `/forja guardar <nombre>`: guarda el item de tu mano.
- `/forja borrar <item>` y `/forja lista`.

La biblioteca se guarda, carga y comparte como JSON desde **Administración → Configuraciones** de Mochos Esenciales.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.20.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Opcional: **Curios** para llevar las prendas cosméticas en sus ranuras.

Solo los administradores (op con el modo admin) pueden usar la Forja; el Vestuario es para todos los jugadores.

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
- **Mochos NPCs:** comerciantes, banqueros y editor de entidades.
- **Mochos Ranking:** rankings de jugadores, con tablones y podios en el mundo.
- **Mochos Mapa Web:** el mapa del servidor en el navegador.
- **Mochos Carteles:** carteles con texto, imágenes y modelos en el mundo.
