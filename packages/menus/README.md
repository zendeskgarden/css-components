# Menu Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-menus.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-menus)

The `garden-css-menus` package is intended to provide consistent menu
styling for use across Zendesk products. See
[react-components](http://garden.zendesk.com/react-components/#menu)
for show/hide behavior, positioning, and keyboard accessibility. Menus
can be used along with
[garden-css-arrows](http://garden.zendesk.com/css-arrows/) to apply an
arrow indicator along the menu's border.

## Installation

    npm install --save-dev @zendesk/garden-css-menus

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Menu CSS provides styling for the following basic structure ([W3
example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-2/menubar-2.html)).

```html
<ul aria-hidden="true"
    class="c-menu"
    role="menu">
  <li class="c-menu__item"
      role="menuitem">Item</li>
  <li aria-disabled="true"
      class="c-menu__item is-disabled"
      role="menuitem">Disabled Item</li>
  <li class="c-menu__separator"
      role="separator"></li>
  <li class="c-menu__item"
      role="menuitem">Another Item</li>
</ul>
```

The former usage pattern is common when a menu is offering a list of
options (i.e. a `<select>` dropdown). The component CSS also supports
a menu that presents a list of navigation actions ([W3
example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html)).


```html
<nav aria-hidden="true"
     class="c-menu"
     role="menu">
  <a class="c-menu__item"
     href="/one">Link One</a>
  <a class="c-menu__item"
     href="/two">Link Two</a>
  <span class="c-menu__separator"></span>
  <a class="c-menu__item"
     href="/three">Link Three</a>
</nav>
```

The `aria-hidden` property above is intended to be flipped using
JavaScript when the menu is hidden or shown.

## Modifications

See http://zendeskgarden.github.io/css-menus/ for a variety of menu item
classes, including modifications for: headers, add/next/previous,
metadata, RTL, etc.

Use `.is-open` to apply easing animations to the menu (and
it's arrow, if included) when a menu is shown.

```
<ul aria-hidden="false"
    class="c-arrow c-arrow--t c-menu c-menu--down is-open"
    role="menu">
  ...
</ul>
```

The modifier determines the movement (up, down, right, left) of the menu
animation. Remove `.is-open` to ease hiding the menu.

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
