**Mochos Trabajos** es un addon de [Mochos Esenciales](https://mochos.xyz) con el clásico sistema de trabajos de los servidores, pero con una interfaz de verdad: una pestaña **Trabajos** donde ves cuánto ganas, qué te paga cada cosa, tus misiones y tu progreso.

Únete a un trabajo, juega como siempre y cobra en **Ceitiles** directo a tu banco mientras subes de nivel.

### Trabajos

Minero, Leñador, Agricultor, Cazador, Pescador, Constructor, Herrero y Encantador vienen listos para usar; Explorador (paga por cada chunk nuevo que pisas, más en biomas raros) viene desactivado. El administrador puede activarlos, cambiarlos o crear los suyos.

### La pestaña Trabajos

- **Resumen:** nivel, XP, lo ganado hoy frente al límite diario, bonus de nivel y multiplicadores activos.
- **Qué paga:** cuánto te da cada acción a tu nivel, con tus ventajas y el evento activo.
- **Misiones diarias** con recompensas extra que van a tu banco (cuentan aunque hayas llegado al límite diario). Sigue hasta 5 en pantalla con su progreso en tiempo real.
- **Ventajas por nivel:** prisa minera, más pago, más experiencia, botín doble…
- **Ranking** de jugadores e **historial** de los últimos 14 días con gráfico.
- Ganancias junto a la mira mientras trabajas y sonido al subir de nivel (se pueden cambiar en Configuración).

### Juego limpio

No se paga por romper bloques colocados por jugadores, por criaturas de generadores o huevos, ni en creativo. Repetir lo mismo en el mismo chunk paga cada vez menos. Hay un número máximo de trabajos y una espera para cambiar.

### Para el administrador

- **Administración → Trabajos:** editor de cada trabajo (nombre, icono, color, acciones con su XP y pago, misiones y ventajas).
- **Eventos** de pago o XP x2 para todos durante un tiempo; al empezar y terminar se avisa a todos.
- Los trabajos se guardan en `config/mochos_trabajos/jobs.json` (también se pueden editar a mano y recargar), y se guardan, cargan y comparten como JSON desde **Administración → Configuraciones** de Mochos Esenciales.
- Con **Mochos Misiones**, las misiones pueden pedir nivel en un trabajo y dar XP de trabajo.
- Con **Mochos Ranking**, rankings de cada trabajo («Top mineros», «Top leñadores»…).
- Comandos: `/trabajos` (o `/jobs`) `unirse` · `dejar`, y para admins `admin xp|nivel|unir|misiones|dia|evento|recargar`.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.14.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

### Otros addons de Mochos Esenciales

- **Mochos Tablist:** diseña la lista de jugadores del servidor.
- **Mochos Acciones Rápidas:** rueda de acciones con una tecla.
- **Mochos Apariencia:** sube tus skins SD y HD y elige la que llevas.
- **Mochos Tareas:** listas de tareas para tus grupos de amigos.
- **Mochos Tiempo:** límite de tiempo de juego por día.
- **Mochos Anuncios:** tablón de anuncios de los jugadores.
- **Mochos Misiones:** una campaña de misiones hasta el Dragón del End.
- **Mochos Recursos:** paquetes de recursos del servidor desde el juego.
- **Mochos Forja:** editor de items para administradores.
- **Mochos NPCs:** comerciantes, banqueros y editor de entidades.
- **Mochos Ranking:** rankings de jugadores, con tablones y podios en el mundo.
