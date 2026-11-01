**Diorama Addons: Client Map** convierte el mapa de [Diorama](https://modrinth.com/mod/diorama-map) en un mapa multijugador: ve los claims, comparte lo que exploraste, comparte waypoints y ve a tus amigos, todo dentro de Diorama.

Conecta tu servidor NeoForge 1.21.1 con el mapa de Diorama en el cliente de cada jugador. El servidor guarda los datos compartidos y los envía en segundo plano; Diorama los muestra. **Al instalarlo desde el launcher también se instala Diorama 0.6.0.**

### Características

- **Claims en el mapa:** los claims de Diorama Addons: Claims aparecen en el mapa y el minimapa de Diorama, con color por propietario y "claim · dueño" al pasar el ratón.
- **Reclamar desde el mapa:** con Claims también en el cliente, haz clic derecho en cualquier chunk del mapa para **reclamarlo o liberarlo**. El servidor valida cada acción.
- **Mapa explorado compartido:** los lugares que exploraron otros jugadores aparecen en tu mapa, enviados en segundo plano en lotes pequeños.
- **Waypoints compartidos:** clic derecho → *Add shared waypoint here*. Todo tu grupo lo ve; solo su dueño, el dueño del grupo o un operador pueden renombrarlo o borrarlo.
- **Posiciones con privacidad:** ve a tu grupo en el mapa y el radar. Ocúltate cuando quieras con `/maplocation hide`.
- **Grupos de amigos:** el servidor elige, por separado para la exploración y para las ubicaciones: **desactivado**, **compartido con todos** o **por grupos** (`/mapgroup`).
- **Seguro de instalar:** los jugadores sin el mod (o sin Diorama) pueden entrar igual; sin Diorama el mod simplemente no hace nada.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio**: guarda y comparte los datos |
| Cliente | Opcional: instálalo junto con **Diorama 0.6.0** para verlo todo en el mapa |

Requiere **Minecraft 1.21.1**, **NeoForge 21.1.265 o superior** y, en el cliente, **Diorama `0.6.0+neoforge-1.21.1`**. Otras versiones de Diorama se detectan y se dejan tal cual.

Opcional: Diorama Addons: Claims en el servidor para los claims, y en el cliente para reclamar desde el mapa.

### Comandos

| Comando | Qué hace |
|---|---|
| `/mapgroup create <nombre>` · `invite <jugador>` · `join <nombre>` · `leave` · `kick <jugador>` · `info` | Grupos de amigos |
| `/sharedwaypoint add <nombre>` · `list` · `rename <viejo> <nuevo>` · `remove <nombre>` | Waypoints compartidos |
| `/maplocation show\|hide` | Comparte u oculta tu posición |
| `/clientmap status` · `/clientmap resync` (cliente) | Estado de la sincronización · reenvía el mapa explorado |

Configuración del servidor: `config/dioaddons_clientmap-common.toml`.

### Limitaciones conocidas

- Por ahora solo soporta **Diorama 0.6.0**; cada nueva versión de Diorama hay que comprobarla.
- Los waypoints compartidos aparecen en la carpeta *Waystones* de Diorama.
- Los chunks explorados compartidos muestran solo la superficie (sin cuevas).

### Combina muy bien con

- **Diorama Addons: Claims:** protección de terreno con amigos y permisos.
- **Diorama Addons: Web Map:** el mismo mundo, en el navegador.

### Acerca de

Diorama Addons es un conjunto de addons no oficial, hecho por la comunidad, para el mod de mapa [Diorama](https://modrinth.com/mod/diorama-map). No está afiliado ni respaldado por los autores de Diorama, y Diorama no está incluido en el jar. Código abierto con licencia MIT.
