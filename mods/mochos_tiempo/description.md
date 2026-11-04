**Mochos Tiempo** es un addon de [Mochos Esenciales](https://mochos.xyz) que pone un **límite de tiempo de juego por día**, pensado para servidores de familia, de clase o de amigos. Cada jugador tiene unos minutos al día, ve cuánto le queda y, cuando se acaba, sale del servidor hasta la hora de recarga.

### Para los administradores

En **Administración → Tiempo de juego**:

- **Límite activo** y **tiempo por día** (120 minutos por defecto).
- **Hora y minuto de recarga** (00:00 por defecto, hora del servidor): a esa hora todos vuelven a tener su tiempo completo.
- **Pausar el conteo para todos** y **reiniciar el tiempo de todos**.
- **Los operadores no tienen límite** (activado por defecto).
- **Lista de jugadores** con lo que le queda a cada uno. Con **Editar**, por jugador: excluirlo del límite, darle un tiempo por día propio, ver y cambiar su tiempo jugado hoy o su tiempo restante, y reiniciar su tiempo de hoy.

Los tiempos se guardan en el mundo, así que se conservan aunque se reinicie el servidor.

### Para los jugadores

- **Tu tiempo restante** junto al dinero, al lado de la barra rápida, y en un panel a la derecha del inventario con una barra y la hora de recarga. En **Configuración → Tiempo de juego** eliges verlo siempre o solo en el inventario.
- En los últimos 5 minutos el tiempo se pone naranja; en el **último minuto** llega un aviso y el tiempo **parpadea en rojo**. Con el conteo en pausa se ve en gris.
- Al llegar a cero, el jugador **sale del servidor** con un mensaje que dice a qué hora podrá volver. Si intenta entrar antes, la entrada se rechaza con el mismo aviso.

### Comandos (operadores)

| Comando | Qué hace |
|---|---|
| `/tiempo pausar` · `/tiempo reanudar` | Pausar o reanudar el conteo para todos |
| `/tiempo limite <minutos>` | Cambiar el tiempo por día (0 a 1440) |
| `/tiempo reiniciar [jugador]` | Reiniciar el tiempo de hoy de todos o de un jugador |
| `/tiempo restante <jugador> <segundos>` | Fijar el tiempo que le queda hoy a un jugador |
| `/tiempo excluir <jugador> <true\|false>` | Excluir a un jugador del límite o volver a incluirlo |

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** |

Requiere **Mochos Esenciales 0.8.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**.

### Otros addons de Mochos Esenciales

- **Mochos Tablist:** diseña la lista de jugadores del servidor.
- **Mochos Acciones Rápidas:** rueda de acciones con una tecla.
- **Mochos Trabajos:** trabajos con niveles, pago en Ceitiles y misiones diarias.
- **Mochos Apariencia:** sube tus skins SD y HD y elige la que llevas.
- **Mochos Tareas:** listas de tareas para tus grupos de amigos.
