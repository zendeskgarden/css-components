# @zendeskgarden/css-menus

This package is intended to provide consistent menu styling for use
across Zendesk products. Menus can be used along with
[@zendeskgarden/css-arrows](http://zendeskgarden.github.io/css-arrows/)
to apply an arrow indicator along the menu's border.

## Installation

```sh
npm install --save-dev @zendesk/garden-css-menus
```

## Usage

Once installed, menu CSS can be accessed via `postcss-import`.

```css
@import '@zendesk/garden-css-menus';
```

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

## Modifications

See http://zendeskgarden.github.io/css-components/menus/ for a variety
of menu item classes, including modifications for: headers,
add/next/previous, metadata, RTL, etc.

Use `.is-open` to apply easing animations to the menu (and
it's arrow, if included) when a menu is shown.

```html
<ul aria-hidden="false"
    class="c-arrow c-arrow--t c-menu c-menu--down is-open"
    role="menu">
  ...
</ul>
```

The modifier determines the movement (up, down, right, left) of the menu
animation. Remove `.is-open` to ease hiding the menu.

### Behavior

See the
[&lt;Menu&gt;](http://zendeskgarden.github.io/react-components/#!/Menu)
component for show/hide behavior, positioning, and keyboard
accessibility.
