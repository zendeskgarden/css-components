# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.4"></a>
## [3.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@3.0.3...@zendeskgarden/css-callouts@3.0.4) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/css-callouts

<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@3.0.2...@zendeskgarden/css-callouts@3.0.3) (2018-07-26)




**Note:** Version bump only for package @zendeskgarden/css-callouts

<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@3.0.1...@zendeskgarden/css-callouts@3.0.2) (2018-07-02)


### Features

* **variables, utilities:** update with base-4 spacing ([#75](https://github.com/zendeskgarden/css-components/issues/75)) ([fc32093](https://github.com/zendeskgarden/css-components/commit/fc32093))


### BREAKING CHANGES

* **variables, utilities:** several spacing variables updated with base-4 (vs. previous base-10) pixel units.

| BEFORE | AFTER |
| -------- | ------- |
| `--zd-spacing-xxs: 2px` | `--zd-spacing--xxs: 4px` |
| `--zd-spacing--xs: 5px` | `--zd-spacing--xs: 8px` |
| `--zd-spacing--sm: 10px` | `--zd-spacing--sm: 12px` |
| `--zd-spacing: 20px` | `--zd-spacing: 20px` |
| `--zd-spacing--lg: 30px` | `--zd-spacing--lg: 32px` |
| `--zd-spacing--xl: 40px` | `--zd-spacing--xl: 40px` |
| NA | `--zd-spacing--xxl: 48px` |

All `.u-m[*]` and `.u-p[*]` spacing utilities are updated accordingly with additions for XXL.




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@3.0.0...@zendeskgarden/css-callouts@3.0.1) (2018-05-25)




**Note:** Version bump only for package @zendeskgarden/css-callouts

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@2.0.3...@zendeskgarden/css-callouts@3.0.0) (2018-04-30)


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




<a name="2.0.3"></a>
## [2.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@2.0.2...@zendeskgarden/css-callouts@2.0.3) (2018-04-30)




**Note:** Version bump only for package @zendeskgarden/css-callouts

<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@2.0.1...@zendeskgarden/css-callouts@2.0.2) (2018-04-24)


### Bug Fixes

* remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-callouts@2.0.0...@zendeskgarden/css-callouts@2.0.1) (2018-04-15)


### Bug Fixes

* document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))




<a name="2.0.0"></a>
# 2.0.0 (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="1.2.0"></a>
# 1.2.0 (2018-02-03)


### Features

* add css-callouts package to monorepo ([#19](https://github.com/zendeskgarden/css-components/issues/19)) ([724e402](https://github.com/zendeskgarden/css-components/commit/724e402))




## [1.1.1] - 2017-07-28
### Fixed (per [#3](https://github.com/zendeskgarden/css-callouts/pull/3))
- `.c-callout__close` background-image transition (Safari).

## [1.1.0] - 2017-07-24
### Added (per [#2](https://github.com/zendeskgarden/css-callouts/pull/2))
- `.c-callout--dialog` modification for popover style callouts.

## 1.0.0 - 2017-07-14

[1.1.1]: https://github.com/zendeskgarden/css-callouts/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/zendeskgarden/css-callouts/compare/v1.0.0...v1.1.0
