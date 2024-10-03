/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { dirname, join } from 'node:path';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

module.exports = {
  stories: ['./*.mdx', '../packages/**/demo/*.stories.js'],
  staticDirs: ['../packages/bedrock/dist'],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },
  docs: {
    autodocs: true
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        postCss: {
          /* eslint-disable-next-line n/global-require */
          implementation: require('postcss')
        }
      }
    },
    '@storybook/addon-webpack5-compiler-swc'
  ],
  webpackFinal: config => {
    config.output.hashFunction = 'xxhash64';

    return config;
  }
};
