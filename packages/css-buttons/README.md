# Button Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-buttons.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-buttons)

The `garden-css-buttons` component contains basic `.c-btn` styling.

## Installation

    npm install --save-dev @zendesk/garden-css-buttons

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

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

See http://garden.zendesk.com/css-buttons/ for various button
modification classes.

### Behavior

See the
[Button](http://garden.zendesk.com/react-components/#!/Button)
component for intended keyboard & blur-on-mouseup behavior.

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
