---
title: "#2 div с ролью кнопки"
date: 2019-10-17T02:00:00
author: schepp
permalink: /{{ title | slug }}/index.html
badcode: '<div tabindex="-1">
  <div role="button">
    <svg width="28" height="24">
      …
    </svg>
  </div>
</div>'

goodcode: '<button>
<span class="sr-only">Send</span>
<svg width="28" height="24" aria-hidden="true">
…
</svg>
</button>'

goodcodeCSS: '.sr-only {
position: absolute;
white-space: nowrap;
width: 1px;
height: 1px;
overflow: hidden;
border: 0;
padding: 0;
clip: rect(0 0 0 0);
clip-path: inset(50%);
margin: -1px;
}'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```
</div>

<div class="section" id="issues">

## Проблема и как её исправить

1. {{ snippets.div_button }}
1. {{ snippets.div_tabindex }}
1. {{ snippets.div_click }} {{ snippets.button_click }}
1. Нет альтернативы в виде текста для иконки.
</div>

<div class="section">

## Хороший код

{{ snippets.sr_only }}

```css
{{ goodcodeCSS | prettyCSS }}
```

```html
{{ goodcode | pretty }}
```
</div>

