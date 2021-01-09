---
title: "#1 кнопка, замаскированная под ссылку"
date: 2019-10-17T01:00:00
permalink: /{{ title | slug }}/index.html
layout: layouts/entry.njk
author: mmatuzo
badcode: '<button role="link" title="Name of website" tabindex="0">
<img alt="Name of website" src="logo.jpg" title="Name of website">
</button>'
goodcode: '<a href="https://"><img alt="Name of website" src="logo.jpg"></a>'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```
</div>

<div class="section" id="issues">

## Проблема и как её исправить

1. Неправильное использование элемента кнопки. Существует HTML-элемент (`<a>`) для определение ссылки в документе. {{ snippets.native_semantics }}
1. На страницы можно ссылаться без JavaScript.
1. Артибут `title` лишний.
1. Атрибут `tabindex` лишний. Кнопка не нуждается в атрибуте `tabindex`, она учавствует в последовательной навигации по умолчанию.
</div>

<div class="section">

## Хороший код

```html
{{ goodcode | pretty }}
```
</div>