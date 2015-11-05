# Tab Component CSS [![Build Status](https://magnum.travis-ci.com/zendeskgarden/css-tabs.svg?token=tabs&branch=master)](https://magnum.travis-ci.com/zendeskgarden/css-tabs)

The `css-tabs` package provides styling for tab components.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-tabs.git

## Usage

Tab CSS classes are intended to support the following component structure.

```html
<zd-tabs class="c-tab">
  <zd-tablist class="c-tab__list" role="tablist">
    <zd-tab
      aria-controls="panel1"
      aria-expanded="true"
      aria-selected="true"
      class="c-tab__list__item is-active"
      id="tab1"
      role="tab"
      tabindex="0">One</zd-tab
    ><zd-tab
      aria-controls="panel2"
      aria-expanded="false"
      aria-selected="false"
      class="c-tab__list__item"
      id="tab2"
      role="tab"
      tabindex="-1">Two</zd-tab>
  </zd-tablist>
  <zd-tabpanel
    aria-hidden="false"
    aria-labelledby="tab1"
    class="c-tab__panel"
    id="panel1"
    role="tabpanel">PANEL ONE</zd-tabpanel>
  <zd-tabpanel
    aria-hidden="true"
    aria-labelledby="tab2"
    class="c-tab__panel"
    id="panel2"
    role="tabpanel"
    style="display: none;">PANEL TWO</zd-tabpanel>
</zd-tabs>
```

### Accessibility

The sample HTML incorporates `aria-*` and `role` attributes expected by
assistive technology. The use of `tabindex` supports keyboard
navigation.

### Modifications

The same structure can be styled vertically via the following:

```html
<zd-tabs class="c-tab c-tab--block">
  ...
</zd-tabs>
```

HTML for anchored tabs should be structured like this:

```html
<zd-tab
  aria-controls="panel1"
  aria-expanded="true"
  aria-labelledby="anchor1"
  aria-selected="true"
  class="c-tab__list__item is-active"
  id="tab1"
  role="tab"><a href="#" id="anchor1" role="presentation" tabindex="-1">One</a></zd-tab>
```

### Behavior

See [js-tabs](https://github.com/zendeskgarden/js-tabs) for reference
JavaScript support for tabs.

## Tests

    $ npm test

## Demo

    $ npm start
