# Arrow Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-arrows.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-arrows)

The `css-arrows` package contains styling and positioning classes for `.c-arrow`.

## Installation

    $ npm install --save-dev git+ssh://git@github.com:zendeskgarden/css-arrows.git

## Usage

Arrow CSS classes are used on a parent element (typically menus or tooltips) by applying the base `.c-arrow` class in addition to a positioning class.

Here's an example of arrows used in conjunction with the `.c-menu` component that would place an arrow centered at the top of the parent element using the `.c-arrow--t` positioning class.

```html
<ul class="c-menu c-arrow c-arrow--t" role="menu" aria-hidden="true">
  <li class="c-menu__item" role="menuitem" tabindex="0">Menu Item</li>
</ul>
```

## Tests

    $ npm test

## Demo

    $ npm start
