# Button Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-buttons.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-buttons)

The `css-buttons` component contains basic `.c-btn` styling.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-buttons.git

## Usage

Button CSS is intended to enhance the following HTML.

```html
<button class="c-btn">CLICK ME</button>
```

### Accessibility

If you are unable to use a native HTML `<button>`, be sure to add
the appropriate `role` attribute.

```html
<a class="c-btn" href="#" role="button">LINK BUTTON</a>
```

Also note that the element must be able to receive focus and can be
activated using either the `enter` or `space` keys. Conversely, a
disabled button should not be able to receive focus.

```html
<a class="c-btn is-disabled" href="#" role="button" tabindex="-1">DISABLED LINK BUTTON</a>
```

### Modifications

See http://zendeskgarden.github.io/css-buttons/ for various button
modification classes.

#### Accent

See the `accent.css` source file for sample CSS needed to format buttons
according to your product's accent color (i.e. "promo" orange). This CSS
is not included in the package distribution. Upon inclusion,
corresponding HTML would be:

```html
<button class="c-btn c-btn--accent">...</button>
```

### Behavior

See [js-buttons](https://github.com/zendeskgarden/js-buttons) for
intended keyboard & blur-on-mouseup behavior. Use
[js-tabs](https://github.com/zendeskgarden/js-tabs) to manage behavior
for button groups.

## Tests

    $ npm test

## Demo

    $ npm start
