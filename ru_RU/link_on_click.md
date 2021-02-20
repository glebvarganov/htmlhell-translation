---
title: "#6 ссылка с void операторов, вместо href"
date: 2019-10-25
author: smaerdian
permalink: /{{ title | slug }}/index.html
badcode: "<a href=\"javascript:void(1)\" onClick='window.location=\"index.html\"'>Link</a>"
goodcode: '<a href="index.html">Link</a>'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```

</div>

<div class="section" id="issues">

## Проблемы и как их исправить

1. Ссылка не будет работать, если JavaScript не выполниться или выключен.
1. Нет необходимости использовать JavaScript для перелинковки, вы можете использовать атрибут `href` для этого. Поддержка браузеров отличная (100% от всех браузеров).
1. Другое контекстное меню, вызываемое правой кнопкой мыши, "Открыть в новой вкладке/окне" недоступно.
1. <kbd>CMD</kbd> + клик для открытия ссылки не будут работать.

</div>

<div class="section">

## Хороший код

```html
{{ goodcode | pretty }}
```

</div>