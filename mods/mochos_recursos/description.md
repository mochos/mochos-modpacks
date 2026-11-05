**Mochos Recursos** es un addon de [Mochos Esenciales](https://mochos.xyz) para gestionar los paquetes de recursos de tu servidor desde el juego. Añade **Administración → Paquetes de recursos**: sube tus paquetes o enlázalos, elige su orden y cuáles son obligatorios, y recárgalos a todos sin reiniciar el servidor.

### Características

- **Sube .zip:** eliges el archivo en tu equipo y el propio servidor lo sirve con un pequeño servidor web incluido (en el puerto que elijas). Sin hosting externo.
- **O añade enlaces:** GitHub, tu web, Dropbox, MCPacks… Los enlaces de Dropbox y GitHub se convierten solos en descarga directa. Antes del primer enlace, un aviso explica dónde guardarlo de forma segura (se puede omitir).
- **Varios paquetes y su orden:** con flechas, el de arriba gana cuando dos cambian lo mismo, como en la lista de paquetes del juego. Enciende y apaga cada uno, renómbralo o sube una versión nueva conservando su sitio.
- **Recarga en vivo:** «Aplicar a todos ahora» envía la lista actual a todos los conectados (comprobando antes los enlaces); «Probar solo en mí» te la envía solo a ti. Si solo guardas, los jugadores la reciben la próxima vez que entren.
- **Siempre la última versión:** cada versión de un paquete tiene su propia identidad (por su contenido), así que el juego carga los cambios aunque el paquete se llame igual. Un .zip con el paquete dentro de una carpeta se corrige solo.
- **Obligatorio u opcional:** cada paquete. Quien rechaza uno obligatorio es desconectado con **tu mensaje** (con colores y formato); hay uno por defecto que explica cómo reactivar los paquetes del servidor. También puedes cambiar el texto de la pregunta.
- **Estado:** cuántos jugadores cargaron, rechazaron o no pudieron cargar cada paquete, y un aviso a los admins cuando alguien falla.

### Para el administrador

- **Dirección automática:** cada jugador descarga desde la misma dirección con la que entró. Si usas un proxy o un dominio distinto, escribe la dirección pública. El panel avisa cuando la dirección solo sirve en la red local.
- **Puerto del servidor web** y **tamaño máximo por subida** (hasta 250 MB, el límite del juego).
- La lista y sus mensajes se guardan, cargan y comparten como JSON desde **Administración → Configuraciones** de Mochos Esenciales.
- Otros addons pueden publicar sus propios paquetes: **Mochos Forja** entrega por aquí sus modelos.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | Solo el del admin (para el panel). Los jugadores no lo necesitan. |

Requiere **Mochos Esenciales 0.10.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

Para los archivos subidos, abre el puerto del servidor web (por defecto **25580**) en el firewall o en el panel de tu hosting.

### Otros addons de Mochos Esenciales

- **Mochos Tablist:** diseña la lista de jugadores del servidor.
- **Mochos Acciones Rápidas:** rueda de acciones con una tecla.
- **Mochos Trabajos:** trabajos con niveles, pago en Ceitiles y misiones diarias.
- **Mochos Apariencia:** sube tus skins SD y HD y elige la que llevas.
- **Mochos Tareas:** listas de tareas para tus grupos de amigos.
- **Mochos Tiempo:** límite de tiempo de juego por día.
- **Mochos Anuncios:** tablón de anuncios de los jugadores.
- **Mochos Misiones:** una campaña de misiones hasta el Dragón del End.
- **Mochos Forja:** editor de items para administradores.
