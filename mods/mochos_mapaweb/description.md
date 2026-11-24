**Mochos Mapa Web** es un addon de [Mochos Esenciales](https://mochos.xyz) que pone tu mundo entero en el navegador, dibujado en ángulo como el mapa de Diorama, con texturas reales, sol y sombras. El servidor publica el mapa en `http://<tu-servidor>:8123/` y cualquiera lo abre con un enlace: los jugadores no instalan nada.

### Qué se ve

- **Estilo Diorama** (o desde arriba): texturas de los bloques, sol, sombras y relieve. Los bloques de mods usan las texturas de sus jars. Lo que se construye aparece sin esperar al autoguardado. El agua, la hierba y las hojas mezclan su color entre biomas, sin cuadros. Las zonas sin explorar se cubren de nubes, con el tono de cada dimensión, y el Nether se ve bajo su techo de bedrock.
- **Jugadores con su skin**: la subida con Mochos Apariencia, la skin de Mochos (la de Mochos Cédula), la de su cuenta o la skin por defecto. Solo salen quienes **comparten su posición en el mapa** (cada jugador lo elige en Configuración); los espectadores nunca.
- **Waypoints públicos** del mapa de Mochos Esenciales, los de la dimensión que se ve, con buscador y clic para ir. Los waypoints de grupos nunca se publican.
- Al **cambiar de dimensión**, si en la vista no hay nada explorado, el mapa se mueve solo al terreno descubierto más cercano.
- **Terrenos** con su nombre y dueño (nunca miembros ni permisos).
- **Niebla de guerra:** los terrenos cuyo dueño la activa en Mochos Esenciales se ven tapados por nubes oscuras, con unos chunks de margen. El servidor nunca envía lo que hay debajo, ni a los jugadores que están dentro.
- **Chat global** (opcional, solo lectura) con entradas y salidas, y **lista de conectados**. Si el servidor usa el texto enriquecido de Mochos Esenciales, el chat, los terrenos y los waypoints salen limpios, sin etiquetas.

La página tiene el aspecto de Mochos Esenciales, con una fuente normal para leer bien, y cada visitante elige qué capas ver. Añadir `?panel=players`, `waypoints`, `chat`, `layers` o `none` al enlace abre ese panel (o ninguno).

### Para el administrador

Todo se configura en **Administración → Mapa web**, sin tocar archivos:

- La **dirección** del mapa, con botones para abrirla y copiarla.
- **Servidor web**: encendido, puerto y dirección en la que escucha (se reinicia solo al cambiarlos).
- **Página**: título (por defecto el MOTD), icono e idioma.
- **Capas**: jugadores, lista de conectados, waypoints públicos, terrenos y chat.
- **Dibujado**: estilo, descarga de texturas de Mojang, velocidad, niveles de alejamiento, terreno sin guardar, estado de la cola y «Volver a dibujar todo».

| Comando (admins) | Qué hace |
|---|---|
| `/mapaweb` | Estado del servidor web, del dibujado y de las capas |
| `/mapaweb render [dimensión]` | Volver a dibujar todo |
| `/mapaweb clearcache` | Vaciar la caché de tiles |
| `/mapaweb restart` · `/mapaweb reload` | Reiniciar el servidor web · releer la configuración |

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | Opcional: solo los admins, para la sección de Administración. Los jugadores no lo necesitan. |

Requiere **Mochos Esenciales 0.31.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

Sustituye a **Diorama Addons: Web Map**: si están los dos instalados, Mochos Mapa Web avisa y no arranca su servidor web. La primera vez descarga de Mojang el jar del cliente de Minecraft (unos 27 MB) para leer las texturas. Abre el puerto del mapa (por defecto **8123**) en el firewall o en el panel de tu hosting.

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
- **Mochos Carteles:** carteles con texto, imágenes y modelos en el mundo.
- **Mochos Scripts:** scripts en español para comandos, eventos y menús, con editor de bloques.
- **Mochos Constructor:** WorldEdit sin comandos, con vista previa de esquemas.
- **Mochos Permisos:** permisos, grupos y prefijos con chips.
