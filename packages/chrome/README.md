# @zendeskgarden/css-chrome

This package contains a variety of classes for handling consistent
product page navigation, headers, and layout.

## Installation

```sh
npm install @zendeskgarden/css-chrome
```

## Usage

Once installed, chrome CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-chrome';
```

Component CSS provides styling for the following basic page structure
(actual HTML elements may vary).

```html
<body class="c-chrome">
  <nav class="c-chrome__nav">
    <a class="c-chrome__nav__item">...</a>
    <!-- additional nav items -->
  </nav>
  <div class="c-chrome__body">
    <header class="c-chrome__body__header">
      <button class="c-chrome__body__header__item">...</button>
      <!-- additional header items -->
    </header>
  </div>
  <div class="c-chrome__body__content">
    <main class="c-chrome__body__content__main">
  </div>
</body>
```

### Modifications

See http://zendeskgarden.github.io/css-components/chrome/ for a variety
of chrome modification classes, including dark mode, support for RTL,
standalone headers, branded nav, etc.

### Accessibility

Use the following checklist to ensure the chrome follows accessibility
best practice.

* Make sure all nav and header items are keyboard tabbable.
* Be sure to use `a` elements for navigational items and `button`
  elements for action items (i.e. menus).
* Use `aria-current` to indicate the current item in the nav.
