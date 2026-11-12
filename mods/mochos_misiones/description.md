**Mochos Misiones** es un addon de [Mochos Esenciales](https://mochos.xyz) para que nadie se aburra: siempre hay algo que hacer. Añade la pestaña **Misiones**: una campaña que guía a los jugadores por el juego vanilla, desde el primer árbol hasta matar al **Dragón del End**, y misiones secundarias que les descubren jefes, mecánicas y lugares que quizá no conocían.

### Características

- **Capítulos y árbol:** cada capítulo muestra sus misiones como un árbol (se arrastra para moverlo). Las completadas en verde, las disponibles en azul con su progreso, las bloqueadas con candado y las que tienen recompensa por reclamar brillan en dorado. Un **buscador** en la cabecera filtra los capítulos y resalta las misiones que coinciden (sin distinguir mayúsculas ni tildes).
- **Historia y consejos:** cada misión explica qué hacer y cómo (dónde está la fortaleza, cómo encender el portal, qué llevar al End…).
- **Objetivos:** conseguir o entregar items, craftear, fundir o cocinar, comer, derrotar criaturas, picar y colocar bloques, entrar a una dimensión, visitar biomas, alejarse del punto de aparición, **encontrar una estructura**, **conocer una criatura**, estadísticas y logros vanilla, nivel de trabajo y marcar a mano. Admiten ids, tags (`#minecraft:logs`) y `*`.
- **Recompensas:** items (con encantamientos, pociones, nombres…), Ceitiles, experiencia, XP de trabajo y comandos del servidor. Se reclaman con un botón, o se dan solas si el admin quiere.
- **Avisos:** al completar una misión, al abrirse misiones nuevas y, para todos, cuando alguien completa un capítulo.
- **Seguir en pantalla:** hasta 3 misiones con sus objetivos y progreso a un lado de la pantalla, junto a las misiones diarias de Mochos Trabajos y las del cazarrecompensas de Mochos NPCs. Al mantener **Tab** pasan bajo la lista de jugadores.

### La campaña

**66 misiones en 11 capítulos**, en español:

- **Línea principal:** Primeros pasos · La edad del hierro · Diamantes · El Nether · El ojo del End · El Dragón.
- **Secundarios:** Granjas y aldeas · Encantamientos y pociones · Jefes y desafíos (guardián anciano, el Wither, el Warden, cámaras de desafío) · Explora el mundo · Oficios (con Mochos Trabajos).

### Árboles de misiones

En **Administración → Misiones** se importan capítulos completos desde un archivo, el portapapeles o plantillas, y se exporta cualquier capítulo. Al importar, el progreso de los jugadores se conserva. Vienen plantillas listas: **Explorador del mundo** (63 biomas y 34 estructuras), **Bestiario** (79 criaturas), **Jefes y desafíos**, **Gran chef**, **Coleccionista**, **Constructor** y **Desafíos extremos**.

Cada capítulo puede ser **público** (en la pestaña Misiones) u **oculto**: un capítulo oculto solo lo muestra un NPC de **Mochos NPCs** que lo tenga vinculado, en su propia ventana, y sus misiones cuentan para cada jugador desde que lo abre allí. Así un guía o un explorador puede tener sus propias misiones.

### Bloqueos de progresión (opcionales)

Las misiones pueden impedir **craftear** un item, **usar** un item, **entrar a una dimensión** o **alejarse** del punto de aparición hasta completarlas. Vienen **apagados**: la campaña trae algunos sugeridos (el Nether hasta tener armadura de hierro, el End hasta los ojos de ender) y el admin los activa con un interruptor. Los jugadores en creativo no se bloquean.

### Para el administrador

- **Editor en el juego:** el botón **Editar** de la pestaña Misiones permite crear, editar, ordenar y borrar capítulos y misiones (historia, icono, posición en el árbol, requisitos, objetivos, recompensas y bloqueos), con selectores de items, criaturas, bloques, dimensiones, biomas, estadísticas, logros y trabajos.
- **Administración → Misiones:** activar los bloqueos, dar las recompensas al completar, mostrar las secundarias, avisar de los capítulos, recargar el archivo, restablecer la campaña de fábrica y reiniciar las misiones de un jugador.
- Las misiones se guardan, cargan y comparten como JSON desde **Administración → Configuraciones** de Mochos Esenciales.
- Comandos: `/misiones completar <jugador> <misión>`, `/misiones reiniciar <jugador> [misión]` y `/misiones recargar`.

### Con Mochos Trabajos

Si **Mochos Trabajos** 0.2.0 o superior está instalado, las misiones pueden pedir nivel en un trabajo y dar XP de trabajo. Sin él, las misiones de oficios se ocultan solas. Los logros vanilla siguen como siempre.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.19.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Opcional: Mochos Trabajos 0.2.0 o posterior.

### Otros addons de Mochos Esenciales

- **Mochos Tablist:** diseña la lista de jugadores del servidor.
- **Mochos Acciones Rápidas:** rueda de acciones con una tecla.
- **Mochos Trabajos:** trabajos con niveles, pago en Ceitiles y misiones diarias.
- **Mochos Apariencia:** sube tus skins SD y HD y elige la que llevas.
- **Mochos Tareas:** listas de tareas para tus grupos de amigos.
- **Mochos Tiempo:** límite de tiempo de juego por día.
- **Mochos Anuncios:** tablón de anuncios de los jugadores.
- **Mochos Recursos:** paquetes de recursos del servidor desde el juego.
- **Mochos Forja:** editor de items para administradores.
- **Mochos NPCs:** comerciantes, banqueros y editor de entidades.
- **Mochos Ranking:** rankings de jugadores, con tablones y podios en el mundo.
- **Mochos Mapa Web:** el mapa del servidor en el navegador.
