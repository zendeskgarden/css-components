# @zendeskgarden/css-callouts [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-callouts
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-callouts

This package contains styling for a selection of callout containers.

## Installation

```sh
npm install @zendeskgarden/css-callouts
```

## Usage

Once installed, callout CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-callouts';
```

Callout CSS is intended to provide styling for the following HTML.

```html
<div class="c-callout">
  <strong class="c-callout__title">Callout Title</strong>
  <p class="c-callout__paragraph">Callout body text...</p>
</div>
```

### Modifications

See
https://zendeskgarden.github.io/css-components/?path=/story/components-callouts
for various callout modification classes.
