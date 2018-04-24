# @zendeskgarden/css-modals

This package package provides styling for dialogs and the associated
backdrop layouts needed to present a modal dialog treatment.

## Installation

```sh
npm install @zendeskgarden/css-modals
```

## Usage

Once installed, modal CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-modals';
```

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
    <button aria-label="close" class="c-dialog__close"></button>
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

Use the backdrop layout class to give a dialog a modal treatment.

```html
<div class="l-backdrop">
  <section class="c-dialog c-dialog--center"
           ...>
  </section>
</div>
```

### Modifications

See http://zendeskgarden.github.io/css-components/modals/ for
modal component usage and modification classes.

#### Accessibility

The sample HTML incorporates `aria-*` and `role` attributes expected by
assistive technology. The use of `tabindex` supports focus and keyboard
navigation.


#### RTL

Use the following state class to support RTL text direction:

```html
<section class="c-dialog is-rtl"
         ...>
</section>
```

#### Animation

Add the following state class on open for a modal "pop" intended by the
design:

```html
<section class="c-dialog is-open"
         ...>
</section>
```

Remember to remove `.is-open` when the dialog is closed.

### Behavior

See the
[&lt;Modal&gt;](https://zendeskgarden.github.io/react-components/#!/Modal)
component for intended modal dialog behavior, including trapping tab
focus and dismissing via escape.
