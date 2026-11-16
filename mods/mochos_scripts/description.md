**Mochos Scripts** es un addon de [Mochos Esenciales](https://mochos.xyz) para programar tu servidor sin escribir Java. Trae un lenguaje de scripts al estilo de Skript, **en español** (y con los alias en inglés de siempre), para crear comandos, reaccionar a lo que pasa en el mundo y montar tiendas, minijuegos o jefes. Se escribe como texto… **o con bloques**, como en MCreator.

```
al unirse:
    enviar "&a¡Hola, %jugador%!" a jugador

comando /curar [<jugador>]:
    permiso: op
    ejecutar:
        curar arg-1
        enviar "&aCurado."
```

### Qué se puede hacer

- **Eventos:** entrar y salir, chat (se puede cancelar o cambiar), romper y colocar bloques, clics en bloques, ítems y entidades, morir, recibir daño (se puede cambiar el daño), aparecer mobs, soltar y recoger ítems, comer, subir de nivel y las ventas de la tienda.
- **Comandos propios** con argumentos (texto, número, entero, jugador, mundo; opcionales), permisos, alias y espera entre usos.
- **Tareas periódicas** (`cada 10 minutos:`) y **a una hora del día** (`a las 18:00:`), y `esperar` sin congelar el servidor.
- **Variables** que se guardan con el mundo, variables locales y **listas**, **funciones** reutilizables entre scripts, condiciones con `y`, `o` y `no`, y bucles.
- **Mobs y entidades:** generar, nombrar, equipar, efectos de poción, salud, fuego, empujar, rayos y explosiones.
- **Ítems** con nombre y descripción de colores, inventarios, **sonidos** y **partículas**.
- **Menús de cofre** con botones que ejecutan código al hacer clic.
- **Cambiar ítems:** encantamientos, durabilidad y durabilidad máxima, irrompible, descripción, nbt y cualquier componente como en `/give` (`!componente` lo quita); y leerlos: durabilidad, nivel de un encantamiento, nbt y sus valores.
- **Mochos Esenciales:** pagar y cobrar con su dinero, saldo, notificaciones, banco, grupos y terrenos reclamados.
- **Mochos Forja:** dar, quitar y reconocer sus **objetos guardados** por su marca invisible (aunque se gasten, se renombren o se encanten) y poner sus **modelos** a los ítems (uno de arma o herramienta convierte el ítem en esa herramienta).

Más de 150 elementos, todos documentados con ejemplos.

### Pensado para no romperse

- El mod **revisa cada script** al cargarlo y te dice la línea y la palabra exactas de cada error, con sugerencias («¿Quisiste decir…?»).
- Un script con errores **no se carga**; si ya estaba cargado, **sigue funcionando la versión anterior**.
- Los errores al ejecutarse y lo que escribe el script quedan en su **registro**. Un bucle sin esperas se corta antes de congelar el servidor.

### Pestaña Scripts

Para los administradores: todos los scripts por **carpetas**, su estado (cargado, con errores, deshabilitado), **habilitar o deshabilitar**, **recargar uno o todos**, ver el código con las líneas con errores marcadas, editarlo, crear, renombrar, mover y enviar a la papelera. También con `/scripts` (o `/msk`): `lista`, `recargar`, `habilitar`, `deshabilitar`, `errores` y `web`.

### Editor web con bloques

`/scripts web` (o el botón del globo de la pestaña) abre un **editor en el navegador** con un enlace personal:

- **Bloques** por categorías y colores, al estilo de **MCreator**.
- **Texto** con colores, y vista **dividida** con los dos a la vez: son el mismo archivo `.msk`.
- Revisión mientras escribes **sin bloquear los bloques**: lo que falta por completar sale en gris, los errores en ámbar sobre su bloque y en rojo al pulsar **Validar** o al guardar.
- Los cambios sin guardar se marcan en la lista y junto al estado del script; problemas y registro del script, guardar y recargar.
- Los objetos guardados y los modelos de Mochos Forja y los encantamientos se **eligen de una lista** en los bloques, y las **opciones** y **variables** de un script se ven como bloques, una fila por cada una.
- Referencia de todo el lenguaje con ejemplos que se insertan con un clic, y buscador de ids del juego.

### Para empezar

Trae **once scripts de ejemplo** (deshabilitados) en `config/mochos_scripts/scripts/ejemplos`: bienvenida, comandos, eventos, variables, bucles, funciones, una tienda con menú, anuncios, un jefe zombi, objetos personalizados (con los de Mochos Forja) y el mismo lenguaje en inglés. La referencia completa está en `config/mochos_scripts/REFERENCIA.md`.

### Instalación

| Dónde | ¿Necesario? |
|---|---|
| Servidor | **Obligatorio** |
| Cliente | **Obligatorio** (para la pestaña Scripts; los jugadores sin el addon ven igual los menús y mensajes) |

Requiere **Mochos Esenciales 0.22.0 o posterior**: al instalar el addon desde el launcher también se instala, si no lo tienes. Minecraft **1.21.1** y **NeoForge 21.1.265 o superior**. Opcional: **Mochos Forja 0.4.0 o posterior** para usar sus objetos guardados y modelos.

- Scripts: `config/mochos_scripts/scripts/**/*.msk` (un `-` delante del nombre lo deshabilita).
- Editor web: puerto **8124** (`config/mochos_scripts-common.toml`); cada enlace lleva un token que caduca.
- Variables: se guardan con el mundo (`<mundo>/data/mochos_scripts_variables.dat`).

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
- **Mochos Constructor:** WorldEdit sin comandos, con vista previa de esquemas.
