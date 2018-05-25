# @zendeskgarden/css-arrows [![npm version](https://img.shields.io/npm/v/@zendeskgarden/css-arrows.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/css-arrows)

This package contains styling and positioning classes for `.c-arrow`.

## Installation

```sh
npm install @zendeskgarden/css-arrows
```

## Usage

Once installed, arrow CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-arrows';
```

Arrow CSS classes are used on a parent element (typically menus or
tooltips) by applying the base `.c-arrow` class in addition to a
positioning class.

Here's an example of arrows used in conjunction with the `.c-menu`
component that would place an arrow centered at the top of the parent
element using the `.c-arrow--t` positioning class.

```html
<ul class="c-menu c-arrow c-arrow--t" role="menu" aria-hidden="true">
  <li class="c-menu__item" role="menuitem" tabindex="0">Menu Item</li>
</ul>
```

See http://zendeskgarden.github.io/css-components/arrows/ for a
comprehensive demo of the arrow component classes.
