# Garden CSS Components [![Build Status](https://travis-ci.com/zendeskgarden/css-components.svg?token=dDt9s6smCMgz269xNbpz&branch=master)](https://travis-ci.com/zendeskgarden/css-components)

Garden is a [design
system](https://www.designbetter.co/design-systems-handbook) for
Zendesk. Garden CSS provides consistent styling for Garden components.
Component CSS is maintained following a monorepo approach where
components are packaged and published individually but combined under
this single repository.

Component CSS may be used in isolation or together with a variety of web
application frameworks. However, many projects will benefit from the
added functionality provided by [Garden React
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
for the configuration needed to install `@zendeskgarden`-scoped
packages as dependencies in your own program.

## Usage

After CSS components have been installed, the following commands are
available:

- `yarn start` to launch component demo server with live reload –
  package source files will be watched for changes.
- `yarn test` to run tests across all component packages. Note this is
  run as a git `pre-push` hook for all packages that have changed since
  the last release.
- `yarn format` to enforce code style with opinionated formats (i.e.
  package.json) across all component packages. Note this is run as a git
  `pre-commit` hook.
- `yarn build` to rebuild distributions across all packages. The build
  runs as part of the initial install.
- `yarn new <component>` to generate a new CSS `component` based on a
  package template. The new component demo page is launched upon
  completion.
