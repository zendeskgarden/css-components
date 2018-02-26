# Garden CSS Components [![Build Status](https://travis-ci.com/zendeskgarden/css-components.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-components)

> :seedling: Garden is a design system for Zendesk

Garden CSS provides consistent styling for Garden components. Component
CSS is maintained following a multi-package approach where components
are packaged and published individually but combined under this single
repository.

Package |
------- |
[`@zendesk/garden-css-arrows`](/packages/arrows) |
[`@zendesk/garden-css-avatars`](/packages/avatars) |
[`@zendesk/garden-css-bedrock`](/packages/bedrock) |
[`@zendesk/garden-css-buttons`](/packages/buttons) |
[`@zendesk/garden-css-callouts`](/packages/callouts) |
[`@zendesk/garden-css-chrome`](/packages/chrome) |
[`@zendesk/garden-css-forms`](/packages/forms) |
[`@zendesk/garden-css-menus`](/packages/menus) |
[`@zendesk/garden-css-modals`](/packages/modals) |
[`@zendesk/garden-css-pagination`](/packages/pagination) |
[`@zendesk/garden-css-tables`](/packages/tables) |
[`@zendesk/garden-css-tabs`](/packages/tabs) |
[`@zendesk/garden-css-tags`](/packages/tags) |
[`@zendesk/garden-css-tooltips`](/packages/tooltips) |
[`@zendesk/garden-css-utilities`](/packages/utilities) |
[`@zendesk/garden-css-variables`](/packages/variables) |

Component CSS may be used in isolation or together with a variety of web
application frameworks. However, many projects will benefit from the
added behavioral functionality provided by [Garden React
Components](https://github.com/zendeskgarden/react-components).

## Installation

Before you start, be sure [yarn](https://yarnpkg.com/en/) is installed
on your system.

Simply execute `yarn` under a clone of this repository in order to
install Garden CSS components for development. A git `post-checkout` and
`post-merge` hook will automatically `yarn` in order to keep your
development environment up to date as you checkout and merge between
branches.

See [package registry
documentation](https://github.com/zendeskgarden/LANDSCAPE/wiki/Package-Registry)
for the configuration needed to install `@zendesk`-scoped packages as
dependencies in your own program.

## Usage

After CSS components have been installed, the following commands are
available:

- `yarn start` to launch component demo server with live reload –
  package source files will be watched for changes.
- `yarn test` to run tests across all component packages. Note this is
  run as a git `pre-push` hook for all packages that have changed since
  the last release.
- `yarn lint` to enforce consistent CSS and JavaScript code conventions
  across all component packages. Note this is run as a git `pre-commit`
  hook.
- `yarn format` to enforce code style with opinionated formats (i.e.
  package.json) across all component packages. Note this is run as a git
  `pre-commit` hook.
- `yarn build` to rebuild distributions across all packages. The build
  runs as part of the initial install.
- `yarn new <component>` to generate a new CSS `component` based on a
  package template. The new component demo page is launched upon
  completion.

## Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](/.github/CONTRIBUTING.md) documentation for details
needed to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](/.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## License

Copyright 2018 Zendesk

Licensed under the [Apache License, Version 2.0](/.github/LICENSE.md)
