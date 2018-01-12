# Change Log

<a name="3.5.0"></a>
## [3.5.0] - 2017-12-22
### Fixed (per [#50](https://github.com/zendeskgarden/css-forms/pull/50) and [#51](https://github.com/zendeskgarden/css-forms/pull/51))
- Add support for inline media (icons) within text inputs

## [3.4.2] - 2017-12-06
### Fixed (per [#49](https://github.com/zendeskgarden/css-forms/pull/49))
- Reduce padding on `.c-txt__input--label` to prevent pixel shift on
  label removal.

## [3.4.1] - 2017-11-10
### Fixed (per [#48](https://github.com/zendeskgarden/css-forms/pull/48))
- Update `.c-[input]--custom` to base active color on accent color.

## [3.4.0] - 2017-11-08
### Added (per [#41](https://github.com/zendeskgarden/css-forms/pull/41))
- Include complementary `.c-txt--custom`, `.c-chk--custom`, and
  `.c-range--custom` CSS demonstrating how to apply an accent color
  changes.

## [3.3.2] - 2017-11-04
### Fixed (per [#45](https://github.com/zendeskgarden/css-forms/pull/45))
- Align select chevron to top in multi-line dropdown.

## [3.3.1] - 2017-10-12
### Fixed
- Bump version to trigger failed deploy.

## [3.3.0] - 2017-10-12
### Changed (per [#44](https://github.com/zendeskgarden/css-forms/pull/44))
- Improve readability of disabled text.

