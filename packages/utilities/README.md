# @zendeskgarden/css-utilities

This package contains override styling via a collection of utility
classes.

## Installation

```sh
npm install --save-dev @zendesk/garden-css-utilities
```

## Usage

Once installed, utilities CSS can be accessed via `postcss-import`.

```css
@import '@zendesk/garden-css-utilities';
```

Utilities include CSS property overrides for:

* `background-color`
* `border`
* `border-color`
* `border-radius`
* `color`
* `display`
* `float`
* `font-family`
* `font-size`
* `font-weight`
* `list-style`
* `margin`
* `opacity`
* `padding`
* `position`
* `text-align`
* `vertical-align`
* `width`

and more. All utilities are combined under the main package `index.css`
distribution. Smaller CSS utility files, each representing overrides
from the list above, are available in the package `dist` folder.

See https://zendeskgarden.github.io/css-components/utilities/ for the
various utilities provided by this package.
