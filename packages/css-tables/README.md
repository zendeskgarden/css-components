# Table Component CSS [![Build Status](https://travis-ci.com/zendeskgarden/css-tables.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-tables)

The `garden-css-tables` package contains a variety of classes that apply
consistent styling to tables, rows, and columns.

## Installation

    npm install --save-dev @zendesk/garden-css-tables

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages.

## Usage

Component CSS provides styling for the following basic table structure.

```html
<table class="c-table">
  <caption class="c-table__caption">Table Caption</caption>
  <thead>
    <tr class="c-table__row c-table__row--header">
      <th class="c-table__row__cell">...</th>
      <!-- additional header columns... -->
    </tr>
    <!-- additional header rows... -->
  </thead>
  <tbody>
    <tr class="c-table__row">
      <td class="c-table__row__cell">...</td>
      <!-- additional body columns... -->
    </tr>
    <!-- additional body rows... -->
  </tbody>
</table>
```

### Modifications

See http://zendeskgarden.github.io/css-tables/ for a variety of table
modification classes, including: small and large sizing, zebra-striped
rows, minimized and truncated cells, in-context overflow, support for
RTL, etc.

### Accessibility

Use the following checklist to ensure your tables follow accessibility
best practice.

* Every table must include a `<caption>` element with the title of the
  table as its first descendant. The `.c-table__caption` BEM component
  provides rudimentary styling (along with support for RTL) and is meant
  to be enhanced with CSS for individual table designs.
* Use `aria-sort` to indicate column sort order.
* Use a `button` to handle keyboard toggle for a
  `.c-table__row__cell__sortable` component. Combined with the previous
  checkpoint, the HTML would look something like this:

```html
<th aria-sort="ascending" class="c-table__row__cell">
  <button class="c-table__row__cell__sortable" type="button">Sortable Column</button>
</th>
```

* Use a `button` with `aria-haspopup` to handle
  `.c-table__row__cell__overflow` components. Again, the HTML would be
  similar to:

```html
<td class="c-table__row__cell c-table__row__cell--overflow">
  <button aria-haspopup="true" class="c-table__row__cell__overflow" type="button">
    <ul aria-hidden="true" class="c-menu c-menu--down" role="menu">
      <li class="c-menu__item" role="menuitem">...</li>
    </ul>
  </button>
</td>
```

## Tests

    $ npm test

## Demo

    $ npm start

## Contributing

See [LANDSCAPE
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Contributing).
