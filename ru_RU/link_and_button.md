---
title: "#4 ссылка, так же являющаяся кнопкой"
date: 2019-10-22T02:00:00
author: hidde
permalink: /{{ title | slug }}/index.html
badcode: '<a href="https://example.com"><button>Example</button></a>'
goodcode: '<a href="https://example.com" class="button">Example</a>'

goodcodeCSS: '.button {
/* Используйте CSS для визуализации в виде кнопки */

}'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```
</div>

<div class="section" id="issues">

## Проблемы и как их исправить

1. Вложив кнопку внутри ссылки, вы делайте два посыла: это кнопка, но также и ссылка.
1. {{ snippets.linkvsbutton }}
</div>

<div class="section">

## Good code

```css
{{ goodcodeCSS | prettyCSS }}
```

```html
{{ goodcode | pretty }}
```
</div>

