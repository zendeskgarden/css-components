# Menu Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-menus.svg?token=dDt9s6smCMgz269xNbpz)](https://travis-ci.com/zendeskgarden/css-menus)

The `css-menus` package contains `.c-menu` styling.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-menus.git

## Usage

Menu CSS classes are intended to support the following component structure.

```html
<ul aria-hidden="true"
    class="c-menu"
    role="menu">
  <li class="c-menu__item"
      role="menuitem">Enabled Item</li>
  <li aria-disabled="true"
      class="c-menu__item is-disabled"
      role="menuitem">Disabled Item</li>
  <li class="c-menu__separator"
      role="separator"></li>
  <li class="c-menu__item"
      role="menuitem">Another Enabled Item</li>
</ul>
```

## Accessibility

The sample HTML incorporates `aria-*` and `role` attributes expected by
assistive technology.

## Modifications

### Large

Use the following modifier class to support wider menu layouts:

```html
<ul aria-hidden="true"
    class="c-menu c-menu--large"
    role="menu">
  ...
</ul>
```

### RTL

Use the following state class to support RTL text direction:

```html
<ul aria-hidden="true"
    class="c-menu is-rtl"
    role="menu">
  ...
</ul>
```

### Accent

See the `accent.css` source file for sample CSS needed to format menus
according to your product's accent color. This CSS is not included in
the package distribution. Upon inclusion, corresponding HTML would be:

```html
<ul aria-hidden="true"
    class="c-menu c-menu--accent"
    role="menu">
  ...
</ul>
```

## Behavior

See [js-menus](https://github.com/zendeskgarden/js-menus) for reference
JavaScript support for menus.

## Tests

    $ npm test

## Demo

    $ npm start
