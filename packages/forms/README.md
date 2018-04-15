# @zendeskgarden/css-forms

This package is intended to provide consistent styling for form fields
used throughout Zendesk products.

## Installation

```sh
npm install --save-dev @zendeskgarden/css-forms
```

## Usage

Once installed, form CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-forms';
```

### Checkbox

Checkbox input CSS is intended to support component structure similar to
the following.

```html
<div class="c-chk">
  <input class="c-chk__input" id="box-id" type="checkbox">
  <label class="c-chk__label" for="box-id">Label</label>
</div>
```

#### Modifications

See http://zendeskgarden.github.io/css-components/forms/checkbox/ for
checkbox component usage and modification classes.

##### Toggle

Use the `.c-chk--toggle` modifier to style the checkbox as a toggle.

```html
<div class="c-chk c-chk--toggle">
  ...
</div>
```

##### Radio

Use the `.c-chk--radio` modifier to style for radio button form fields.

```html
<div class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-1" name="level" type="radio">
  <label class="c-chk__label" for="rdo-1">Beginner</label>
</div>
<div class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-2" name="level" type="radio">
  <label class="c-chk__label" for="rdo-2">Intermediate</label>
</div>
<div class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-3" name="level" type="radio">
  <label class="c-chk__label" for="rdo-3">Advanced</label>
</div>
```

##### RTL

Use the following state class to support RTL text direction:

```html
<div class="c-chk is-rtl">
  ...
</div>
```

### Range

Range input CSS is intended to support a component structure similar to
the following.

```html
<div class="c-range">
  <label class="c-range__label" for="range-id">Label</label>
  <small class="c-range__hint">Optional hint.</small>
  <input class="c-range__input" id="range-id" type="range">
</div>
```

#### Modifications

See http://zendeskgarden.github.io/css-components/forms/range/ for
range component usage and modification classes.

##### Inline

Use the following modifier class to support inline range fields:

```html
<div class="c-range c-range--inline">
  ...
</div>
```

##### RTL

Use the following state class to support RTL layout. Consider the
guidelines under [Material Design
Bidirectionality](https://material.google.com/usability/bidirectionality.html)
when using a range slider to model directional elements (i.e. playback).

```html
<div class="c-range is-rtl">
  ...
</div>
```

### Text

Text input CSS is intended to support a component structure similar to
the following.

```html
<div class="c-txt">
  <label class="c-txt__label" for="text-id">Label</label>
  <small class="c-txt__hint">Optional hint.</small>
  <input class="c-txt__input" id="text-id" placeholder="[placeholder]" type="text">
</div>
```

#### Modifications

See http://zendeskgarden.github.io/css-components/forms/text/ for
text component usage and modification classes.

##### Inline

Use the following modifier class to support inline text fields:

```html
<div class="c-txt c-txt--inline">
  ...
</div>
```

##### Area

Use the following modifier class to support `textarea` fields:

```html
<div class="c-txt">
  <textarea class="c-txt__input c-txt__input--area"></textarea>
</div>
```

##### Dropdown

Use the following `select` modifier along with a
[`menu`](http://zendeskgarden.github.io/css-components/menus/) component
to support dropdown fields:

```html
<div>
  <div class="c-txt">
    <label class="c-txt__label" for="select-id">Select</label>
    <button
      aria-autocomplete="list"
      aria-expanded="false"
      aria-haspopup="true"
      aria-owns="menu-id"
      class="c-txt__input c-txt__input--select"
      id="select-id"
      role="combobox">VALUE</button>
  </div>
  <ul aria-hidden="true"
      aria-labelledby="select-id"
      class="c-menu c-menu--down"
      id="menu-id"
      role="listbox">
    <li class="c-menu__item" role="option">item</li>
    <li class="c-menu__item is-selected" role="option">VALUE</li>
    <li class="c-menu__item" role="option">item</li>
  </ul>
</div>
```

##### RTL

Use the following state class to support RTL text direction:

```html
<div class="c-txt is-rtl">
  ...
</div>
```

## Behavior

See the
[React Components](http://zendeskgarden.github.io/react-components/)
for a rich set of component behaviors applied to form input controls.
