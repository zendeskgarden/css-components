# @zendeskgarden/css-bedrock [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-bedrock
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-bedrock

This package provides a mostly reasonable CSS reset layered on top of
[modern-normalize](https://www.npmjs.com/package/modern-normalize).

## Installation

```sh
npm install @zendeskgarden/css-bedrock
```

## Usage

Once installed, bedrock CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-bedrock';
```

The distribution for Bedrock CSS contains global styling rules to help
projects get started with Garden designs. In addition to Normalize.css,
Bedrock includes:

- Garden's system font stack applied to page.
- Base font size (14px) applied to the page.
- Reset `box-sizing` to `border-box` for all elements.
- A default treatment for anchor elements.
- Headings (1-6) reset to inherit `font-size`.
- Browser `margin` and `padding` stripped from block elements.

See
https://zendeskgarden.github.io/css-components?path=/story/components-bedrock
for a demonstration of the resets provided by this package.
