**Mochos Constructor** es un addon de [Mochos Esenciales](https://mochos.xyz) para usar **WorldEdit sin memorizar comandos**. Pone ventanas, ítems y vistas previas sobre [WorldEdit](https://modrinth.com/plugin/worldedit) para construir rápido y sin miedo.

### Seleccionar

- **Selector:** clic izquierdo y derecho marcan las esquinas; **Ctrl + rueda** agranda o encoge la cara hacia la que miras (de 5 en 5 con Mayús). Clic derecho al aire abre las herramientas.
- **La selección se ve en el mundo:** contorno, caras suaves y esquinas en color, también a través de los bloques, con su tamaño y número de bloques encima de la barra rápida.
- Va a la par con WorldEdit: `//wand`, `//pos1` o `//expand` se ven aquí, y lo que copias sirve para `//paste`.

### Herramientas

Clic derecho al aire con el Selector abre un panel a un lado, sin tapar el mundo:

- **Copiar, cortar, mover y apilar:** mover, apilar, vaciar, cortar y las formas dibujan en el mundo lo que van a cambiar antes de aplicarlo.
- **Rellenar, reemplazar, paredes, contorno y vaciar** con **paletas de bloques** y porcentajes (de la lista, de la mano o el bloque que miras).
- **Formas:** cubo, esfera, cúpula, cilindro, cono y pirámide, macizas o huecas, donde miras, donde estás o en la selección.
- **Lista de materiales:** cuántos bloques de cada tipo hacen falta, en pilas y cajas de shulker.
- **Deshacer y rehacer** con historial (Ctrl + Z / Ctrl + Y o desde la pestaña), hasta la edición que elijas.

### Esquemas como en Create

- **Gestor de esquemas** (pestaña Constructor → Esquemas) sobre la carpeta de WorldEdit del servidor: buscar, cargar, renombrar, borrar, ver sus materiales, **subir `.schem` y `.schematic` desde tu PC** y descargarlos.
- Al cargar uno recibes un **ítem Esquema**: con él en la mano ves la construcción **translúcida** donde miras. Clic derecho la fija; luego **gírala, refléjala y muévela** bloque a bloque y pégala con o sin aire. R gira y Ctrl + rueda la acerca o aleja.
- **Pincel** a distancia (hasta 190 bloques): esferas, cilindros o cubos que colocan, recubren, rellenan huecos o borran, con una paleta.

### Sin tirar el servidor

Cada edición se coloca **poco a poco en cada tick** (12 ms por defecto, repartidos entre los jugadores) con barra de progreso y botón de cancelar: pegar un castillo enorme no congela a nadie. Lo hecho siempre se puede deshacer.

### Para el administrador

Los operadores siempre pueden usarlo. En **Administración → Constructor** das acceso a otros jugadores y fijas el máximo de bloques por edición (operadores y resto), el tiempo por tick, cuántas ediciones se pueden deshacer y el tamaño de subida. Quien no es operador solo edita donde podría romper bloques a mano (respeta los terrenos reclamados y la protección del spawn).

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio**, con **WorldEdit 7.3** |
| Cliente | **Obligatorio** (WorldEdit solo hace falta para jugar en un mundo propio) |

Requiere **Mochos Esenciales 0.23.0 o posterior** y **WorldEdit 7.3**: al instalar el addon desde el launcher también se instalan, si no los tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

- Esquemas: la carpeta de WorldEdit (`config/worldedit/schematics`).
- Ajustes: `config/mochos_constructor/ajustes.json`.

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
- **Mochos NPCs:** comerciantes, banqueros y editor de entidades.
- **Mochos Ranking:** rankings de jugadores, con tablones y podios en el mundo.
- **Mochos Mapa Web:** el mapa del servidor en el navegador.
- **Mochos Carteles:** carteles con texto, imágenes y modelos en el mundo.
- **Mochos Scripts:** scripts en español para comandos, eventos y menús, con editor de bloques.
