---
title: "#7 нескольк повторяющихся идентификаторов и макет в виде таблицы"
date: 2019-10-29
author: dirty-co.de
permalink: /{{ title | slug }}/index.html

badcode: '
<table>
	<tr id="body">
		<td id="body">
			<table id="body">
				<tr id="body_row">
					<td id="body_left">…</td>
					<td id="body_middle">…</td>
					<td id="body_right">…</td>
				</tr>
			</table>
		</td>
	</tr>
</table>'

goodcode: '
<main id="body">
	<aside id="secondary_content">
	</aside>
	<article id="primary_content">
	</article>
	<aside id="tertiary_content">
	</aside>
</main>'
---

<div class="section bad">

## Плохой код

```html
{{ badcode | pretty }}
```

</div>

<div class="section" id="issues">

## Проблема и как её исправить

Атрибут `id` должен быть уникальным и не важно, на какие теги он установлен. Так же, данный код использует макет построенный на таблицах (и да, это реальный сайт, который работает, переделанный в 2016 году). Избегайте использования таблиц для разметки веб-сайта, потому что элементы таблицы имеют семантическое значение. Их использование может сделать ваш документ более запутанным для некоторых людей.

1. Замените существующую разметку используя семантические элементы HTML5. Это сократит количество тегов на странице и позволяет избежать макета, сделанного на основе таблиц.
2. Стилизуйте новые элементы при помощи [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) или [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).
3. Для `id` атрибутов используйте разные значения, которые напрямую относятся к соотвествующему элементу на странице.

</div>

<div class="section">

## Хороший код

```html
{{ goodcode | pretty }}
```

</div>