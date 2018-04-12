# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
# 2.0.0 (2018-04-12)


### Features

* add css-utilities package to monorepo ([#27](https://github.com/zendeskgarden/css-components/issues/27)) ([77ab661](https://github.com/zendeskgarden/css-components/commit/77ab661))
* **buttons:** update default size ([#30](https://github.com/zendeskgarden/css-components/issues/30)) ([52fa695](https://github.com/zendeskgarden/css-components/commit/52fa695))
* **variables, arrows:** prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#44](https://github.com/zendeskgarden/css-components/issues/44)) ([ffe72ce](https://github.com/zendeskgarden/css-components/commit/ffe72ce))
* prepare for [@zendeskgarden](https://github.com/zendeskgarden) npm publish ([#49](https://github.com/zendeskgarden/css-components/issues/49)) ([5a2923b](https://github.com/zendeskgarden/css-components/commit/5a2923b))


### BREAKING CHANGES

* package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.
* **variables, arrows:** package location has moved to the npm registry under the `@zendeskgarden` scope. See the README for installation/upgrade details.
* **buttons:** the default `.c-btn` now renders the previous `.c-btn--medium` size.

The following table describes the CSS class mapping needed upon upgrade. Modifiers were renamed for consistency with other Garden components (menus, tables, form elements):

BEFORE | AFTER
* remove utility classes for deprecated colors. This only affects users that are replacing `@zendesk/garden-css-bedrock` with `@zendesk/garden-css-utilities`.




<a name="1.0.0"></a>
# 1.0.0 (2018-02-14)


### Features

* add css-utilities package to monorepo ([#27](https://github.com/zendeskgarden/css-components/issues/27)) ([77ab661](https://github.com/zendeskgarden/css-components/commit/77ab661))


### BREAKING CHANGES

* remove utility classes for deprecated colors. This only affects users that are replacing `@zendesk/garden-css-bedrock` with `@zendesk/garden-css-utilities`.
