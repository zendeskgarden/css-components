# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="5.0.2"></a>
## [5.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.1...@zendeskgarden/css-buttons@5.0.2) (2018-04-24)


### Bug Fixes

* remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))




<a name="5.0.1"></a>
## [5.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.0...@zendeskgarden/css-buttons@5.0.1) (2018-04-15)


### Bug Fixes

* document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))




<a name="5.0.0"></a>
# [5.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@3.7.0...@zendeskgarden/css-buttons@5.0.0) (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="4.1.1"></a>
## [4.1.1](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-buttons@4.1.0...@zendesk/garden-css-buttons@4.1.1) (2018-03-08)


### Bug Fixes

* **buttons:** basic hover styling ([#40](https://github.com/zendeskgarden/css-components/issues/40)) ([b38a8d3](https://github.com/zendeskgarden/css-components/commit/b38a8d3))




<a name="4.1.0"></a>
# [4.1.0](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-buttons@4.0.0...@zendesk/garden-css-buttons@4.1.0) (2018-02-28)


### Features

* Add muted button type ([#31](https://github.com/zendeskgarden/css-components/issues/31)) ([ffca432](https://github.com/zendeskgarden/css-components/commit/ffca432))




<a name="4.0.0"></a>
# 4.0.0 (2018-02-22)


### Features

* add css-buttons package to monorepo ([#3](https://github.com/zendeskgarden/css-components/issues/3)) ([239d9a3](https://github.com/zendeskgarden/css-components/commit/239d9a3))
* **buttons:** update default size ([#30](https://github.com/zendeskgarden/css-components/issues/30)) ([52fa695](https://github.com/zendeskgarden/css-components/commit/52fa695))


### BREAKING CHANGES

* **buttons:** the default `.c-btn` now renders the previous `.c-btn--medium` size.

The following table describes the CSS class mapping needed upon upgrade. Modifiers were renamed for consistency with other Garden components (menus, tables, form elements):

BEFORE | AFTER
-------- | -------
`.c-btn` | `.c-btn.c-btn--sm`
`.c-btn.c-btn--medium` | `.c-btn`
`.c-btn.c-btn--large` | `.c-btn.c-btn--lg`




<a name="3.7.0"></a>
# 3.7.0 (2017-12-21)


### Features

* add css-buttons package to monorepo ([#3](https://github.com/zendeskgarden/css-components/issues/3)) ([239d9a3](https://github.com/zendeskgarden/css-components/commit/239d9a3))




## [3.6.1] - 2017-12-06
### Fixed (per [#30](https://github.com/zendeskgarden/css-buttons/pull/30))
- Remove poor border display from a disabled + primary grouped button.

## [3.6.0] - 2017-12-06
### Changed (per [#29](https://github.com/zendeskgarden/css-buttons/pull/29))
- Update with base-4 sizing.

## [3.5.0] - 2017-11-14
### Added (per [#21](https://github.com/zendeskgarden/css-buttons/pull/21))
- Custom hover background saturation override variable.

### Changed (per [#27](https://github.com/zendeskgarden/css-buttons/pull/27))
- Update `.c-btn--anchor` to underline on hover.

### Fixed (per [#28](https://github.com/zendeskgarden/css-buttons/pull/28))
- Prevent `.l-btn-group` wrap.

## [3.4.0] - 2017-10-11
### Added (per [#26](https://github.com/zendeskgarden/css-buttons/pull/26))
- Improve readability of disabled text

## [3.3.1] - 2017-09-28
### Added (per [#24](https://github.com/zendeskgarden/css-buttons/pull/23))
- Correct basic button styling when used with danger modifier

## [3.3.0] - 2017-09-28
### Added (per [#23](https://github.com/zendeskgarden/css-buttons/pull/23))
- Added danger styling `.c-btn--danger`

## [3.2.0] - 2017-09-19
### Added (per [#20](https://github.com/zendeskgarden/css-buttons/pull/20))
- Modification for `.c-btn--anchor` styling.

## [3.1.0] - 2017-09-14
### Added (per [#19](https://github.com/zendeskgarden/css-buttons/pull/19))
- Include complementary `.c-btn--custom` CSS demonstrating how to apply
a primary color change.

## [3.0.0] - 2017-06-01
### Changed (per [#17](https://github.com/zendeskgarden/css-buttons/pull/17))
- Prepared package for registry publish as
`@zendesk/garden-css-buttons`. See README for updated installation.

## [2.2.0] - 2017-04-11
### Added (per [#15](https://github.com/zendeskgarden/css-buttons/pull/15))
- Support for `.c-btn--icon`.
- The `.is-selected` class to determine selection within `.l-btn-group`.
- Ability to combine `.c-btn--pill` elements within a `.l-btn-group`.

### Fixed
- Improved `.l-btn-group` state border and box shadow styling.

## [2.1.2] - 2017-01-19
### Changed (per [#14](https://github.com/zendeskgarden/css-buttons/pull/14))
- Custom selectors to prevent source import naming collisions.

### Removed
- Accent button example.

## [2.1.1] - 2016-11-11
### Fixed (per [#11](https://github.com/zendeskgarden/css-buttons/issues/11))
- Transparent background for `.c-btn`.

## [2.1.0] - 2016-10-27
### Added (per [#10](https://github.com/zendeskgarden/css-buttons/pull/10))
- Support for Electroid "dark" mode.

## [2.0.0] - 2016-09-09
### Changed (per [#8](https://github.com/zendeskgarden/css-buttons/pull/8))
- Electroid styling.

## [1.1.0] - 2016-06-21
### Changed (per [#7](https://github.com/zendeskgarden/css-buttons/pull/7))
- Focus state applied via `.c-btn.is-focused` (vs. `.c-btn:focus`).

## [1.0.1] - 2016-06-14
### Fixed (per [#6](https://github.com/zendeskgarden/css-buttons/pull/6))
- Disabled state specificity.

## [1.0.0] - 2016-06-06
### Removed (per [#5](https://github.com/zendeskgarden/css-buttons/pull/5))
- `.c-btn--promo`.

## [0.3.0] - 2016-05-24
### Added (per [#1](https://github.com/zendeskgarden/css-buttons/pull/1))
- Focus styling.
- Modifications for `.c-btn--pill`, `.c-btn--medium`, `.c-btn--large`,
and `.c-btn--full`.
- `.l-btn-group` to support button groups.

### Fixed (per [#4](https://github.com/zendeskgarden/css-buttons/issues/4))
- Button background colors.

## [0.2.0] - 2016-02-22
### Added
- [#2](https://github.com/zendeskgarden/css-buttons/pull/2)
`.c-btn--basic`.

## 0.1.0 - 2016-01-05

[3.6.1]: https://github.com/zendeskgarden/css-buttons/compare/v3.6.0...v3.6.1
[3.6.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.5.0...v3.6.0
[3.5.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.4.0...v3.5.0
[3.4.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.3.1...v3.4.0
[3.3.1]: https://github.com/zendeskgarden/css-buttons/compare/v3.3.0...v3.3.1
[3.3.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/zendeskgarden/css-buttons/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/zendeskgarden/css-buttons/compare/2.2.0...v3.0.0
[2.2.0]: https://github.com/zendeskgarden/css-buttons/compare/2.1.2...2.2.0
[2.1.2]: https://github.com/zendeskgarden/css-buttons/compare/2.1.1...2.1.2
[2.1.1]: https://github.com/zendeskgarden/css-buttons/compare/2.1.0...2.1.1
[2.1.0]: https://github.com/zendeskgarden/css-buttons/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/zendeskgarden/css-buttons/compare/1.0.1...2.0.0
[1.1.0]: https://github.com/zendeskgarden/css-buttons/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/zendeskgarden/css-buttons/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/zendeskgarden/css-buttons/compare/0.3.0...1.0.0
[0.3.0]: https://github.com/zendeskgarden/css-buttons/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/zendeskgarden/css-buttons/compare/0.1.0...0.2.0
