# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

      <a name="5.1.0"></a>
# 5.1.0 (2018-01-11)


### Features

* add css-menus package to monorepo ([#10](https://github.com/zendeskgarden/css-components/issues/10)) ([6f48111](https://github.com/zendeskgarden/css-components/commit/6f48111))




      <a name="5.0.1"></a>
## [5.0.1] - 2017-11-14
### Fixed (per [#28](https://github.com/zendeskgarden/css-menus/pull/28))
- Prevent whitespace inheritance from controlling menu item.

## [5.0.0] - 2017-10-18
### Added (per [#27](https://github.com/zendeskgarden/css-menus/pull/27))
- `.c-menu__item.is-checked` state.
- `.c-menu__item--header` modification (with optional
`.c-menu__item--header__icon`).
- `.c-menu__item--next` and `.c-menu__item--previous` modifications for
navigating to sub-menu items.
- `.c-menu__item--add` modification to support add gestures from a menu.
- `.c-menu__item__meta` for the addition of menu item metadata.
- `.c-menu__item--media` modification to handle avatar-styled menu
items.
- Include complementary `.c-menu--custom` CSS demonstrating how to apply
an accent color change.

### Changed
- Increased padding to accommodate menu item icons.
- Ease opacity on `.is-hidden` to improve user feedback.

### Removed
- `.c-menu--large`; instead override `min-width` to increase default
menu size.

### Fixed
- Handle break for long word wrapping.

## [4.0.0] - 2017-07-28
### Added (per [#26](https://github.com/zendeskgarden/css-menus/pull/26))
- `.c-menu--sm` modifier for small menus (expected to combine with
[css-forms@3.0.0](https://github.com/zendeskgarden/css-forms/releases/tag/v3.0.0)
dropdowns).

### Changed
- Updated to use base-4 spacing.

## [3.0.0] - 2017-06-15
### Changed (per [#25](https://github.com/zendeskgarden/css-menus/pull/25))
- Prepared package for registry publish as `@zendesk/garden-css-menus`.
See README for updated installation.

## [2.3.1] - 2017-01-19
### Fixed (per [#24](https://github.com/zendeskgarden/css-menus/pull/24))
- Import collisions on `@custom-selector` names.

## [2.3.0] - 2016-11-02
### Added (per [#23](https://github.com/zendeskgarden/css-menus/pull/23))
- Support for `.c-menu--dark` mode.

## [2.2.1] - 2016-10-17
### Fixed (per [#22](https://github.com/zendeskgarden/css-menus/pull/22))
- Restore menu item box shadow on focus.

## [2.2.0] - 2016-10-07
### Added (per [#20](https://github.com/zendeskgarden/css-menus/pull/20))
- Support for menu arrow animations.
- Fixed browser animation glitches.

## [2.1.0] - 2016-09-28
### Added (per [#19](https://github.com/zendeskgarden/css-menus/pull/19))
- Menu `.is-open` animation.

## [2.0.0] - 2016-09-07
### Changed (per [#18](https://github.com/zendeskgarden/css-menus/pull/18))
- Electroid styling.

## [1.3.0] - 2016-06-21
### Added (per [#16](https://github.com/zendeskgarden/css-menus/pull/16))
- Support for `ul > li > a:link` markup.

## [1.2.0] - 2016-06-10
### Changed (per [#15](https://github.com/zendeskgarden/css-menus/pull/15))
- Item focus box shadow color.

## [1.1.0] - 2016-04-18
### Added (per [#10](https://github.com/zendeskgarden/css-menus/pull/10))
- Separate styling/classes for hover and focus states.
- Item expanded/hidden states.

## [1.0.0] - 2016-04-07
### Changed (per [#7](https://github.com/zendeskgarden/css-menus/pull/7))
- Update `.c-menu--rtl` to `.c-menu.is-rtl`.
- Update `.c-menu__item--disabled` to `.c-menu__item.is-disabled`.

## [0.2.2] - 2016-03-23
### Fixed (per [#8](https://github.com/zendeskgarden/css-menus/pull/8))
- Box shadow for IE Edge.

## [0.2.1] - 2016-03-18
### Fixed (per [#6](https://github.com/zendeskgarden/css-menus/pull/6))
- Set menu item cursor to "pointer".
- Correct background clip for Firefox.

## [0.2.0] - 2016-03-08
### Added (per [#5](https://github.com/zendeskgarden/css-menus/pull/5))
- Added support for RTL layout.

## [0.1.1] - 2016-01-21
### Fixed (per [#3](https://github.com/zendeskgarden/css-menus/pull/3))
- Correct menu box shadow to use alpha transparency.

## 0.1.0 - 2015-01-15

[5.0.1]: https://github.com/zendeskgarden/css-menus/compare/v5.0.0...v5.0.1
[5.0.0]: https://github.com/zendeskgarden/css-menus/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/zendeskgarden/css-menus/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/zendeskgarden/css-menus/compare/2.3.1...v3.0.0
[2.3.1]: https://github.com/zendeskgarden/css-menus/compare/2.3.0...2.3.1
[2.3.0]: https://github.com/zendeskgarden/css-menus/compare/2.2.1...2.3.0
[2.2.1]: https://github.com/zendeskgarden/css-menus/compare/2.2.0...2.2.1
[2.2.0]: https://github.com/zendeskgarden/css-menus/compare/2.1.0...2.2.0
[2.1.0]: https://github.com/zendeskgarden/css-menus/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/zendeskgarden/css-menus/compare/1.3.0...2.0.0
[1.3.0]: https://github.com/zendeskgarden/css-menus/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/zendeskgarden/css-menus/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/zendeskgarden/css-menus/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/zendeskgarden/css-menus/compare/0.2.2...1.0.0
[0.2.2]: https://github.com/zendeskgarden/css-menus/compare/0.2.1...0.2.2
[0.2.1]: https://github.com/zendeskgarden/css-menus/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/zendeskgarden/css-menus/compare/0.1.1...0.2.0
[0.1.1]: https://github.com/zendeskgarden/css-menus/compare/0.1.0...0.1.1
