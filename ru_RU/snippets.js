module.exports = {
    sr_only: "Unfortunately, there’s no native way of hiding content only visually.<br>The `.sr-only` class makes sure that content is visually hidden but still accessible to screen reader users.",
    native_semantics: "Do not change native semantics, unless you really have to.",
    a_click: "A click event on an `a` triggers on click and if the user presses the <kbd>Enter</kbd> key.",
    button_click: "A click event on a `button` triggers on click and if the user presses the <kbd>Enter</kbd> or <kbd>Space</kbd> key.",
    button_click_ru: "Событие клика на элементе `button` происходит при клике на него, а так же при нажатии пользователем кнопки <kbd>Enter</kbd> или <kbd>Space</kbd>.",
    div_click: "A click event on a `div` triggers only on click.",
    div_click_ru: "Событие клика по `div` срабатывает только в момент клика.",
    div_tabindex: "You don’t need the `tabindex` attribute if you use a `button`. HTML buttons are focusable by default.",
    div_tabindex_ru: "Вам не нужен атрибут `tabindex`, если вы используйте кпноку. HTML кнопки учавствуют в последовательной навигации по умолчанию.",
    div_button: "Setting button semantics explicitly using the `role` attribute isn’t necessary, there’s an element for that (`button`).",
    div_button_ru: "Явная установка семантического предназначение блока через атрибут `role` не обязательна, для этого существует элемент (`button`)",
    div_semantics: "The `<div>` element is an element of last resort, for when no other element is suitable. Use of the `<div>` element instead of more appropriate elements leads to poor accessibility.",
    div_focus: "A `div` isn’t keyboard focusable.",
    span_click: "A click event on a `span` triggers only on click.",
    use_button: "If you need a button, use the `<button>` element.",
    buttontypebutton: 'The purpose of the element in this example is to trigger an action on the same page with JavaScript. The `button` element with the type button is more suitable because it has no default behaviour and it’s designed to trigger actions on user input.',
    negative_tabindex: "A negative `tabindex` value means that the element is not accessible via keyboard, but it could be focused with Javascript",
    skip_headings: "Heading levels shouldn’t be skipped. Screen reader users rely on a sound document outline and hierarchy. It helps with navigation and understanding how the page is structured.",
    dom_size: "Try to avoid excessive <abbr title='Document Object Model'>DOM</abbr> sizes. Too many <abbr title='Document Object Model'>DOM</abbr> nodes and nested <abbr title='Document Object Model'>DOM</abbr> elements may harm your page performance.",
    dom_tree: "A large <abbr title='Document Object Model'>DOM</abbr> tree results in a large accessibility tree, which may have a bad impact on the performance of assistive technology.",
    aplaceholder: "If the `<a>` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed.",
    aplaceholder_click: "If you’re adding a click event to a placeholder link, you probably don’t want to use a placeholder link, but an actual link with an `href` attribute or a `<button>`, depending on what's happening on click.",
    aplaceholder_focus: "Placeholder links aren't focusable.",
    ahref: 'If the `a` element has an `href` attribute, it represents a link to another resource like a page or a <abbr title="Portable Document Format">PDF</abbr> document.',
    fa_icons: '[Font Awesome advises to hide icons semantically](https://fontawesome.com/v4.7.0/accessibility/) by settings `aria-hidden="true"` on the `<i>` element.',
    fa_times: "Font Awesome adds Unicode content via the `::before` pseudo element. Assistive technology may announce the Unicode equivalent, which in this specific example would be “times” since [fa-times is not a cross but a multiplication sign](https://fontawesome.com/icons/times). (Please note: Talkback and VoiceOver didn’t announce anything in this example.)",
    i_elem: 'The `i` element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text.<sup><a href="#resources"><span class="u-hidden">Footnote</span>2</a></sup> If you just want italic text, use `font-style: italic;` in CSS.',
    linkvsbutton: "If you’re not sure when to use `<a>` or `<button>`, watch [The Links vs. Buttons Showdown](https://www.youtube.com/watch?v=8XjwDq9zG4I) by [Marcy Sutton](https://twitter.com/marcysutton).",
    csscontent: "Screen readers may announce CSS generated content.",
    noalt: "There’s no text alternative for the image. Screen readers may announce the filename instead.",
    timessign: "✕ doesn’t represent *close* or *crossed out*, it’s the multiplication sign, like in 2 ✕ (times) 2. Don’t use it for close buttons.",
    svg: "The SVG has no text alternative. Read [Creating Accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/) by [Carie Fisher](https://cariefisher.com/) to learn how to make SVGs accessible."
}