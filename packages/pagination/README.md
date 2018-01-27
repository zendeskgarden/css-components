# Pagination Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-pagination.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-pagination)

The `garden-css-pagination` package provides component styling for page
navigation.

## Installation

    $ npm install --save-dev @zendesk/garden-css-pagination

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Pagination CSS classes are used to style the following canonical markup.

```html
<ul class="c-pagination" role="navigation">
  <li class="c-pagination__page c-pagination__page--previous" aria-hidden="true"><a href>previous</a></li>
  <li class="c-pagination__page" aria-current="true"><a href>1</a></li>
  <li class="c-pagination__page"><a href>2</a></li>
  <li class="c-pagination__page"><a href>3</a></li>
  <li class="c-pagination__page c-pagination__page--next"><a href>next</a></li>
</ul>
```

See http://garden.zendesk.com/css-pagination/ for pagination component
usage and additional modification classes.

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
