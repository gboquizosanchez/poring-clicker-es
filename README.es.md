<div align="center">

<img src="icon.svg" width="100" alt="Poring">

# `gboquizosanchez/poring-clicker-es`

**Userscript de traducción al español del Poring Clicker de SpringRO**

[![Userscript](https://img.shields.io/badge/Userscript-Tampermonkey-00485B?logo=tampermonkey&logoColor=white)](https://www.tampermonkey.net/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](poring-clicker-es.user.js)
[![Idioma](https://img.shields.io/badge/Idioma-es--ES-C60B1E)](README.es.md)
[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-22C55E.svg)](LICENSE.md)

---

*Juega al [Poring Clicker de SpringRO](https://springro.com/clicker) en español de España, traducido sobre la marcha en tu navegador.*

*Read in English: [README.md](README.md)*

</div>

---

## Descripción

Userscript de [Tampermonkey](https://www.tampermonkey.net/) que traduce al español la interfaz del Poring Clicker a medida que el juego la dibuja: menús, pestañas, logros, cartas, mascotas, equipo y avisos de la partida. No cambia nada del funcionamiento del juego, solo el texto que ves.

> [!NOTE]
> Los nombres que la comunidad de Ragnarok Online ya conoce (Poring, Jellopy, Prontera…) se mantienen. Los nombres de jugadores y clanes y los mensajes del chat no se traducen nunca.

---

## 📦 Instalación

1. Instala un gestor de userscripts: [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/) u OrangeMonkey.
2. Abre **[poring-clicker-es.user.js](https://raw.githubusercontent.com/gboquizosanchez/poring-clicker-es/main/poring-clicker-es.user.js)** y confirma la instalación.
3. Recarga `https://springro.com/clicker`.

> [!TIP]
> El script se actualiza solo: tu gestor comprueba en este repositorio si hay un `@version` más nuevo (o usa su opción **Check for updates**).

> [!IMPORTANT]
> Si instalaste una versión anterior pegándola a mano, bórrala primero: un script pegado no tiene dirección de actualización y acabarías con dos copias.

---

## 🔍 Buscar textos sin traducir

El script apunta todos los textos en inglés que no ha sabido traducir.

1. Juega un rato y pasa por todas las pestañas.
2. Pulsa <kbd>Alt</kbd>+<kbd>Mayús</kbd>+<kbd>U</kbd>: la lista se copia al portapapeles y un aviso te dice cuántos textos tiene.

Tu nick o cualquier otro nombre que aparezca en la lista se puede excluir con <kbd>Alt</kbd>+<kbd>Mayús</kbd>+<kbd>N</kbd> (separados por comas). Los nombres se guardan en tu navegador, así que las actualizaciones del script los conservan.

También puedes ejecutar en la consola de DevTools (<kbd>F12</kbd>):

```js
copy(untranslated().join('\n'))
```

---

## 🔧 Cómo funciona

| Pieza | Qué hace |
|-------|----------|
| `DICTIONARY` | Texto exacto → traducción (`Kills` → `Bajas`). |
| `RULES` | Expresiones regulares para textos con números o nombres (`Kill 10 Poring` → `Elimina a 10 Poring`). |
| Textos partidos | El juego suele partir una frase en varios nodos (`Sell: `, `2`, `z each`). El script los junta, traduce la frase entera y la vuelve a repartir sin tocar los números, así que los contadores siguen funcionando. |
| `MutationObserver` | Traduce el contenido nuevo una vez por fotograma, para no ralentizar el juego. |

---

## 🏷️ Versiones

La versión está en la cabecera `@version` del script, y cada versión publicada lleva su etiqueta en el repositorio (`1.9.0`, …).

---

## Créditos

- **Autor**: [Germán Boquizo Sánchez](mailto:germanboquizosanchez@gmail.com)
- **Juego**: [SpringRO](https://springro.com/)

---

## 📄 Licencia

Este proyecto es software libre con [licencia MIT](LICENSE.md).

Proyecto no oficial de un aficionado, sin relación con SpringRO ni respaldado por este. Ragnarok Online es una marca de Gravity Co., Ltd.
