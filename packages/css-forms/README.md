# Forms Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-forms.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-forms)

The `css-forms` package. Use a copy of this repo to bootstrap a new CSS component.

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

## Tests

    $ npm test

## Demo

    $ npm start
