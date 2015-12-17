# Bedrock CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-bedrock.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-bedrock)

The `css-bedrock` package contains foundational CSS for Garden fonts,
typography, resets, layouts, and utilities.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-bedrock.git

## Usage

The distribution for Bedrock CSS contains all of the rules that most
projects will need in order to get started with Garden designs. In some
cases, the distribution CSS may contain too much or too little of the
CSS your project requires. For example, the default bedrock CSS includes
the following font faces:

* Proxima Nova Regular
* Proxima Nova Regular Italic
* Proxima Nova Semibold
* Proxima Nova Semibold Italic
* Proxima Nova Light
* Proxima Nova Light Italic
* Proxima Nova Thin
* Proxima Nova Thin Italic

If your project required several DIN Next faces, you would need to
import the necessary source files from this package and use PostCSS to
include them in your asset pipeline.

The [demo](http://zendeskgarden.github.io/css-bedrock/) is probably your
best bet for discovering the styling classes that Bedrock CSS provides.

### Fonts

A special note regarding font usage... *Each project must secure vendor
payment for the faces that are needed. Please contact the Creative
department to verify that Zendesk has arranged payments for the fonts
you are planning to use.*

Bedrock @font-face CSS declarations are matched by means of [style
linking](http://www.fontspring.com/support/troubleshooting/style-linking).
It is important to understand this feature so that your styles end up
using the intended custom font. In order to take advantage of browser
caching, custom fonts are served as files. Optimal WOFF2 font format
files are prioritized above WOFF. In addition, we subset large unicode
font sets based on the `unicode-range` descriptor.

## Tests

    $ npm test

## Demo

    $ npm start
