# @zendeskgarden/css-grid [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-grid
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-grid

This package contains an opinionated version of the Bootstrap v4 flexbox grid.

It includes:

- Zendesk specific gutter sizing
- RTL locale support with the `.is-rtl` class
- Debug styling support with the `.is-debug` class

All classes are consistent with the
[Bootstrap Grid Documentation](https://getbootstrap.com/docs/4.0/layout/grid/).

## Installation

```sh
npm install @zendeskgarden/css-grid
```

## Usage

Once installed, grid CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-grid';
```
