# CSS Variables

The `css-variables` package contains common variables used by the rest
of the framework.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-variables.git

## Usage

Variables are declared under the `src` folder may be accessed via
`@import` with the help of
[postcss-import](https://github.com/postcss/postcss-import).

The package `dist` contains corresponding Sass variables for use inside
your own CSS build pipeline.

## Tests

    $ npm test
