# @zendeskgarden/css-buttons

This package contains basic `.c-btn` component styling.

## Installation

```sh
npm install --save-dev @zendeskgarden/css-buttons
```

## Usage

Once installed, button CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-buttons';
```

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

See http://garden.zendesk.com/css-components/buttons/ for various button
modification classes.

### Behavior

See the
[&lt;Button&gt;](http://garden.zendesk.com/react-components/#!/Button)
component for intended keyboard & blur-on-mouseup behavior.
