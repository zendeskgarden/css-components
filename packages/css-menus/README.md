# Menu Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-menus.svg?token=dDt9s6smCMgz269xNbpz)](https://travis-ci.com/zendeskgarden/css-menus)

The `css-menus` package contains `.c-menu` styling.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-menus.git

## Usage

Menu CSS classes are intended to support the following component structure.

```html
<ul class="c-menu role="menu" aria-hidden="true">
  <li class="c-menu__item" role="menuitem" tabindex="0">Profile</li>
  <li class="c-menu__separator" role="separator"></li>
  <li class="c-menu__item c-menu__item--disabled" role="menuitem" aria-disabled="true">Settings</li>
  <li class="c-menu__separator" role="separator"></li>
  <li class="c-menu__item" role="menuitem" tabindex="0">Sign Out</li>
</ul>
```

## Tests

    $ npm test

## Demo

    $ npm start
