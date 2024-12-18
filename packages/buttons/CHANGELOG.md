# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@8.0.4...@zendeskgarden/css-buttons@9.0.0) (2024-10-16)


* feat(buttons)!: update to corespond with `react-components` v9 (#515) ([6ac0e5b](https://github.com/zendeskgarden/css-components/commit/6ac0e5b01b3d193f23d554cd499672ff86dd629b)), closes [#515](https://github.com/zendeskgarden/css-components/issues/515)


### BREAKING CHANGES

* includes the following...
- removed `c-btn--anchor` variant due to complex styling overrides. Garden will re-introduce a `css-anchors` package with dedicated `c-anchor` styling classes.
- styling now based on tailwindcss rather than `css-variables`
- all `is-*` state styling removed in favor of simplified native `:hover`, `:focus-visible`, `:active`, and `:disabled`

Additionally, adds `c-btn--dark` styling variant.





## [8.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@8.0.3...@zendeskgarden/css-buttons@8.0.4) (2024-10-02)

**Note:** Version bump only for package @zendeskgarden/css-buttons





## [8.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@8.0.2...@zendeskgarden/css-buttons@8.0.3) (2023-07-20)

**Note:** Version bump only for package @zendeskgarden/css-buttons





## [8.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@8.0.1...@zendeskgarden/css-buttons@8.0.2) (2022-10-21)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [8.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@8.0.0...@zendeskgarden/css-buttons@8.0.1) (2021-04-27)

**Note:** Version bump only for package @zendeskgarden/css-buttons

# [8.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.19...@zendeskgarden/css-buttons@8.0.0) (2020-05-11)

- feat!: updated button styling (#286) ([de554a5](https://github.com/zendeskgarden/css-components/commit/de554a500f9780ed5c229c6b468cce3cfd4be47d)), closes [#286](https://github.com/zendeskgarden/css-components/issues/286)

### BREAKING CHANGES

- - removal of `.c-btn--muted`; use `.c-btn--icon.c-btn--basic` instead

* removal of `.l-btn-group`; use react-components [`<ButtonGroup>`](https://garden.zendesk.com/react-components/buttons/#buttongroup) or [`<SplitButton>`](https://garden.zendesk.com/react-components/buttons/#splitbutton) for required accessibility logic
* removal of `custom.css`; Garden css-components will no longer bundle custom color demos – use react-components and [Theming](https://garden.zendesk.com/react-components/theming/) when custom styling is needed

Features/improvements include:

- added support for [`:focus-visible` polyfill](https://github.com/WICG/focus-visible); demonstrated in the example page
- applied [react-components API](https://github.com/zendeskgarden/react-components/blob/master/docs/api.md#view-components) property ordering best-practice for simplified specificity and drastically reduced size.

## [7.0.19](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.18...@zendeskgarden/css-buttons@7.0.19) (2020-03-18)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.18](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.17...@zendeskgarden/css-buttons@7.0.18) (2020-03-06)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.17](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.16...@zendeskgarden/css-buttons@7.0.17) (2019-12-02)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.16](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.15...@zendeskgarden/css-buttons@7.0.16) (2019-11-07)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.15](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.14...@zendeskgarden/css-buttons@7.0.15) (2019-10-24)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.14](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.13...@zendeskgarden/css-buttons@7.0.14) (2019-10-03)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.13](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.12...@zendeskgarden/css-buttons@7.0.13) (2019-09-23)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.12](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.11...@zendeskgarden/css-buttons@7.0.12) (2019-08-23)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.11](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.10...@zendeskgarden/css-buttons@7.0.11) (2019-07-16)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.10](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.9...@zendeskgarden/css-buttons@7.0.10) (2019-06-10)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.9](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.8...@zendeskgarden/css-buttons@7.0.9) (2019-05-31)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.8](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.7...@zendeskgarden/css-buttons@7.0.8) (2019-05-06)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.7](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.6...@zendeskgarden/css-buttons@7.0.7) (2019-04-26)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.6](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.5...@zendeskgarden/css-buttons@7.0.6) (2019-04-16)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.5](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.4...@zendeskgarden/css-buttons@7.0.5) (2019-04-10)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.3...@zendeskgarden/css-buttons@7.0.4) (2019-02-28)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.2...@zendeskgarden/css-buttons@7.0.3) (2019-02-27)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.1...@zendeskgarden/css-buttons@7.0.2) (2019-02-08)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [7.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@7.0.0...@zendeskgarden/css-buttons@7.0.1) (2019-01-25)

**Note:** Version bump only for package @zendeskgarden/css-buttons

# [7.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.3.0...@zendeskgarden/css-buttons@7.0.0) (2019-01-22)

### chore

- remove deprecated colors and font sizes ([#169](https://github.com/zendeskgarden/css-components/issues/169)) ([666e510](https://github.com/zendeskgarden/css-components/commit/666e510))

### BREAKING CHANGES

- remove long-deprecated color names and font sizes from `css-variables` and `css-utilities`.

# [6.3.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.2.1...@zendeskgarden/css-buttons@6.3.0) (2019-01-16)

### Features

- **buttons|forms:** add `--focus-inset` styling variant ([#165](https://github.com/zendeskgarden/css-components/issues/165)) ([12afce8](https://github.com/zendeskgarden/css-components/commit/12afce8))

## [6.2.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.2.0...@zendeskgarden/css-buttons@6.2.1) (2019-01-09)

**Note:** Version bump only for package @zendeskgarden/css-buttons

# [6.2.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.7...@zendeskgarden/css-buttons@6.2.0) (2018-12-18)

### Features

- update SVG icons ([#159](https://github.com/zendeskgarden/css-components/issues/159)) ([67fd074](https://github.com/zendeskgarden/css-components/commit/67fd074))

## [6.1.7](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.6...@zendeskgarden/css-buttons@6.1.7) (2018-12-17)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [6.1.6](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.5...@zendeskgarden/css-buttons@6.1.6) (2018-12-06)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [6.1.5](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.4...@zendeskgarden/css-buttons@6.1.5) (2018-11-30)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [6.1.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.3...@zendeskgarden/css-buttons@6.1.4) (2018-11-13)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [6.1.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.2...@zendeskgarden/css-buttons@6.1.3) (2018-10-25)

**Note:** Version bump only for package @zendeskgarden/css-buttons

## [6.1.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.1...@zendeskgarden/css-buttons@6.1.2) (2018-10-16)

### Bug Fixes

- **buttons|modals:** prevent modal footer item overflow ([#129](https://github.com/zendeskgarden/css-components/issues/129)) ([204e4f9](https://github.com/zendeskgarden/css-components/commit/204e4f9))

## [6.1.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.1.0...@zendeskgarden/css-buttons@6.1.1) (2018-10-08)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.1.0"></a>

# [6.1.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.7...@zendeskgarden/css-buttons@6.1.0) (2018-09-07)

### Features

- **variables|utilities:** add support for updated typography ([#109](https://github.com/zendeskgarden/css-components/issues/109)) ([248b14a](https://github.com/zendeskgarden/css-components/commit/248b14a))

<a name="6.0.7"></a>

## [6.0.7](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.6...@zendeskgarden/css-buttons@6.0.7) (2018-08-21)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.6"></a>

## [6.0.6](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.5...@zendeskgarden/css-buttons@6.0.6) (2018-08-13)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.5"></a>

## [6.0.5](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.4...@zendeskgarden/css-buttons@6.0.5) (2018-08-07)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.4"></a>

## [6.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.3...@zendeskgarden/css-buttons@6.0.4) (2018-08-07)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.3"></a>

## [6.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.2...@zendeskgarden/css-buttons@6.0.3) (2018-07-26)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.2"></a>

## [6.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.1...@zendeskgarden/css-buttons@6.0.2) (2018-07-02)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.1"></a>

## [6.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@6.0.0...@zendeskgarden/css-buttons@6.0.1) (2018-05-25)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="6.0.0"></a>

# [6.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.3...@zendeskgarden/css-buttons@6.0.0) (2018-04-30)

### Features

- update component colors to meet minimum AA compliance with WCAG 2.0 ([#55](https://github.com/zendeskgarden/css-components/issues/55)) ([bd78ef1](https://github.com/zendeskgarden/css-components/commit/bd78ef1))

### BREAKING CHANGES

- along with sweeping color updates and the removal of "dark mode" styling, note the following breaking changes:

- Avatars – removed `.is-active` and `.is-in` states. Renamed `.is-out` to `.is-disabled` for consistency with other components.
- Tags – remove `.c-tag--light`, `.c-tag--dark`, `.c-tag--error`, `.c-tag--success`, and `.c-tag--warning`. Replaced by `.c-tag--[color]` modifiers.

Added support for:

- `.c-tooltip.is-rtl`
- `.c-tooltip__title`
- `.c-tooltip__paragraph`

<a name="5.0.3"></a>

## [5.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.2...@zendeskgarden/css-buttons@5.0.3) (2018-04-30)

**Note:** Version bump only for package @zendeskgarden/css-buttons

<a name="5.0.2"></a>

## [5.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.1...@zendeskgarden/css-buttons@5.0.2) (2018-04-24)

### Bug Fixes

- remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@5.0.0...@zendeskgarden/css-buttons@5.0.1) (2018-04-15)

### Bug Fixes

- document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))

<a name="5.0.0"></a>

# [5.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-buttons@3.7.0...@zendeskgarden/css-buttons@5.0.0) (2018-04-12)

### Features

- prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))

### BREAKING CHANGES

- package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.

<a name="4.1.1"></a>

## [4.1.1](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-buttons@4.1.0...@zendesk/garden-css-buttons@4.1.1) (2018-03-08)

### Bug Fixes

- **buttons:** basic hover styling ([#40](https://github.com/zendeskgarden/css-components/issues/40)) ([b38a8d3](https://github.com/zendeskgarden/css-components/commit/b38a8d3))

<a name="4.1.0"></a>

# [4.1.0](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-buttons@4.0.0...@zendesk/garden-css-buttons@4.1.0) (2018-02-28)

### Features

- Add muted button type ([#31](https://github.com/zendeskgarden/css-components/issues/31)) ([ffca432](https://github.com/zendeskgarden/css-components/commit/ffca432))

<a name="4.0.0"></a>

# 4.0.0 (2018-02-22)

### Features

- add css-buttons package to monorepo ([#3](https://github.com/zendeskgarden/css-components/issues/3)) ([239d9a3](https://github.com/zendeskgarden/css-components/commit/239d9a3))
- **buttons:** update default size ([#30](https://github.com/zendeskgarden/css-components/issues/30)) ([52fa695](https://github.com/zendeskgarden/css-components/commit/52fa695))

### BREAKING CHANGES

- **buttons:** the default `.c-btn` now renders the previous `.c-btn--medium` size.

The following table describes the CSS class mapping needed upon upgrade. Modifiers were renamed for consistency with other Garden components (menus, tables, form elements):

| BEFORE                 | AFTER              |
| ---------------------- | ------------------ |
| `.c-btn`               | `.c-btn.c-btn--sm` |
| `.c-btn.c-btn--medium` | `.c-btn`           |
| `.c-btn.c-btn--large`  | `.c-btn.c-btn--lg` |

<a name="3.7.0"></a>

# 3.7.0 (2017-12-21)

### Features

- add css-buttons package to monorepo ([#3](https://github.com/zendeskgarden/css-components/issues/3)) ([239d9a3](https://github.com/zendeskgarden/css-components/commit/239d9a3))

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
