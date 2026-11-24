**Mochos Tablist** es un addon de [Mochos Esenciales](https://mochos.xyz) para diseñar la lista de jugadores que se abre con **Tab** y la etiqueta sobre la cabeza de cada jugador, desde el juego y sin tocar archivos.

El administrador la edita en **Administración → Tablist** con una vista previa en vivo, y al guardar todos los jugadores la ven igual.

### Características

- **Panel:** color de fondo, opacidad, grosor y color del borde, esquinas redondeadas y relleno.
- **Imagen de fondo** e **imagen de cabecera** desde una URL (PNG o JPG, hasta 8 MiB), por ejemplo el logo de tu servidor.
- **Cabecera y pie** con varias líneas, colores (`&a`, `&#FF8800`) y variables: `{online}`, `{max}`, `{player}`, `{server}` o `{motd}`, `{ping}`, `{tps}`, `{mspt}`, `{time}`, `{day}` y `{clock}`.
- **Jugadores:** el **formato** de cada fila (por defecto `{prefix} {name} {suffix}`, con los **chips** de prefijo y sufijo de Mochos Permisos o LuckPerms), cabeza de la skin, vida, ping, modo de juego, colores, orden (por ejemplo, admins primero) y columnas con un máximo de filas.
- **Nametag:** cambia la etiqueta sobre la cabeza de los jugadores por varias líneas con variables (`{name}`, `{prefix}`, `{suffix}`, `{health}`, `{max_health}`, `{hearts}`, `{absorption}`, `{armor}`, `{ping}`, `{world}`, `{gamemode}`) y los chips de prefijo y sufijo. Color y opacidad del fondo, tamaño, altura, sombra, letras tenues a través de paredes como en vanilla y el tuyo en tercera persona (F5), con vista previa con tu personaje y un editor de líneas con tus propios datos. Sigue las reglas de vanilla para cuándo se ve un nombre (distancia, agacharse, invisibilidad, equipos, F1). Desactivado por defecto.
- **Texto enriquecido:** con Ember's Text API y el texto enriquecido de Mochos Esenciales, las líneas de la lista y del nametag aceptan efectos: `<rainbow>{name}</rainbow>`, `<wave>&6VIP</wave> {name}`. En el nametag no se dibujan los objetos dentro del texto (en la lista sí).
- **Vista previa con jugadores de ejemplo** para probar columnas y filas (solo la ve el administrador).
- Si la cabecera o el pie están vacíos se muestran los del servidor, como en la lista normal. Se puede volver a la lista de Minecraft con un switch.
- Con **Mochos Tareas**, las tareas fijadas se ven justo debajo de la lista.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.31.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

### Otros addons de Mochos Esenciales

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
- **Mochos Constructor:** WorldEdit sin comandos, con vista previa de esquemas.
- **Mochos Permisos:** permisos, grupos y prefijos con chips.
