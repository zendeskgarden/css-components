# @zendeskgarden/css-avatars [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/css-avatars
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/css-avatars

This component contains basic `.c-avatar` component styling.

## Installation

```sh
npm install @zendeskgarden/css-avatars
```

## Usage

Once installed, avatar CSS can be accessed via `postcss-import`.

```css
@import '@zendeskgarden/css-avatars';
```

Use avatar CSS to style user and system images.

```html
<figure class="c-avatar">
  <img alt="user avatar" src="images/user.png" />
</figure>

<figure class="c-avatar c-avatar--system">
  <img alt="system avatar" src="images/system.png" />
</figure>
```

### Modifications

Avatar classes can be used to indicate state. See
http://zendeskgarden.github.io/css-avatars for various modification classes.

### Behavior

See the
[&lt;Avatar&gt;](http://zendeskgarden.github.io/react-components/#!/Avatar)
component for supported props and behavior.
