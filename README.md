# Poring Clicker en español

[Español](README.es.md)

Userscript that translates the [SpringRO Poring Clicker](https://springro.com/clicker) interface into Spanish (Spain) on the fly.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Open the Tampermonkey dashboard and create a new script.
3. Replace its content with [`poring-clicker-es.user.js`](poring-clicker-es.user.js) and save (Ctrl+S).
4. Reload `https://springro.com/clicker`.

To update, paste the new version over the old one and reload the page.

## What gets translated

- Menus, tabs, buttons, achievements, cards, pets, equipment and game notices.
- Items, cards and skills, except names the community already knows (Poring, Jellopy, Prontera…).
- Player names, guild names and chat messages are never translated.

## Finding untranslated text

The script keeps track of every English text it could not translate.

1. Play for a while and visit every tab.
2. Open the DevTools console (F12) and run:

   ```js
   copy(untranslated().join('\n'))
   ```

3. The list is now in the clipboard, ready to be added to the dictionary.

## How it works

- **`DICTIONARY`**: exact text → translation.
- **`RULES`**: regular expressions for text with numbers or names (`Kill 10 Poring` → `Elimina a 10 Poring`).
- **Split text**: the game often splits a sentence into several nodes (`Sell: `, `2`, `z each`). The script joins them, translates the whole sentence and puts it back without touching the numbers, so live counters keep working.
- A `MutationObserver` translates new content once per animation frame.

## Versioning

The version lives in the `@version` header and every release is tagged (`1.9.0`, …).
