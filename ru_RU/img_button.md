---
title: "#3 картинки-кнопки"
date: 2019-10-22T01:00:00
author: mmatuzo
permalink: /{{ title | slug }}/index.html
badcode: '<img src="/images/edit.gif" onclick="openEditDialog(123)">
<img src="/images/delete.gif" onclick="openDeleteDialog(123)">'
goodcode1: '<button onclick="openEditDialog(123)">
<img src="/images/edit.gif" alt="Edit product XY">
</button>

<button onclick="openDeleteDialog(123)">
  <img src="/images/delete.gif" alt="Delete product XY">
</button>'

goodcode2: '<button onclick="openEditDialog(123)">
<span class="sr-only">Edit product XY</span>
<img src="/images/edit.gif" alt="">
</button>

<button onclick="openDeleteDialog(123)">
<span class="sr-only">Delete product XY</span>
  <img src="/images/delete.gif" alt="">
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

## Bad code

```html
{{ badcode | pretty }}
```
</div>

<div class="section" id="issues">

## Проблемы и как их исправить

1. Предназначение тега `img` - показывать изображения, а не выполнять JavaScript.
1. Событие 'клик' на теге `img` сработает только на клик. {{ snippets.button_click }}
1. {{ snippets.noalt }}
</div>

<div class="section">

## Хороший код

### Решение #1: Используйте кнопку и добавьте артибут `alt` к изображениям

```html
{{ goodcode1 | pretty }}
```

### Solution #2: Use buttons, add text content and hide images

{{ snippets.sr_only }}

```css
{{ goodcodeCSS | prettyCSS }}
```
Изображение с пустум атрибутом `alt` недоступно для пользователей и скрин ридеров. В нашем случае это хорошо, так как уже есть альтернативный текст.

```html
{{ goodcode2 | pretty }}
```
</div>

