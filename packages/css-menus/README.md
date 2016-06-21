# Menu Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-menus.svg?token=dDt9s6smCMgz269xNbpz)](https://travis-ci.com/zendeskgarden/css-menus)

The `css-menus` package is intended to provide consistent menu styling for use across Zendesk products.

You are expected to use [css-arrows][] in addition to this package (for the triangle typically found at the top of each top-level menu).

Applying `.c-menu` and `.c-menu__item` (and optionally some additional classes) is all that is needed to use this package, especially when your menus are essentially lists of links. That, and some JavaScript to show and hide the menu itself.

That said, this package is designed to work with [js-menus][] or a similar implementation of menu behavior to further support keyboard navigation and accessibility.



## Installation

    $ npm install --save-dev git+ssh://git@github.com:zendeskgarden/css-menus.git


## Usage

The CSS in this package is purely class-based and doesn't really care which elements you use.

That said, the following markup patterns are anticipated and fully supported.

(If you are using other markup and the CSS in this package doesn't seem to work for you, please file an issue so we can discuss it and make changes if needed.)


### Using `<ul>`, `<li>`, and `<a href>`

This is a common pattern. Thanks to its simple and semantic markup, no extra ARIA or role attributes are needed. (This depends on your use case and desired outcome, of course.)

The pattern is valid even if the links are enhanced with JavaScript (e.g. preventing navigation and instead showing a modal dialog).

```html
<ul class="c-menu">
  <li>
    <a class="c-menu__item"
       href="/one">Real Link 1</a>
  </li>
  <li>
    <a class="c-menu__item"
       href="/two">Real Link 2</a>
  </li>

  <li class="c-menu__separator"
      role="presentation"></li>

  <li>
    <a class="c-menu__item"
       href="/three">Real Link 3</a>
  </li>
  <li>
    <a class="c-menu__item"
       href="/four">Real Link 4</a>
  </li>
</ul>

```


### Using `<nav>` and `<a href>`

Obviously, this pattern only applies to a list of links used for navigation. The `nav` element is new in HTML5 and it comes with a default `role` of `navigation`, so don't use this pattern unless you really are presenting navigation links. (This matters because assistive technology considers navigation menus to be their own kind of page “landmark.”)

```html
<nav class="c-menu">
  <a class="c-menu__item" href="/one">Real Link 1</a>
  <a class="c-menu__item" href="/two">Real Link 2</a>
  <span class="c-menu__separator"></span>
  <a class="c-menu__item" href="/three">Real Link 3</a>
</nav>
```


### Using `<ul>` and `<li>` (without `<a>`)

This "menu of commands" pattern is based on [this example implementation][example-kbd-menus] of keyboard-accessible menus.

It is oriented towards nested menus of commands (like the File · Edit · View commands on your computer), not links.

To ensure the correct mouse cursor is used even with this or less accessible markup patterns, the CSS in this package applies the pointer/“hand” cursor to all `c-menu__item` instances. However, this is not a blanket endorsement, and this pattern may or may not appropriate for your purposes.

Additional classes are provided that enhance the "menu of commands" pattern, such as for selected options (e.g., Bold) or disabled commands. (These are demonstrated elsewhere on this page.)

You're expected to use [js-menus][js-menus] (or a port of the behavior it implements) when using this markup pattern. Additionally, you should apply additional `aria-*`, `role`, and `tabindex="0"` attributes. Otherwise, you won't support keyboard navigation or screen readers out of the box.

[example-kbd-menus]: http://oaa-accessibility.org/examplep/menubar1/
[css-arrows]: http://zendeskgarden.github.io/css-arrows/
[js-menus]: http://zendeskgarden.github.io/js-menus/

```html
<ul aria-hidden="true"
    class="c-menu"
    role="menu">
  <li class="c-menu__item"
      role="menuitem">Normal Item</li>
  <li aria-disabled="true"
      class="c-menu__item is-disabled"
      role="menuitem">Disabled Item</li>
  <li class="c-menu__separator"
      role="separator"></li>
  <li class="c-menu__item"
      role="menuitem">Another Normal Item</li>
  <li class="c-menu__item is-selected"
      role="menuitem">Selected</li>
</ul>
```

The `aria-hidden` property above is intended to be flipped using JavaScript as the menu is hidden or shown.

As the above example doesn’t use `<a href>` tags, it is not appropriate for navigation.


## Accessibility

Accessibility considerations are essentially outside of the scope of this package of styles, but we have attempted to show accessible markup patterns and express expectations around behavior in the README (and the demo).

[Please read this for information regarding testing keyboard navigation in your implementation][fka].

[fka]: https://zendesk.atlassian.net/wiki/display/Prod/Validating+that+a+UI+Works+with+the+Keyboard+on+OS+X "Validating that a UI works with the keyboard on OS X"


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
