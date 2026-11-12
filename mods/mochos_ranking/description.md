**Mochos Ranking** es un addon de [Mochos Esenciales](https://mochos.xyz) para que todos vean quién manda en tu servidor. Añade la pestaña **Ranking** al inventario y dos bloques para el mundo: un **tablón** con la clasificación y un **podio** con los tres primeros de pie, con su skin, su nombre y su valor.

### La pestaña Ranking

- **Estadísticas por categoría**, con buscador.
- **El ranking** de la estadística elegida, con la cara de cada jugador y su skin, también si está desconectado.
- **Tu puesto**, aunque no estés arriba.
- **Los ganadores del periodo anterior** en los rankings semanales y mensuales.

Cuentan **todos los jugadores** que han entrado alguna vez, también los desconectados: sus estadísticas se leen de su archivo.

### Qué se puede rankear

- **Mundo:** criaturas y jugadores eliminados, muertes, distancia (total, a pie y en élitros), tiempo jugado, bloques minados y colocados, objetos fabricados, peces, animales criados, tratos con aldeanos, daño causado, saltos, encantamientos, asaltos ganados y logros.
- **Cualquier otra estadística del juego**, escribiéndola: `mined:diamond_ore`, `killed:zombie`, `custom:sleep_in_bed`…
- **Economía:** dinero (banco y efectivo), ventas, compras y objetos vendidos, en la tienda de Mochos Esenciales y en los comerciantes de **Mochos NPCs**.
- **Trabajos:** con **Mochos Trabajos**, experiencia y nivel en cada trabajo (top mineros, leñadores…) y en todos.
- **Misiones:** con **Mochos Misiones**, misiones completadas y capítulos terminados.

Trabajos y Misiones solo aparecen si esos addons están instalados; no hacen falta.

### Total, semana o mes

Cada ranking puede ser de **siempre**, de **la semana** o **del mes**. Las semanas y los meses empiezan solos a las 00:00 (el admin elige el día en que empieza la semana) y **los ganadores del anterior se guardan**.

### Tablón y podio en el mundo

En creativo, en **Bloques funcionales**, están el **Tablón de ranking** y el **Podio de ranking**:

- **Tablón:** la clasificación de una estadística en el mundo, con su periodo.
- **Podio:** los tres primeros **de pie sobre escalones de oro, hierro y cobre** con su skin (también las de Mochos Apariencia), su nombre y su valor, y al lado un tablón con los puestos 4 a 13.
- **Editor:** un admin en creativo que haga clic derecho en cualquier parte de lo que dibujan elige estadística, periodo, título, tamaño, posición, escalones, tema, borde y color.
- Los demás jugadores, con clic derecho, abren la pestaña en ese ranking.

### Para el administrador

En **Administración → Ranking**:

- **Exclusiones:** por defecto se deja fuera a los operadores y a quien juega en creativo o espectador; además puedes dejar fuera a cualquier jugador desde la pestaña.
- **Estadísticas visibles** en la pestaña de los jugadores.
- **Cada cuánto se actualiza**, el **día en que empieza la semana** y los **jugadores en la lista**.
- **Empezar ya** una nueva semana y un nuevo mes.

Los ajustes se guardan, cargan y comparten como JSON desde **Administración → Configuraciones** de Mochos Esenciales.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.18.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Opcionales: **Mochos Trabajos 0.4.0** y **Mochos Misiones 0.2.0** o posteriores.

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
- **Mochos Mapa Web:** el mapa del servidor en el navegador.
- **Mochos Carteles:** carteles con texto, imágenes y modelos en el mundo.
