# Poring Clicker en español

[English](README.md)

Userscript que traduce al español de España la interfaz del [Poring Clicker de SpringRO](https://springro.com/clicker) sobre la marcha.

## Instalación

1. Instala [Tampermonkey](https://www.tampermonkey.net/) en tu navegador.
2. Abre el panel de Tampermonkey y crea un script nuevo.
3. Sustituye su contenido por [`poring-clicker-es.user.js`](poring-clicker-es.user.js) y guarda (Ctrl+S).
4. Recarga `https://springro.com/clicker`.

Para actualizar, pega la versión nueva encima de la anterior y recarga la página.

## Qué se traduce

- Menús, pestañas, botones, logros, cartas, mascotas, equipo y avisos del juego.
- Objetos, cartas y habilidades, salvo los nombres que la comunidad ya conoce (Poring, Jellopy, Prontera…).
- Los nombres de jugadores y clanes y los mensajes del chat no se traducen nunca.

## Buscar textos sin traducir

El script apunta todos los textos en inglés que no ha sabido traducir.

1. Juega un rato y pasa por todas las pestañas.
2. Abre la consola de DevTools (F12) y ejecuta:

   ```js
   copy(untranslated().join('\n'))
   ```

3. La lista queda copiada en el portapapeles, lista para añadirla al diccionario.

## Cómo funciona

- **`DICTIONARY`**: texto exacto → traducción.
- **`RULES`**: expresiones regulares para textos con números o nombres (`Kill 10 Poring` → `Elimina a 10 Poring`).
- **Textos partidos**: el juego suele partir una frase en varios nodos (`Sell: `, `2`, `z each`). El script los junta, traduce la frase entera y la vuelve a repartir sin tocar los números, así que los contadores siguen funcionando.
- Un `MutationObserver` traduce el contenido nuevo una vez por fotograma.

## Versiones

La versión está en la cabecera `@version` y cada versión publicada lleva su etiqueta (`1.9.0`, …).
