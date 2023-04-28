/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  stories: ['./*.stories.mdx', '../packages/**/demo/*.stories.mdx'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false
    }
  }, {
    name: '@storybook/addon-styling',
    options: {
      postCss: {
        implementation: require('postcss')
      }
    }
  }],
  webpackFinal: config => {
    config.output.hashFunction = 'xxhash64';
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};