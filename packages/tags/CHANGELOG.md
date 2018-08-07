# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="4.0.6"></a>
## [4.0.6](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.5...@zendeskgarden/css-tags@4.0.6) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/css-tags

<a name="4.0.5"></a>
## [4.0.5](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.4...@zendeskgarden/css-tags@4.0.5) (2018-08-07)




**Note:** Version bump only for package @zendeskgarden/css-tags

<a name="4.0.4"></a>
## [4.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.3...@zendeskgarden/css-tags@4.0.4) (2018-07-26)




**Note:** Version bump only for package @zendeskgarden/css-tags

<a name="4.0.3"></a>
## [4.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.2...@zendeskgarden/css-tags@4.0.3) (2018-07-02)


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




<a name="4.0.2"></a>
## [4.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.1...@zendeskgarden/css-tags@4.0.2) (2018-05-25)




**Note:** Version bump only for package @zendeskgarden/css-tags

<a name="4.0.1"></a>
## [4.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@4.0.0...@zendeskgarden/css-tags@4.0.1) (2018-05-14)


### Bug Fixes

* **tags:** correct base-4 element margins and repair `remove` styling for color tags ([#61](https://github.com/zendeskgarden/css-components/issues/61)) ([0c369d6](https://github.com/zendeskgarden/css-components/commit/0c369d6))




<a name="4.0.0"></a>
# [4.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@3.0.3...@zendeskgarden/css-tags@4.0.0) (2018-04-30)


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
## [3.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@3.0.2...@zendeskgarden/css-tags@3.0.3) (2018-04-30)




**Note:** Version bump only for package @zendeskgarden/css-tags

<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@3.0.1...@zendeskgarden/css-tags@3.0.2) (2018-04-24)


### Bug Fixes

* remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))




<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-tags@3.0.0...@zendeskgarden/css-tags@3.0.1) (2018-04-15)


### Bug Fixes

* document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))




<a name="3.0.0"></a>
# 3.0.0 (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="2.0.0"></a>
# 2.0.0 (2018-02-03)


### Features

* add css-labels package to monorepo ([#20](https://github.com/zendeskgarden/css-components/issues/20)) ([a446d62](https://github.com/zendeskgarden/css-components/commit/a446d62))


### BREAKING CHANGES

* rename all `.c-label` (parent and child) classes to `.c-tag` for component clarity. **IMPORTANT**: the new package name changes from `@zendesk/garden-css-labels` to `@zendesk/garden-css-tags`.




## [1.1.0] - 2017-11-28
### Added (per [#10](https://github.com/zendeskgarden/css-labels/pull/10))
- Include complementary `.c-label--custom` CSS demonstrating how to
apply an accent color change.

## [1.0.2] - 2017-09-19
### Fixed (per [#8](https://github.com/zendeskgarden/css-labels/pull/8))
- Prevent child elements from impacting `.c-label--round` shape.

## [1.0.1] - 2017-08-14
### Fixed (per [#5](https://github.com/zendeskgarden/css-labels/pull/5))
- Prevent remove icon cut-off on small labels.
- Reconfigure layout to apply ellipsis for truncated content.

## [1.0.0] - 2017-06-15
### Changed (per [#3](https://github.com/zendeskgarden/css-labels/pull/3))
- Prepared package for registry publish as `@zendesk/garden-css-labels`.
See README for updated installation.

## [0.2.0] - 2017-03-14
### Added (per [#2](https://github.com/zendeskgarden/css-labels/pull/2))
- Support for `.c-label--light` and `.c-label--dark`.

## 0.1.0 - 2017-02-06

[1.1.0]: https://github.com/zendeskgarden/css-labels/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/zendeskgarden/css-labels/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/zendeskgarden/css-labels/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/zendeskgarden/css-labels/compare/0.2.0...v1.0.0
[0.2.0]: https://github.com/zendeskgarden/css-labels/compare/0.1.0...0.2.0
