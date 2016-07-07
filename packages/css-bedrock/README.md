# Bedrock CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-bedrock.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-bedrock)

The `css-bedrock` package contains foundational CSS for Garden fonts,
typography, resets, layouts, and utilities.

## Installation

    $ npm install --save git+ssh://git@github.com:zendeskgarden/css-bedrock.git

## Usage

The distribution for Bedrock CSS contains all of the rules that most
projects will need in order to get started with Garden designs. In some
cases, the distribution CSS may contain too much or too little of the
CSS your project requires. In that case import source files of interest
from this package and use PostCSS to include them in your asset
pipeline.

The [demo](http://zendeskgarden.github.io/css-bedrock/) is probably your
best bet for discovering the styling classes that Bedrock CSS provides.

## Tests

    $ npm test

## Demo

    $ npm start
