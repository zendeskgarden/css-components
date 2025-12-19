/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  stories: ['./*.mdx', '../packages/**/demo/*.stories.js'],
  staticDirs: ['../packages/bedrock/dist'],
  framework: {
    name: '@storybook/react-webpack5',
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
    // https://github.com/storybookjs/addon-styling-webpack/blob/3a5aa2b130f78545552390aacf032ada0fdb714d/README.md#postcss
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            // Replaces existing CSS rules to support PostCSS
            test: /\.css$/u,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                // eslint-disable-next-line n/global-require
                options: { implementation: require('postcss') }
              }
            ]
          }
        ]
      }
    },
    '@storybook/addon-webpack5-compiler-swc'
  ],
  webpackFinal: config => {
    config.output.hashFunction = 'xxhash64';

    return config;
  }
};
