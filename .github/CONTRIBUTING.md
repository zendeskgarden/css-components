# Contributing to Garden

Keen to contribute to Garden? We're stoked to have you join us. You may
find that opening an
[issue](https://github.com/zendeskgarden/css-components/issues) is the
best way to get a conversation started. When you're ready to submit a
pull request, follow the [steps](#pull-request-workflow) below. We
follow a [code of conduct](CODE_OF_CONDUCT.md) as our guide for
community behavior.

This is a multi-package repo which uses [Lerna](https://lernajs.io/) to
manage shared and cross-package dependencies. The basic repo layout
includes:

* `├── package.json` – the top-level "project" package that contains
  the dependencies and scripts needed to manage the multi-package repo.
  _This package will never be published to the registry._
* `├── packages/` – the folder that contains individual `@zendeskgarden`
  packages which are published to the registry.<br>
  `│   ├── .template/` – a special template package referenced by `yarn new`
  to generate a component.<br>
  `│   ├── buttons/`<br>
  `│   ├── tabs/`<br>
  `│   └── etc.`
* `└── demo/` – HTML pages used to test and demonstrate CSS component
  styling.

Garden CSS selectors use a form of BEM (Block Element Modifier) naming.
The naming convention follows a pattern:

```css
.block {}
.block__element {}
.block--modifier {}
```

* `.block` represents a high-level component.
* `.block__element` represents a descendant element of the `.block`.
* `.block--modifier` represents a style variation of `.block`.

In addition, Garden CSS incorporates namespace prefixes to encourage
self-documenting transparency. For example:

```css
.c-btn--pill /* a pill-styled button Component */
.u-jitterfix /* the jitterfix Utility */
.is-active /* a stateful namespace to indicate transient styling */
```

Check out the
[Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
post for more detail on these conventions.

## Versioning Workflow

Garden follows [semantic versioning](https://semver.org/). We release
patch versions for bugfixes, minor versions for new features, and major
versions for any breaking changes.

The [pull request workflow](#pull-request-workflow) along with the [PR
template](PULL_REQUEST_TEMPLATE.md) will help us determine how to
version your contributions.

All changes are recorded in applicable package CHANGELOG files.

## Development Workflow

Before you start, be sure [yarn](https://yarnpkg.com/en/) is installed
on your system. After you clone this repo, run `yarn` to install
dependencies needed for development. A git `post-checkout` and
`post-merge` hook will automatically `yarn` in order to keep your
development environment up to date as you checkout and merge between
branches. After installation, the following commands are available:

- `yarn start` to launch component demo server with live reload –
  package source files will be watched for changes.
- `yarn test`<sup>*</sup> to run tests across all component packages.
  Note this is run as a git `pre-push` hook for all packages that have
  changed since the last release.
- `yarn lint`<sup>*</sup> to enforce consistent CSS and JavaScript code
  conventions across all component packages. Note this is run as a git
  `pre-commit` hook.
- `yarn format`<sup>*</sup> to enforce code style with opinionated
  formats (i.e.  package.json) across all component packages. Note this
  is run as a git `pre-commit` hook.
- `yarn build`<sup>*</sup> to rebuild distributions across all packages.
  The build runs as part of the initial install.
- `yarn new <component>` to generate a new CSS `component` based on a
  package template. The new component demo page is launched upon
  completion.

<sup>*</sup> Operates as a facade over a Lerna command; operation may be
modified using option [flags](https://github.com/lerna/lerna#flags)
(i.e.  `scope`, `since`, or `ignore`).

## Pull Request Workflow

1. Fork the repo and create a branch. Format your branch name as
   `username/verb-noun`.
1. If you haven't yet, get comfortable with the [development
   environment](#development-workflow).
1. Regularly `git commit` locally and `git push` to the remote branch.
   Use whatever casual commit messaging you find suitable. We'll help
   you apply an appropriate squashed [conventional
   commit](https://conventionalcommits.org/) message when it's time to
   merge to master.
1. If your changes result in a major modification, be sure all
   documentation is up-to-date.
1. When your branch is ready, open a new pull request via GitHub.
   The repo [PR template](PULL_REQUEST_TEMPLATE.md) will guide you
   toward describing your contribution in a format that is ultimately
   suitable for a structured conventional commit (used to automatically
   advance published package versions).
1. Every PR must pass CI checks and receive at least one :+1: to be
   considered for merge.
1. Garden
   [maintainers](https://github.com/orgs/zendeskgarden/teams/maintainers)
   will manage the squashed merge to master, using your PR title and
   description as the scope, description, and body for a conventional
   commit.

## License

By contributing to Garden, you agree that your contributions will be
licensed under the [Apache License, Version 2.0](../LICENSE.md).
