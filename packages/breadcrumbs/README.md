# @zendeskgarden/css-breadcrumbs [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-breadcrumbs
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-breadcrumbs

This package contains a set of classes for styling breadcrumb
navigation.

## Installation

```sh
npm install @zendeskgarden/css-breadcrumbs
```

## Usage

Once installed, breadcrumbs CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-breadcrumbs';
```

Component CSS provides styling for the following basic breadcrumb
structure.

```html
<ol class="c-breadcrumb">
  <li class="c-breadcrumb__item">
    <a href>Ancestor link</a>
  </li>
  <li class="c-breadcrumb__item">
    <a href>Parent link</a>
  </li>
  <li class="c-breadcrumb__item is-current">Current item</li>
</ol>
```

### Modifications

See http://zendeskgarden.github.io/css-components/breadcrumbs/ for
modification classes such as support for RTL.