## [3.2.2] - 2017-09-19
### Fixed
- [#39](https://github.com/zendeskgarden/css-forms/issues/39) Prevent
  pixel height shift in empty text field `<div>`.

## [3.2.1] - 2017-09-19
### Fixed
- [#36](https://github.com/zendeskgarden/css-forms/pull/36) Allow
  checkbox labels to line wrap.
- Remove IE "clear" button from text fields.

## [3.2.0] - 2017-09-01
### Added (per [#38](https://github.com/zendeskgarden/css-forms/pull/38))
- Styling for `.c-chk__input:indeterminate` checkboxes.

## [3.1.0] - 2017-08-14
### Added (per [#33](https://github.com/zendeskgarden/css-forms/pull/33))
- `.c-txt__input--bare` modification for unstyled text fields.

### Fixed (per [#35](https://github.com/zendeskgarden/css-forms/pull/35))
- Styling for wrapped `.c-txt__message` elements.

## [3.0.0] - 2017-07-28
### Added (per [#32](https://github.com/zendeskgarden/css-forms/pull/32))
- `.c-txt--sm`, `.c-range--sm`, and `.c-input--sm` modifications to
  support compact form layouts.
- Support for inputs containing `.c-label` components.

### Changed
- Use base-4 spacing.
- Labels updated to semibold font weight.

### Fixed (per [#34](https://github.com/zendeskgarden/css-forms/issues/34))
- `.c-chk--nolabel` display for IE11.

### Removed
- Ability to override `.c-chk__label` with the addition of
  `.c-chk__hint`. Use a utility (like Bedrock `.u-regular`) to override
  the label font weight for the intended group design. See the demo page
  for details.

## [2.2.0] - 2017-07-28
### Added (per [#31](https://github.com/zendeskgarden/css-forms/pull/31))
- Styling and structure support for custom range sliders with multiple
  thumb controls.

## [2.1.1] - 2017-07-05
### Updated (per [#30](https://github.com/zendeskgarden/css-forms/pull/30))
- Revert to `postcss-input-range` v4.0.0.

## [2.1.0] - 2017-06-16
### Added (per [#28](https://github.com/zendeskgarden/css-forms/pull/28))
- `.c-chk.c-chk--nolabel` for standalone checkbox support.

## [2.0.0] - 2017-06-15
### Changed (per [#27](https://github.com/zendeskgarden/css-forms/pull/27))
- Prepared package for registry publish as `@zendesk/garden-css-forms`.
  See README for updated installation.

## [1.3.0] - 2017-05-02
### Added (per [#24](https://github.com/zendeskgarden/css-forms/pull/24))
- Validation `.c-chk__message`, `.c-range__message`, and
  `.c-txt__message`.

## [1.2.0] - 2017-04-04
### Added (per [#23](https://github.com/zendeskgarden/css-forms/pull/23))
- Standalone `.c-input-label` and `.c-input-hint` to support label/hint
  styling disconnected from input component structure.

## [1.0.1] - 2017-03-15
### Updated (per [#22](https://github.com/zendeskgarden/css-forms/pull/22))
- Moved all `.c-chk` "after" into "before" pseudo, allowing for more
  flexible checkbox label content.

## [1.0.0] - 2017-03-06
### Updated (per [#21](https://github.com/zendeskgarden/css-forms/pull/21))
- Make checkbox label/hint treatment match text field inputs.

## [0.4.0] - 2017-01-20
### Added (per [#17](https://github.com/zendeskgarden/css-forms/pull/17))
- Text field validation styling.

## [0.3.2] - 2016-12-22
### Fixed (per [#18](https://github.com/zendeskgarden/css-forms/pull/18))
- Loosen descendant and disabled selector rules, allowing for more
  flexible component usage.

## [0.3.1] - 2016-12-06
### Fixed (per [#16](https://github.com/zendeskgarden/css-forms/pull/16))
- `.c-range` background fix for Firefox.
- Dropdown chevron color tweak.

## [0.3.0] - 2016-11-28
### Added (per [#15](https://github.com/zendeskgarden/css-forms/pull/15))
- `.c-txt__input--select` dropdown component.

## [0.2.0] - 2016-11-22
### Added (per [#12](https://github.com/zendeskgarden/css-forms/pull/12))
- Support for Electroid "dark" mode.

## [0.1.3] - 2016-11-11
### Fixed
- [#13](https://github.com/zendeskgarden/css-forms/issues/13) Set
  `.c-chk` to relative positioning.

## [0.1.2] - 2016-10-28
### Changed
- [#10](https://github.com/zendeskgarden/css-forms/pull/10) Update field
  background and hover colors to improve contrast.

### Fixed
- [#11](https://github.com/zendeskgarden/css-forms/issues/11) Update
  `.c-txt__input` to inherit `font-family`.

## [0.1.1] - 2016-10-19
### Fixed (per [#9](https://github.com/zendeskgarden/css-forms/pull/9))
- Address `.c-range` shadow DOM performance by inheriting
  `background-size` from parent.

## [0.1.0] - 2016-10-17
### Changed (per [#8](https://github.com/zendeskgarden/css-forms/pull/8))
- Electroid component styling.

## [0.0.6] - 2016-07-26
### Added (per [#6](https://github.com/zendeskgarden/css-forms/pull/6))
- `.c-range` input component.

## [0.0.5] - 2016-07-18
### Added (per [#5](https://github.com/zendeskgarden/css-forms/pull/5))
- `.c-chk--toggle` toggle input component.

## [0.0.4] - 2016-07-08
### Added (per [#4](https://github.com/zendeskgarden/css-forms/pull/4))
- `.c-chk--radio` radio button component.

## [0.0.3] - 2016-07-06
### Added (per [#3](https://github.com/zendeskgarden/css-forms/pull/3))
- Textarea component.

## [0.0.2] - 2016-06-08
### Added (per [#2](https://github.com/zendeskgarden/css-forms/pull/2))
- `.c-txt` input component.

## 0.0.1 - 2016-05-19
### Added
- `.c-chk` component.

[3.5.0]: https://github.com/zendeskgarden/css-forms/compare/v3.4.2...v3.5.0
[3.4.2]: https://github.com/zendeskgarden/css-forms/compare/v3.4.1...v3.4.2
[3.4.1]: https://github.com/zendeskgarden/css-forms/compare/v3.4.0...v3.4.1
[3.4.0]: https://github.com/zendeskgarden/css-forms/compare/v3.3.2...v3.4.0
[3.3.2]: https://github.com/zendeskgarden/css-forms/compare/v3.3.1...v3.3.2
[3.3.1]: https://github.com/zendeskgarden/css-forms/compare/v3.3.0...v3.3.1
[3.3.0]: https://github.com/zendeskgarden/css-forms/compare/v3.2.2...v3.3.0
[3.2.2]: https://github.com/zendeskgarden/css-forms/compare/v3.2.1...v3.2.2
[3.2.1]: https://github.com/zendeskgarden/css-forms/compare/v3.2.0...v3.2.1
[3.2.0]: https://github.com/zendeskgarden/css-forms/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/zendeskgarden/css-forms/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/zendeskgarden/css-forms/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/zendeskgarden/css-forms/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/zendeskgarden/css-forms/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/zendeskgarden/css-forms/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/zendeskgarden/css-forms/compare/1.3.0...v2.0.0
[1.3.0]: https://github.com/zendeskgarden/css-forms/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/zendeskgarden/css-forms/compare/1.0.1...1.2.0
[1.0.1]: https://github.com/zendeskgarden/css-forms/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/zendeskgarden/css-forms/compare/0.4.0...1.0.0
[0.4.0]: https://github.com/zendeskgarden/css-forms/compare/0.3.2...0.4.0
[0.3.2]: https://github.com/zendeskgarden/css-forms/compare/0.3.1...0.3.2
[0.3.1]: https://github.com/zendeskgarden/css-forms/compare/0.3.0...0.3.1
[0.3.0]: https://github.com/zendeskgarden/css-forms/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/zendeskgarden/css-forms/compare/0.1.3...0.2.0
[0.1.3]: https://github.com/zendeskgarden/css-forms/compare/0.1.2...0.1.3
[0.1.2]: https://github.com/zendeskgarden/css-forms/compare/0.1.1...0.1.2
[0.1.1]: https://github.com/zendeskgarden/css-forms/compare/0.1.0...0.1.1
[0.1.0]: https://github.com/zendeskgarden/css-forms/compare/0.0.6...0.1.0
[0.0.6]: https://github.com/zendeskgarden/css-forms/compare/0.0.5...0.0.6
[0.0.5]: https://github.com/zendeskgarden/css-forms/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/zendeskgarden/css-forms/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/zendeskgarden/css-forms/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/zendeskgarden/css-forms/compare/0.0.1...0.0.2
