# @zendeskgarden/css-tabs [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-tabs
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-tabs

This package provides styling for tab components.

## Installation

```sh
npm install @zendeskgarden/css-tabs
```

## Usage

Once installed, tabs CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-tabs';
```

Tab CSS classes are intended to support the following component
structure.

```html
<nav class="c-tab">
  <ul class="c-tab__list" role="tablist">
    <li
      aria-controls="panel1"
      aria-expanded="true"
      aria-selected="true"
      class="c-tab__list__item is-selected"
      id="tab1"
      role="tab"
      tabindex="0"
    >
      One
    </li>
    <li
      aria-controls="panel2"
      aria-expanded="false"
      aria-selected="false"
      class="c-tab__list__item"
      id="tab2"
      role="tab"
      tabindex="-1"
    >
      Two
    </li>
  </ul>
  <div aria-hidden="false" aria-labelledby="tab1" class="c-tab__panel" id="panel1" role="tabpanel">
    PANEL ONE
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="tab2"
    class="c-tab__panel"
    id="panel2"
    role="tabpanel"
    style="display: none;"
  >
    PANEL TWO
  </div>
</nav>
```

### Accessibility

The sample HTML incorporates `aria-*` and `role` attributes expected by
assistive technology. The use of `tabindex` supports keyboard
navigation.

### Modifications

The same structure can be styled vertically via the following:

```html
<nav class="c-tab c-tab--block">
  ...
</nav>
```

HTML for anchored tabs should be structured like this:

```html
<li
  aria-controls="panel1"
  aria-expanded="true"
  aria-labelledby="anchor1"
  aria-selected="true"
  class="c-tab__list__item is-selected"
  id="tab1"
  role="tab"
>
  <a href="#" id="anchor1" role="presentation" tabindex="-1">One</a>
</li>
```

See http://zendeskgarden.github.io/css-components/tabs/ for additional
tab component modification classes.

### Behavior

See the
[&lt;Tabs&gt;](http://zendeskgarden.github.io/react-components/#!/Tabs)
component for intended mouse and keyboard (tab-to; cursor-through)
behavior.
