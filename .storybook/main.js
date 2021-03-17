/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  stories: ['../packages/**/demo/*.stories.mdx'],
  addons: [
    { name: '@storybook/addon-essentials', options: { actions: false } },
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } }
    }
  ]
};