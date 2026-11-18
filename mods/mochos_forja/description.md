**Mochos Forja** es un addon de [Mochos Esenciales](https://mochos.xyz) para crear los items, las armas, las prendas, los objetos y las recetas de tu servidor sin comandos. Añade la pestaña **Forja** para administradores: pon un item en la ranura y debajo aparecen todas las opciones para personalizarlo, con una vista previa de cómo lo verán los jugadores. Arriba tiene las pestañas **Editor de items**, **Recetas**, **Curios** (si está instalado) y **Guardados**.

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
- **Editor NBT completo:** todos los componentes del item, los cambiados y los de su tipo: edítalos en SNBT, quítalos o vuelve al del tipo de item; añade cualquier componente por su id o edita el item completo en SNBT. Los errores dicen qué falla.

### Plantillas

12 **plantillas en blanco** de distintos materiales (madera, piedra, hierro, oro, diamante, esmeralda, netherita, cobre, amatista, cuero, pergamino y cristal) para crear items nuevos, y 9 **plantillas de luz** (blanca, roja, naranja, amarilla, verde, cian, azul, morada y rosa) que ya brillan. Se sacan con un clic desde la Forja o desde el modo creativo.

### Modelos de Blockbench: items, armas, prendas y objetos

Importa un proyecto de **Blockbench** (`.bbmodel`) o una **imagen PNG**: el juego lo dibuja directamente, **sin paquetes de recursos**, con cubos, mallas, grupos y **texturas animadas** (con la velocidad que elijas). Cada jugador lo descarga del servidor la primera vez y los cambios llegan a todos al momento. Cada modelo puede ser:

- **Item:** cualquier item con tu modelo, en la mano, en el inventario, en el suelo y en marcos.
- **Arma o herramienta:** elige el **tipo** (espada, hacha, pico, pala o azada) y el **material** (de madera a netherita). Se sostiene en diagonal como las del juego y el item pasa a ser esa herramienta (daño, velocidad, durabilidad y lo que mina) sin perder sus cambios. Ideal para armas hechas con un PNG plano.
- **Prenda:** sombreros, camisetas, pantalones o botas para la cabeza, el torso, las piernas o los pies. En la **ranura de armadura** (se dibuja en lugar de la armadura y protege lo que le pongas en Atributos) o **cosmética**, encima de la armadura, en el **Vestuario** (pestaña para todos los jugadores o `/vestuario`) o en las ranuras de **Curios**. Los grupos `cabeza`, `cuerpo`, `brazo_derecho`… (o `head`, `body`, `right_arm`…) siguen esa parte del cuerpo al andar: una camiseta mueve las mangas con los brazos.
- **Objeto colocable:** decoración, peluches o estatuas que se colocan mirando al jugador y al romperlos devuelven el mismo item. Colisión a elegir: ninguna, la forma del modelo o bloque completo. Respeta los terrenos y protecciones.

Cada modelo puede tener además un **icono de inventario**: una imagen PNG plana, como las armaduras, que se ve en los inventarios mientras el modelo se sigue viendo en la mano, el cuerpo y el mundo. El icono es parte del modelo: se cambia o se quita desde su engranaje y se borra con él.

### Recetas de todas las mesas

En la pestaña **Recetas** están todas las recetas del juego, de datapacks y de otros mods, con filtros por mesa (crafteo, horno, alto horno, ahumador, fogata, cortapiedras, herrería y otras) y por estado, y un buscador.

- **Desactiva** cualquier receta con un interruptor: nadie podrá fabricarla y desaparece del libro de recetas al momento.
- **Crea recetas** o **cambia las del juego** con casillas como las de cada mesa: pon un item del inventario (los de la Forja se piden con su nombre y modelo) o elígelo de la lista. Cantidad del resultado, experiencia y tiempo de cocción. Las recetas del juego cambiadas se pueden restaurar.
- **Exporta e importa** en el JSON de los datapacks: archivo y portapapeles. Se acepta el archivo exportado, una receta de datapack o una lista de ellas.

Todo se guarda en `config/mochos_forja/recetas.json`, se mantiene tras `/reload` y se aplica a todos los jugadores al instante.

### Ranuras de Curios

Con **Curios** instalado, la pestaña **Curios** crea y quita **tipos de ranura** (anillo, collar, cinturón… o con un id propio) para todos: cuántas tiene cada jugador, qué items aceptan (con su etiqueta o marcados, solo los marcados en la Forja o cualquiera), su dibujo y si es cosmética. El item de la Forja se puede **marcar** para ir en esas ranuras, y a los jugadores conectados se les dan **ranuras extra** (se suman a las de todos y se guardan con el jugador). Los cambios se aplican con «Aplicar», que recarga los datos del servidor.

### Objetos guardados

En la pestaña **Guardados** quedan los items que crees, para sacarlos o dárselos a un jugador cuando quieras. Con el lápiz vuelven a la Forja para **editarlos** y «Guardar los cambios» los actualiza. Cada copia lleva una **marca invisible** con su nombre: **Mochos Scripts** la usa para dar, quitar y reconocer los objetos guardados aunque se gasten, se renombren o se encanten. También con comandos:

- `/forja`: abre la Forja.
- `/forja dar <jugador> <item> [cantidad]`
- `/forja guardar <nombre>`: guarda el item de tu mano (los nombres con espacios van entre comillas).
- `/forja borrar <item>` y `/forja lista`.

Los objetos guardados se guardan, cargan y comparten como JSON desde **Administración → Configuraciones** de Mochos Esenciales.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.23.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Opcional: **Curios** para llevar las prendas cosméticas en sus ranuras y crear ranuras propias.

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
- **Mochos Scripts:** scripts en español para comandos, eventos y menús, con editor de bloques.
- **Mochos Constructor:** WorldEdit sin comandos, con vista previa de esquemas.
- **Mochos Permisos:** permisos, grupos y prefijos con chips.
