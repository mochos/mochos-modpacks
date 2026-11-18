**Mochos Permisos** es un addon de [Mochos Esenciales](https://mochos.xyz) con **permisos y grupos para tu servidor NeoForge, sin archivos ni comandos largos**. Inspirado en LuckPerms, con un editor en **Administración → Permisos** (o `/permisos`): grupos con herencia, permisos de cualquier mod, comandos por grupo y prefijos y sufijos con **chips** diseñados que se ven en el chat, la lista de jugadores y el nametag.

### El editor

- **Grupos:** nombre visible, peso, herencia (sin bucles) y el grupo `default` en el que están todos. Se ve lo que hereda cada grupo o jugador y de dónde.
- **Nodos de cualquier mod:** el editor lista todos los nodos registrados en NeoForge, por mod y con buscador. Cada uno se **permite**, se **deniega** o se deja **sin definir** (decide el mod, normalmente ser operador). Comodines `mod.*` y `*`.
- **Comandos por grupo:** cada comando tiene su nodo `command.<nombre>`: un grupo puede usar `/tp` sin ser operador, o no poder usar un comando que sí podría. El árbol de comandos se reenvía al momento.
- **Jugadores:** sus grupos, sus permisos propios y su prefijo y sufijo propios.
- **Chips:** diseñador de etiquetas tipo rango: texto, colores con degradado, borde, forma redondeada, cuadrada, píldora o sin borde, contorno de las letras, negrita e icono, con vista previa grande y en el chat. Se usan en prefijos y sufijos con `{chip:id}`.
- **Iconos propios:** imágenes subidas desde el PC o una URL (recomendado 16×16 píxeles; máximo 64×64 y 16 KB, hasta 64 iconos) para prefijos y sufijos (`{img:id}`) o como icono de un chip. El servidor comprueba cada imagen y solo descarga de direcciones públicas.

Un servidor nuevo empieza con un ejemplo: chips OWNER, ADMIN, MOD, HELPER, BUILDER, MVP, VIP+, VIP y USER y grupos que los usan (sin miembros).

### Prefijos y sufijos

Texto con colores `&`, chips (`{chip:admin}`), iconos de objetos (`{icono:diamond}`) e iconos propios (`{img:corona}`). Se ven en el **chat** de Mochos Esenciales, en la **lista de jugadores** y en el **nametag** de Mochos Tablist.

### El gestor de permisos de NeoForge

Mochos Permisos es el gestor de permisos de NeoForge del servidor (`mochos_permisos:handler`), sin tocar `config/neoforge-server.toml`. Así decide también el permiso `mochos_esenciales.admin`: quién administra Mochos Esenciales sin ser operador.

Con **LuckPerms** instalado se aparta: LuckPerms decide permisos y prefijos, y aquí solo se diseñan los chips (se pueden usar en LuckPerms con `{chip:id}`).

| Comando | Qué hace |
|---|---|
| `/permisos` | Abre el editor |
| `/permisos recargar` | Vuelve a leer el archivo de datos |
| `/permisos jugador <nombre> añadir\|quitar <grupo>` | Mete o saca a un jugador de un grupo |

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** (guarda los permisos y decide quién puede qué) |
| Cliente | **Obligatorio** (editor y chips) |

Requiere **Mochos Esenciales 0.28.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Combina muy bien con **Mochos Tablist**, que muestra los chips en la lista de jugadores y en el nametag.

- Datos: `config/mochos_permisos/permisos.json` en el servidor (se edita desde Administración → Permisos).

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
- **Mochos Constructor:** WorldEdit sin comandos, con vista previa de esquemas.
