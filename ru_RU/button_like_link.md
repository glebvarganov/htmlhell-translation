---
title: "#5 ссылка в виде кнопки"
date: 2019-10-22T03:00:00
author: pepelsbey
permalink: /{{ title | slug }}/index.html

badcode: '<a href="#form" role="button" aria-haspopup="true">
&nbsp;&nbsp;Register&nbsp;&nbsp;
</a>'


goodcodeCSS: '.button {
/* use CSS to apply button-like styles to the link */

}'

goodcode: '<a class="button" href="#form">
Register
</a>'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```

</div>

<div class="section" id="issues">

## Проблемы и как их исправить

Это ссылка на форму на той же странице, которая выглядит как кнопка.

1. Добавляя атрибут `role="button"` к ссылке, вы сообщаете, что это кнопка, хотя по факту она является ссылкой. {{ snippets.native_semantics }}
2. `aria-haspopup="true"` предполагает, что есть всплывающее окно, но его не существует.
3. Отступы должны быть добавлены с помощью CSS, а не через `&nbsp;`.

</div>

<div class="section">

## Хороший код

```css
{{ goodcodeCSS | prettyCSS }}
```

```html
{{ goodcode | pretty }}
```

</div>