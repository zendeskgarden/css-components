# Tab Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-tabs.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-tabs)

The `garden-css-tabs` package provides styling for tab components.

## Installation

    npm install --save-dev @zendesk/garden-css-tabs

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Tab CSS classes are intended to support the following component structure.

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
      tabindex="0">One</li
    ><li
      aria-controls="panel2"
      aria-expanded="false"
      aria-selected="false"
      class="c-tab__list__item"
      id="tab2"
      role="tab"
      tabindex="-1">Two</li>
  </ul>
  <div
    aria-hidden="false"
    aria-labelledby="tab1"
    class="c-tab__panel"
    id="panel1"
    role="tabpanel">PANEL ONE</div>
  <div
    aria-hidden="true"
    aria-labelledby="tab2"
    class="c-tab__panel"
    id="panel2"
    role="tabpanel"
    style="display: none;">PANEL TWO</div>
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
  role="tab"><a href="#" id="anchor1" role="presentation" tabindex="-1">One</a></li>
```

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
