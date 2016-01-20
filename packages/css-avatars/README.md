# Avatar Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-avatars.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-avatars)

The `css-avatars` component contains basic `.c-avatar` styling.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-avatars.git

## Usage

Use avatar CSS to style user and system icons.

```html
<figure class="c-avatar">
  <img alt="user avatar" src="images/user.png">
</figure>

<figure class="c-avatar c-avatar--system">
  <img alt="system avatar" src="images/system.png">
</figure>
```

### Modifications

Avatar classes retain affordance for indicating state. See
http://zendeskgarden.github.io/css-avatars for various modification
classes.

## Tests

    $ npm test

## Demo

    $ npm start
