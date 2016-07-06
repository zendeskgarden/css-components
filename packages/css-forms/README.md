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

##### RTL

Use the following state class to support RTL text direction:

```html
<fieldset class="c-chk is-rtl">
  ...
</fieldset>
```

##### Accent

See the checkbox `accent.css` source file for sample CSS needed to
format checkboxes according to your product's accent color. This CSS is
not included in the package distribution. Upon inclusion, corresponding
HTML would be:

```html
<fieldset class="c-chk c-chk--accent">
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

##### Accent

See the text `accent.css` source file for sample CSS needed to format
text fields according to your product's accent color. This CSS is not
included in the package distribution. Upon inclusion, corresponding HTML
would be:

```html
<fieldset class="c-txt c-txt--accent">
  ...
</fieldset>
```

## Tests

    $ npm test

## Demo

    $ npm start
