# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.8"></a>
## [4.0.8](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.7...@zendeskgarden/css-tooltips@4.0.8) (2018-08-21)

**Note:** Version bump only for package @zendeskgarden/css-tooltips





<a name="4.0.7"></a>
## [4.0.7](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.6...@zendeskgarden/css-tooltips@4.0.7) (2018-08-13)

**Note:** Version bump only for package @zendeskgarden/css-tooltips





<a name="4.0.6"></a>
## [4.0.6](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.5...@zendeskgarden/css-tooltips@4.0.6) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="4.0.5"></a>
## [4.0.5](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.4...@zendeskgarden/css-tooltips@4.0.5) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="4.0.4"></a>
## [4.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.3...@zendeskgarden/css-tooltips@4.0.4) (2018-07-26)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="4.0.3"></a>
## [4.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.2...@zendeskgarden/css-tooltips@4.0.3) (2018-07-02)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="4.0.2"></a>
## [4.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.1...@zendeskgarden/css-tooltips@4.0.2) (2018-05-25)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="4.0.1"></a>
## [4.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@4.0.0...@zendeskgarden/css-tooltips@4.0.1) (2018-05-25)


### Bug Fixes

* **menus, tooltips:** add `css-arrows` peer dependency ([#69](https://github.com/zendeskgarden/css-components/issues/69)) ([1ab5f5e](https://github.com/zendeskgarden/css-components/commit/1ab5f5e))




<a name="4.0.0"></a>
# [4.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@3.0.3...@zendeskgarden/css-tooltips@4.0.0) (2018-04-30)


### Features

* update component colors to meet minimum AA compliance with WCAG 2.0 ([#55](https://github.com/zendeskgarden/css-components/issues/55)) ([bd78ef1](https://github.com/zendeskgarden/css-components/commit/bd78ef1))


### BREAKING CHANGES

* along with sweeping color updates and the removal of "dark mode" styling, note the following breaking changes:

* Avatars – removed `.is-active` and `.is-in` states. Renamed `.is-out` to `.is-disabled` for consistency with other components.
* Tags – remove `.c-tag--light`, `.c-tag--dark`, `.c-tag--error`, `.c-tag--success`, and `.c-tag--warning`. Replaced by `.c-tag--[color]` modifiers.

Added support for:

* `.c-tooltip.is-rtl`
* `.c-tooltip__title`
* `.c-tooltip__paragraph`




<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@3.0.2...@zendeskgarden/css-tooltips@3.0.3) (2018-04-30)




**Note:** Version bump only for package @zendeskgarden/css-tooltips

<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@3.0.1...@zendeskgarden/css-tooltips@3.0.2) (2018-04-24)


### Bug Fixes

* remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tooltips@3.0.0...@zendeskgarden/css-tooltips@3.0.1) (2018-04-15)


### Bug Fixes

* document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))




<a name="3.0.0"></a>
# 3.0.0 (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="2.1.0"></a>
# 2.1.0 (2018-02-03)


### Features

* add css-tooltips package to monorepo ([#18](https://github.com/zendeskgarden/css-components/issues/18)) ([232029b](https://github.com/zendeskgarden/css-components/commit/232029b))




## [2.0.2] - 2017-09-28
### Updated (per [#9](https://github.com/zendeskgarden/css-tooltips/pull/9))
- Improve spacing for default and medium tooltips.
- Light/dark inverse for tooltips in dark mode.

## [2.0.1] - 2017-06-30
### Fixed (per [#8](https://github.com/zendeskgarden/css-tooltips/pull/8))
- Improved word-break on overflow for medium, large, and extra-large
tooltips.

## [2.0.0] - 2017-06-16
### Changed (per [#7](https://github.com/zendeskgarden/css-tooltips/pull/7))
- Prepared package for registry publish as `@zendesk/garden-css-tooltips`.
See README for updated installation.

## [1.1.1] - 2017-03-30
### Changed
- [#4](https://github.com/zendeskgarden/css-tooltips/issues/4) Prevent
text wrapping on base `.c-tooltip`.
- [#6](https://github.com/zendeskgarden/css-tooltips/pull/6) Fixed to
handle word-break on medium, large, and extra-large tooltips.

## [1.1.0] - 2016-11-15
### Added
- [#3](https://github.com/zendeskgarden/css-tooltips/pull/3) Support for
"dark" mode via `.c-tooltip--dark`.

## [1.0.0] - 2016-10-06
### Changed
- [#2](https://github.com/zendeskgarden/css-tooltips/pull/2) Updated
with Electroid design styling.

## 0.1.0 - 2016-08-17

[2.0.2]: https://github.com/zendeskgarden/css-tooltips/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/zendeskgarden/css-tooltips/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/zendeskgarden/css-tooltips/compare/1.1.1...v2.0.0
[1.1.1]: https://github.com/zendeskgarden/css-tooltips/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/zendeskgarden/css-tooltips/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/zendeskgarden/css-tooltips/compare/0.1.0...1.0.0
