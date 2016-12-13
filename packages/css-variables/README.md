# CSS Variables [![Build Status](https://travis-ci.com/zendeskgarden/css-variables.svg?token=dDt9s6smCMgz269xNbpz)](https://travis-ci.com/zendeskgarden/css-variables)

The `css-variables` package contains common variables used by the rest
of the framework.

## Installation

    $ npm install --save-dev git+ssh://git@github.com:zendeskgarden/css-variables.git

## Usage

Variables are declared under the `src` folder may be accessed via
`@import` with the help of
[postcss-import](https://github.com/postcss/postcss-import).

The package `dist` contains corresponding Sass variables for use inside
your own CSS build pipeline.

## Tests

    $ npm test

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
