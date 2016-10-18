# Forms Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-forms.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-forms)

The `css-forms` package is intended to provide consistent styling for
form fields used throughout Zendesk products.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-forms.git

## Usage

### Checkbox

Checkbox input CSS is intended to support component structure similar to
the following.

```html
<fieldset class="c-chk">
  <input class="c-chk__input" id="box-id" type="checkbox">
  <label class="c-chk__label" for="box-id">Label</label>
</fieldset>
```

#### Modifications

##### Toggle

Use the `.c-chk--toggle` modifier to style the checkbox as a toggle.

```html
<fieldset class="c-chk c-chk--toggle">
  ...
</fieldset>
```

##### Radio

Use the `.c-chk--radio` modifier to style for radio button form fields.

```html
<fieldset class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-1" name="level" type="radio">
  <label class="c-chk__label" for="rdo-1">Beginner</label>
</fieldset>
<fieldset class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-2" name="level" type="radio">
  <label class="c-chk__label" for="rdo-2">Intermediate</label>
</fieldset>
<fieldset class="c-chk c-chk--radio">
  <input class="c-chk__input" id="rdo-3" name="level" type="radio">
  <label class="c-chk__label" for="rdo-3">Advanced</label>
</fieldset>
```

##### RTL

Use the following state class to support RTL text direction:

```html
<fieldset class="c-chk is-rtl">
  ...
</fieldset>
```

### Range

Range input CSS is intended to support a component structure similar to
the following.

```html
<fieldset class="c-range">
  <label class="c-range__label" for="range-id">Label</label>
  <small class="c-range__hint">Optional hint.</small>
  <input class="c-range__input" id="range-id" type="range">
</fieldset>
```

#### Modifications

##### Inline

Use the following modifier class to support inline range fields:

```html
<fieldset class="c-range c-range--inline">
  ...
</fieldset>
```

##### RTL

Use the following state class to support RTL layout. Consider the
guidelines under [Material Design
Bidirectionality](https://material.google.com/usability/bidirectionality.html)
when using a range slider to model directional elements (i.e. playback).

```html
<fieldset class="c-range is-rtl">
  ...
</fieldset>
```

### Text

Text input CSS is intended to support a component structure similar to
the following.

```html
<fieldset class="c-txt">
  <label class="c-txt__label" for="text-id">Label</label>
  <small class="c-txt__hint">Optional hint.</small>
  <input class="c-txt__input" id="text-id" placeholder="[placeholder]" type="text">
</fieldset>
```

#### Modifications

##### Inline

Use the following modifier class to support inline text fields:

```html
<fieldset class="c-txt c-txt--inline">
  ...
</fieldset>
```

##### Area

Use the following modifier class to support `textarea` fields:

```html
<fieldset class="c-txt">
  <textarea class="c-txt__input c-txt__input--area"></textarea>
</fieldset>
```

## Tests

    $ npm test

## Demo

    $ npm start
