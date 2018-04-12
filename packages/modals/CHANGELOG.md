# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.0"></a>
# 5.0.0 (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="4.1.2"></a>
## [4.1.2](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-modals@4.1.1...@zendesk/garden-css-modals@4.1.2) (2018-03-07)


### Bug Fixes

* **modals:** correct Modal placement in Firefox ([#38](https://github.com/zendeskgarden/css-components/issues/38)) ([4914d7a](https://github.com/zendeskgarden/css-components/commit/4914d7a))




<a name="4.1.1"></a>
## [4.1.1](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-modals@4.1.0...@zendesk/garden-css-modals@4.1.1) (2018-02-13)


### Bug Fixes

* **modals:** use `transform-origin` center default on dialog open animation ([#26](https://github.com/zendeskgarden/css-components/issues/26)) ([b05a3d2](https://github.com/zendeskgarden/css-components/commit/b05a3d2))




<a name="4.1.0"></a>
# 4.1.0 (2018-02-01)


### Features

* add css-modals package to monorepo ([#15](https://github.com/zendeskgarden/css-components/issues/15)) ([a8df05d](https://github.com/zendeskgarden/css-components/commit/a8df05d))




## [4.0.1] - 2017-11-01
### Fixed (per [#19](https://github.com/zendeskgarden/css-modals/pull/19))
- Centered repositioning animation glitch (Firefox).
- Centered modal positioning (IE11).

## [4.0.0] - 2017-09-28
### Added
- `.c-dialog--large` modifier.
- `.l-backdrop--center` modifier.
- `.l-backdrop.is-rtl` for RTL layout.

### Updated
- Layout using flex.
- Default backdrop is black at 65% opacity.
- Default dialog width (544px; large is 800px).
- Slight padding and shadow modifications.

### Removed (per [#16](https://github.com/zendeskgarden/css-modals/pull/16))
- `.l-backdrop--lightbox` and `.l-backdrop--transparent`.
- `.c-dialog--center` (use `.l-backdrop--center` to align contained
dialog).

## [3.0.1] - 2017-07-28
### Fixed (per [#14](https://github.com/zendeskgarden/css-modals/pull/14))
- `.c-dialog__close` background-image transition (Safari).

## [3.0.0] - 2017-06-15
### Updated (per [#12](https://github.com/zendeskgarden/css-modals/pull/12))
- Prepared package for registry publish as `@zendesk/garden-css-modals`.
See README for updated installation.

## [2.2.0] - 2017-03-29
### Changed
- [#6](https://github.com/zendeskgarden/css-modals/issues/6) Remove
padding from `.c-dialog` container and apply to child elements
instead.
- [#7](https://github.com/zendeskgarden/css-modals/pull/7) Fixed
`.c-dialog--center` to handle content that exceeds the height of the
current viewport.

## [2.1.0] - 2016-11-02
### Added
- [#9](https://github.com/zendeskgarden/css-modals/pull/9) Support for
Electroid "dark" mode via `.c-dialog--dark`.

### Removed
- [#8](https://github.com/zendeskgarden/css-modals/pull/8) References to
`14-remove` SVG in README.

## [2.0.0] - 2016-09-15
### Added
- `.c-dialog__close.is-focused` to handle keyboard focus.
- `.c-dialog.is-rtl` to support RTL layouts.
- `.c-dialog.is-open` to "pop" animate a modal on display.
- `.l-background.is-visible` to animate background fade-in.

### Changed (per [#4](https://github.com/zendeskgarden/css-modals/pull/4))
- Updated with Electroid styling specifications.
- Incorporate SVG "X" into `.c-dialog__close` CSS.

## [0.1.1] - 2016-02-20
### Changed (per [#2](https://github.com/zendeskgarden/css-modals/pull/2))
- Display `.c-dialog` inline block.
- Set `.c-dialog__close` background transparent.

## 0.1.0 - 2016-02-03

[4.0.1]: https://github.com/zendeskgarden/css-modals/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/zendeskgarden/css-modals/compare/v3.0.1...v4.0.0
[3.0.1]: https://github.com/zendeskgarden/css-modals/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/zendeskgarden/css-modals/compare/2.2.0...v3.0.0
[2.2.0]: https://github.com/zendeskgarden/css-modals/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/zendeskgarden/css-modals/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/zendeskgarden/css-modals/compare/0.1.1...2.0.0
[0.1.1]: https://github.com/zendeskgarden/css-modals/compare/0.1.0...0.1.1
