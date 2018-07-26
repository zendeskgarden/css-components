# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="3.0.4"></a>
## [3.0.4](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@3.0.3...@zendeskgarden/css-chrome@3.0.4) (2018-07-26)




**Note:** Version bump only for package @zendeskgarden/css-chrome

<a name="3.0.3"></a>
## [3.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@3.0.2...@zendeskgarden/css-chrome@3.0.3) (2018-07-17)


### Bug Fixes

* **chrome:** prevent shrinking nav items ([#78](https://github.com/zendeskgarden/css-components/issues/78)) ([bd94dc1](https://github.com/zendeskgarden/css-components/commit/bd94dc1))




<a name="3.0.2"></a>
## [3.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@3.0.1...@zendeskgarden/css-chrome@3.0.2) (2018-07-02)




**Note:** Version bump only for package @zendeskgarden/css-chrome

<a name="3.0.1"></a>
## [3.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@3.0.0...@zendeskgarden/css-chrome@3.0.1) (2018-05-25)




**Note:** Version bump only for package @zendeskgarden/css-chrome

<a name="3.0.0"></a>
# [3.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@2.0.3...@zendeskgarden/css-chrome@3.0.0) (2018-04-30)


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
## [2.0.3](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@2.0.2...@zendeskgarden/css-chrome@2.0.3) (2018-04-30)




**Note:** Version bump only for package @zendeskgarden/css-chrome

<a name="2.0.2"></a>
## [2.0.2](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@2.0.1...@zendeskgarden/css-chrome@2.0.2) (2018-04-24)


### Bug Fixes

* remove `--save-dev` from install instructions ([#54](https://github.com/zendeskgarden/css-components/issues/54)) ([b81071c](https://github.com/zendeskgarden/css-components/commit/b81071c))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@2.0.0...@zendeskgarden/css-chrome@2.0.1) (2018-04-15)


### Bug Fixes

* document corrected `[@zendeskgarden](https://github.com/zendeskgarden)` package scope ([#53](https://github.com/zendeskgarden/css-components/issues/53)) ([1218b1a](https://github.com/zendeskgarden/css-components/commit/1218b1a))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/zendeskgarden/css-components/compare/@zendeskgarden/css-chrome@1.1.0...@zendeskgarden/css-chrome@2.0.0) (2018-04-12)


### Features

* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.




<a name="1.1.4"></a>
## [1.1.4](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-chrome@1.1.3...@zendesk/garden-css-chrome@1.1.4) (2018-04-02)


### Bug Fixes

* **chrome:** allow subnav items to be used with buttons ([#47](https://github.com/zendeskgarden/css-components/issues/47)) ([b5a7b13](https://github.com/zendeskgarden/css-components/commit/b5a7b13))




<a name="1.1.3"></a>
## [1.1.3](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-chrome@1.1.2...@zendesk/garden-css-chrome@1.1.3) (2018-03-23)


### Bug Fixes

* **chrome:** add resets to support a wider selection of element types ([#43](https://github.com/zendeskgarden/css-components/issues/43)) ([d1f4f05](https://github.com/zendeskgarden/css-components/commit/d1f4f05))




<a name="1.1.2"></a>
## [1.1.2](https://github.com/zendeskgarden/css-components/compare/@zendesk/garden-css-chrome@1.1.1...@zendesk/garden-css-chrome@1.1.2) (2018-03-07)


### Bug Fixes

* **chrome:** expand "main" to fill body content ([#39](https://github.com/zendeskgarden/css-components/issues/39)) ([bd66e56](https://github.com/zendeskgarden/css-components/commit/bd66e56))




<a name="1.1.1"></a>
## 1.1.1 (2018-02-13)


### Bug Fixes

* **chrome:** focused FAB box-shadow treatment ([#25](https://github.com/zendeskgarden/css-components/issues/25)) ([9a736fa](https://github.com/zendeskgarden/css-components/commit/9a736fa))




<a name="1.1.0"></a>
# 1.1.0 (2017-12-22)


### Features

* add css-chrome package to monorepo ([#7](https://github.com/zendeskgarden/css-components/issues/7)) ([6d9a9c5](https://github.com/zendeskgarden/css-components/commit/6d9a9c5))




## 1.0.0 - 2017-11-06
