# @zendeskgarden/css-tags [![npm version](https://img.shields.io/npm/v/@zendeskgarden/css-tags.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/css-tags)

This package provides styling for tag components needed to support
badges, pills, and labels.

## Installation

```sh
npm install @zendeskgarden/css-tags
```

## Usage

Once installed, tag CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-tags';
```

Tag CSS is intended to enhance the following HTML.

```html
<div class="c-tag">TAG</div>
```

### Modifications

See http://zendeskgarden.github.io/css-components/tags/ for additional
tag component modification classes.

#### Remove

Use the following HTML to support the addition of a *remove* icon. Note
the use of `tabindex` to allow the tag to receive keyboard focus, but
prevent tabbing to the remove button.

To make this accessible to all users we have added a hidden description
that is visible to screen readers.

```html
<div class="c-tag" tabindex="0">
  <span>TAG</span>
  <div class="u-visibility-screenreader">Press delete to remove this tag.</div>
  <button class="c-tag__remove" tabindex="-1"></button>
</div>
```

#### Avatar

Use the following HTML to support the addition of a tag *avatar*.

```html
<div class="c-tag">
  <svg class="c-tag__avatar" aria-label="Avatar description">...</svg>
  <span>TAG</span>
</div>
```

### Behavior

See the
[&lt;Label&gt;](http://zendeskgarden.github.io/react-components/#!/Label)
component for intended mouse and keyboarding behaviors.
