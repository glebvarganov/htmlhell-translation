---
title: "#8 анкор, используемый, как кнопка"
date: 2019-10-30
author: svsven
permalink: /{{ title | slug }}/index.html
badcode: '<a href="#" onclick="modal.open()">Login</a>'
goodcode_one: '<button type="button" onclick="modal.open()">Login</button>'
goodcode_two: '<a href="/login" onclick="modal.open()">Login</a>'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```

</div>

<div class="section" id="issues">

## Проблема и как её исправить

1. {{ snippets.ahref }}
1. {{ snippets.buttontypebutton }}
1. Браузеры и устройства, которые не поддерживают JavaScript, не смогут получить доступ к содержимому модального окна.
</div>

<div class="section">

## Хороший код

### Решение #1: Используйте тег button
```html
{{ goodcode_one | pretty }}
```

Поскольку единственная цель этого элемента - инициировать действие на той же странице; Тег `<button> </button>` является семантически правильным элементом для использования.

### Решение #2: Добавьте валидное значение атрибуту href для формы авторизации
```html
{{ goodcode_two | pretty }}
```
Другое решение: добавить значение атрибута `href`, ведущего на аналогичное действие, которое вызывает модальное окно.
Это обеспечит резервный вариант для пользователей, чьи устройства не поддерживают JavaScript. Это пример прогрессивного улучшения.

</div>