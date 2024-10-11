# @zendeskgarden/css-forms [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-forms
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-forms

This package contains basic `.c-field` component styling.

## Installation

```sh
npm install @zendeskgarden/css-forms
```

## Usage

Once installed, form CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-forms';
```

### Input

Input CSS is intended to enhance the following HTML.

```html
<div class="c-field">
  <label class="c-field__label" for="input-id">Label</label>
  <div class="c-field__hint">Optional hint</div>
  <input class="c-field__input" id="input-id" placeholder="[placeholder]" />
  <div class="c-field__message" role="alert">Optional validation message</div>
</div>
```

#### Area

Use the following `--area` modifier class to support `textarea` fields.

```html
<div class="c-field">
  <label class="c-field__label" for="textarea-id">Label</label>
  <textarea id="textarea-id" class="c-field__input c-field__input--area"></textarea>
</div>
```

##### Select

Use the following `--select` modifier to support `select` fields.

```html
<div class="c-field">
  <label class="c-field__label" for="select-id">Label</label>
  <select class="c-field__input c-field__input--select" id="select-id">
    <option>foo</option>
    <option>bar</option>
    <option>baz</option>
  </select>
</div>
```

#### Input modifications

See
http://zendeskgarden.github.io/css-components/?path=/story/components-forms-input--default
for various input field modification classes.

### Toggle

Checkbox CSS is intended to enhance the following HTML. Element order is important.

```html
<div class="c-field">
  <input class="c-field__checkbox" id="checkbox-id" type="checkbox" />
  <label class="c-field__label" for="checkbox-id">Label</label>
  <div class="c-field__hint">Optional hint</div>
  <div class="c-field__message" role="alert">Optional validation message</div>
</div>
```

Radio CSS is intended to enhance the following HTML. Element order is important.

```html
<div class="c-field">
  <input class="c-field__radio" id="radio-id" type="radio" />
  <label class="c-field__label" for="radio-id">Label</label>
  <div class="c-field__hint">Optional hint</div>
  <div class="c-field__message" role="alert">Optional validation message</div>
</div>
```

#### Toggle modifications

See
http://zendeskgarden.github.io/css-components/?path=/story/components-forms-toggle--default
for toggle component usage and modification classes.
