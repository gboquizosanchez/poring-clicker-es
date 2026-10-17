<div align="center">

<img src="icon.svg" width="100" alt="Poring">

# `gboquizosanchez/poring-clicker-es`

**Spanish translation userscript for SpringRO Poring Clicker**

[![Userscript](https://img.shields.io/badge/Userscript-Tampermonkey-00485B?logo=tampermonkey&logoColor=white)](https://www.tampermonkey.net/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](poring-clicker-es.user.js)
[![Language](https://img.shields.io/badge/Language-es--ES-C60B1E)](README.es.md)

---

*Play the [SpringRO Poring Clicker](https://springro.com/clicker) in Spanish (Spain), translated on the fly in your browser.*

*Leer en español: [README.es.md](README.es.md)*

</div>

---

## Overview

A [Tampermonkey](https://www.tampermonkey.net/) userscript that translates the Poring Clicker interface into Spanish as the game draws it: menus, tabs, achievements, cards, pets, equipment and in-game notices. It never changes how the game works, only the text you see.

> [!NOTE]
> Names the Ragnarok Online community already knows (Poring, Jellopy, Prontera…) are kept as they are. Player names, guild names and chat messages are never translated.

---

## 📦 Installation

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/), [Violentmonkey](https://violentmonkey.github.io/) or OrangeMonkey.
2. Open **[poring-clicker-es.user.js](https://raw.githubusercontent.com/gboquizosanchez/poring-clicker-es/main/poring-clicker-es.user.js)** and confirm the installation.
3. Reload `https://springro.com/clicker`.

> [!TIP]
> The script updates itself: your manager checks this repository for a newer `@version` (or use its **Check for updates** option).

> [!IMPORTANT]
> If you installed an earlier version by pasting it by hand, remove it first: a pasted script has no update address and you would end up with two copies.

---

## 🔍 Finding untranslated text

The script keeps track of every English text it could not translate.

1. Play for a while and visit every tab.
2. Open the DevTools console (<kbd>F12</kbd>) and run:

```js
copy(untranslated().join('\n'))
```

3. The list is now in the clipboard, ready to be added to the dictionary.

---

## 🔧 How it works

| Piece | What it does |
|-------|--------------|
| `DICTIONARY` | Exact text → translation (`Kills` → `Bajas`). |
| `RULES` | Regular expressions for text with numbers or names (`Kill 10 Poring` → `Elimina a 10 Poring`). |
| Split text | The game often splits one sentence into several nodes (`Sell: `, `2`, `z each`). The script joins them, translates the whole sentence and puts it back without touching the numbers, so live counters keep working. |
| `MutationObserver` | Translates new content once per animation frame, so the game does not slow down. |

---

## 🏷️ Versioning

The version lives in the script's `@version` header, and every release is tagged in the repository (`1.9.0`, …).

---

## Credits

- **Author**: [Germán Boquizo Sánchez](mailto:germanboquizosanchez@gmail.com)
- **Game**: [SpringRO](https://springro.com/)

---

## 📄 Disclaimer

Unofficial fan project, not affiliated with or endorsed by SpringRO. Ragnarok Online is a trademark of Gravity Co., Ltd.
