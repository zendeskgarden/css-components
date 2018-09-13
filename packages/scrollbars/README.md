# @zendeskgarden/css-scrollbars [![npm version](https://img.shields.io/npm/v/@zendeskgarden/css-scrollbars.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/css-scrollbars)


This package contains a set of classes for styling vertical and
horizontal custom scrollbars (tracks and thumbs).

## Installation

```sh
npm install @zendeskgarden/css-scrollbars
```

## Usage

Once installed, scrollbars CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-scrollbars';
```

Component CSS provides styling for the following basic scrollbar structure.

```html
<div class="c-scrollbar>
  <div>YOUR SCROLLABLE CONTENT HERE</div>
  <div class="c-scrollbar__track c-scrollbar__track--vertical">
    <div class="c-scrollbar__thumb"></div>
  </div>
</div>
```

Apply height/width to the `.c-scrollbar` container in order to format
content for the intended layout.

### Modifications

See http://zendeskgarden.github.io/css-components/scrollbars/ for
modification classes, including dark mode and support for RTL.

### Behavior

This component only applies scrollbar styling. Actual custom scrollbar
behavior requires JavaScript support.
