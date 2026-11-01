**Diorama Addons: Claims** protege tu terreno chunk por chunk, te deja compartirlo con tus amigos y decidir exactamente qué puede hacer cada uno, desde una pantalla de verdad dentro del juego.

Los jugadores reclaman los chunks donde viven, invitan a sus amigos y configuran los permisos uno por uno o con plantillas listas. Todo funciona desde una pantalla gráfica cuando el mod está en el cliente, y con comandos cuando no, así que **los jugadores sin el mod también pueden entrar y jugar**.

### Características

- **Claims por chunk:** reclama columnas completas de 16×16. Los chunks de un mismo claim quedan unidos.
- **Pantalla con estilo de mapa:** pulsa **G** (o `/claims menu`) para ver el terreno real a tu alrededor, dibujado al estilo del mapa de Diorama, con el color y el borde de cada claim encima. Haz clic o arrastra para reclamar o liberar.
- **Amigos con sus propios permisos:** añade un amigo y elige una plantilla (*Visitante*, *Miembro*, *Confiable*), o activa cada permiso por separado.
- **Permisos públicos:** elige qué puede hacer cualquier otro jugador en tu claim.
- **Ajustes del claim:** PvP, explosiones, propagación del fuego y destrozos de mobs, por claim.
- **Límites por jugador:** máximo de chunks y de claims por jugador. Ser amigo en el claim de otro nunca cuenta para tus propios límites.
- **Protección completa:** romper y colocar bloques, puertas y redstone, contenedores (vanilla y de mods), uso de objetos, entidades, animales, pisoteo de cultivos, explosiones, fuego, fluidos y pistones que cruzan el borde, y destrozos de mobs.
- **Herramientas para operadores:** ignorar la protección y listar, editar o borrar cualquier claim.
- **Inglés y español**, traducidos en el servidor para que también los lean los jugadores sin el mod.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | Opcional: solo para la pantalla de claims. Sin él, usa los comandos. |

Requiere **Minecraft 1.21.1** y **NeoForge 21.1.265 o superior**. No necesita otros mods.

### Comandos

| Comando | Qué hace |
|---|---|
| `/claim [nombre]` · `/unclaim` | Reclama o libera el chunk donde estás |
| `/claims menu` | Abre la pantalla de claims (mod en el cliente) |
| `/claims list` · `/claims info` | Tus claims y límites · el claim donde estás |
| `/claims rename <nombre>` · `/claims delete` | Edita el claim donde estás |
| `/claims trust <jugador> [visitor\|member\|trusted]` · `/claims untrust <jugador>` | Gestiona amigos |
| `/claims permission public <permiso> <true\|false>` | Lo que puede hacer cualquiera, y ajustes del claim |
| `/claims permission member <jugador> <permiso> <true\|false>` | Un permiso de un amigo |
| `/claims permission template <jugador> <plantilla>` | Aplica una plantilla a un amigo |
| `/claims admin bypass\|list [jugador]\|delete\|unclaim` | Herramientas de operador |

Configuración del servidor: `serverconfig/dioaddons_claims-server.toml` dentro de la carpeta del mundo. Referencia completa: [permisos y comandos](https://github.com/lorspi/diorama-addons/blob/main/docs/claims-permissions.md).

### Combina muy bien con

- **Diorama Addons: Web Map:** tus claims pintados en un mapa web en vivo.
- **Diorama Addons: Client Map:** tus claims en el mapa de Diorama, y reclamar o liberar desde el mapa.

Cada mod funciona solo; juntos comparten los claims automáticamente.

### Acerca de

Diorama Addons es un conjunto de addons no oficial, hecho por la comunidad e inspirado en el mod de mapa [Diorama](https://modrinth.com/mod/diorama-map). No está afiliado ni respaldado por los autores de Diorama. Código abierto con licencia MIT.
