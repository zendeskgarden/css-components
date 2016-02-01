# Modal Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-modals.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-modals)

The `css-modals` package provides styling for dialogs and the associated
backdrop layouts needed to present a modal dialog treatment.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-modals.git

## Usage

Canonical markup for a dialog is structured as follows.

```html
<section aria-labelledby="dialog-title"
         aria-hidden="true"
         class="c-dialog"
         role="dialog"
         style="display: none;"
         tabindex="-1">
  <header>
    <h1 class="c-dialog__header" id="dialog-title">Dialog Title</h1>
    <button aria-label="close"
            class="c-dialog__close">
      <svg>
        <use xlink:href="index.svg#zd-svg-icon-14-remove">
      </svg>
    </button>
  </header>
  <div class="c-dialog__body">
    [YOUR DIALOG CONTENT HERE]
  </div>
  <footer class="c-dialog__footer">
    <!-- example dialog actions -->
    <button class="c-btn">Cancel</button>
    <button class="c-btn">OK</button>
  </footer>
</section>
```

Please note the recommended use of the "remove" SVG referenced from the
symbol distribution provided by
[svg-icons](https://github.com/zendeskgarden/svg-icons) (a dependency of
this package).

Use the backdrop layout class to give a dialog a modal treatment.

```html
<div class="l-backdrop"
     tabindex="-1">
  <section class="c-dialog c-dialog--modal"
           ...>
  </section>
</div>
```

### Accessibility

The sample HTML incorporates `aria-*` and `role` attributes expected by
assistive technology. The use of `tabindex` supports keyboard
navigation.

### Modifications

Layout specifications for modals are expected to vary based on context.
Use [css-bedrock](https://github.com/zendeskgarden/css-bedrock)
[spacing](http://zendeskgarden.github.io/css-bedrock/spacing.html)
classes to override default dialog padding for your product's dialog
design requirements.

### Behavior

See [js-modals](https://github.com/zendeskgarden/js-tabs) for reference
JavaScript support for modal dialogs, including trapping tab focus and
dismissing via escape.

## Tests

    $ npm test

## Demo

    $ npm start
