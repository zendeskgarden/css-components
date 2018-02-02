# Label Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-labels.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-labels)

The `garden-css-labels` package provides styling for label components
needed to support badges, pills, and tags.

## Installation

    npm install --save-dev @zendesk/garden-css-labels

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Label CSS is intended to enhance the following HTML.

```html
<div class="c-label">LABEL</div>
```

### Modifications

See http://garden.zendesk.com/css-labels/ for additional label component
modification classes.

#### Remove

Use the following HTML to support the addition of a *remove* icon. Note
the use of `tabindex` to allow the label to receive keyboard focus, but
prevent tabbing to the remove button.

To make this accessible to all users we have added a hidden description 
that is visible to screen readers.

```html
<div class="c-label" tabindex="0">
  <span>LABEL</span>
  <div class="u-visibility-screenreader">Press delete to remove this label.</div>
  <button class="c-label__remove" tabindex="-1"></button>
</div>
```

#### Avatar

Use the following HTML to support the addition of a label *avatar*.

```html
<div class="c-label">
  <svg class="c-label__avatar" aria-label="Avatar description">...</svg>
  <span>LABEL</span>
</div>
```

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
