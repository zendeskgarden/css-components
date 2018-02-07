# @zendeskgarden/css-pagination

This package provides component styling for page navigation.

## Installation

```sh
npm install --save-dev @zendesk/garden-css-pagination
```

## Usage

Once installed, pagination CSS can be accessed via `postcss-import`.

```css
@import '@zendesk/garden-css-pagination';
```

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

### Modifications

See http://zendeskgarden.github.io/css-components/pagination/ for
pagination component usage and modification classes.

### Behavior

See the
[&lt;Pagination&gt;](http://zendeskgarden.github.io/react-components/#!/Pagination)
component for intended mouse and keyboarding behaviors.
