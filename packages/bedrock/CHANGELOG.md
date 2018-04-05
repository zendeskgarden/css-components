# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

  <a name="4.0.1"></a>
## [4.0.1](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-bedrock@4.0.0...@zendesk/garden-css-bedrock@4.0.1) (2018-04-05)




**Note:** Version bump only for package @zendesk/garden-css-bedrock

  <a name="4.0.0"></a>
# 4.0.0 (2018-02-14)


### Features

* add css-bedrock package to monorepo ([#28](https://github.com/zendeskgarden/css-components/issues/28)) ([596f6ff](https://github.com/zendeskgarden/css-components/commit/596f6ff))


### BREAKING CHANGES

* all utility and layout (grid, flag, media) classes have been removed in favor of simplifying Bedrock as a CSS reset. Utilities can be added via `@zendesk/garden-css-utilities`.




<a name="3.1.0"></a>
## [3.1.0] - 2017-10-09
### Added (per [#22](https://github.com/zendeskgarden/css-bedrock/pull/22))
- Visibility utility classes

## [3.0.0] - 2017-06-20
### Changed (per [#20](https://github.com/zendeskgarden/css-bedrock/pull/20))
- Prepared package for registry publish as
`@zendesk/garden-css-bedrock`. See README for updated installation.

## [2.0.1] - 2017-05-17
### Changed (per [#19](https://github.com/zendeskgarden/css-bedrock/pull/19))
- Updated default system and monospace font stacks via latest
`zd-css-variables` package.

## [2.0.0] - 2017-04-24
### Changed (per [#18](https://github.com/zendeskgarden/css-bedrock/pull/18))
- Updated `font-family` default from Proxima Nova to system font stack.
- Updated to `normalize.css` 6.0.0.

## [1.1.0] - 2016-02-10
### Added (per [#16](https://github.com/zendeskgarden/css-bedrock/pull/16))
- New Electroid color utilities.

## [1.0.1] - 2016-01-09
### Fixed (per [#15](https://github.com/zendeskgarden/css-bedrock/pull/15))
- Restore package dependencies.

## [1.0.0] - 2016-12-21
### Removed (per [#14](https://github.com/zendeskgarden/css-bedrock/pull/14))
- `.l-wrapper` layout class.

## [0.5.0] - 2016-12-20
### Added
- `.u-position-*` utilities.

### Changed (per [#11](https://github.com/zendeskgarden/css-bedrock/pull/11))
- Default anchor tag styling.

## [0.4.0] - 2016-10-25
### Added (per [#10](https://github.com/zendeskgarden/css-bedrock/pull/10))
- Utility support for new Electroid color variables.

## [0.3.1] - 2016-08-09
### Removed (per [#8](https://github.com/zendeskgarden/css-bedrock/pull/8))
- Kerning for IE browsers only.

## [0.3.0] - 2016-07-13
### Changed (per [#7](https://github.com/zendeskgarden/css-bedrock/pull/7))
- Moved customn `@font-face` declarations out to a separate `css-fonts`
package.

## [0.2.0] - 2016-06-28
### Added
- Missing color (`steel`) and font-weight (`extralight` & `ultrabold`)
variables.

### Changed (per [#6](https://github.com/zendeskgarden/css-bedrock/pull/6))
- Update all font files (to restore command character).

## [0.1.0] - 2016-03-18
### Changed (per [#4](https://github.com/zendeskgarden/css-bedrock/pull/4))
- Update to reference font files located on production S3/CDN.

## [0.0.3] - 2016-01-20
### Changed (per [#3](https://github.com/zendeskgarden/css-bedrock/pull/3))
- Update `normalize.css` and `zd-css-variables` to be package
dependencies.

### Removed (per [#2](https://github.com/zendeskgarden/css-bedrock/pull/2))
- font smoothing

## [0.0.2] - 2016-01-06
### Added (per [#1](https://github.com/zendeskgarden/css-bedrock/pull/1))
- `.u-va-*` vertical alignment utilities.

## 0.0.1 - 2015-12-21

[3.1.0]: https://github.com/zendeskgarden/css-bedrock/compare/3.0.0...v3.1.0
[3.0.0]: https://github.com/zendeskgarden/css-bedrock/compare/2.0.1...v3.0.0
[2.0.1]: https://github.com/zendeskgarden/css-bedrock/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/zendeskgarden/css-bedrock/compare/1.1.0...2.0.0
[1.1.0]: https://github.com/zendeskgarden/css-bedrock/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/zendeskgarden/css-bedrock/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.5.0...1.0.0
[0.5.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.4.0...0.5.0
[0.4.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.3.1...0.4.0
[0.3.1]: https://github.com/zendeskgarden/css-bedrock/compare/0.3.0...0.3.1
[0.3.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/zendeskgarden/css-bedrock/compare/0.0.3...0.1.0
[0.0.3]: https://github.com/zendeskgarden/css-bedrock/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/zendeskgarden/css-bedrock/compare/0.0.1...0.0.2
