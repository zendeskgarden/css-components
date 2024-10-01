/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('node:path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-input-range': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': { preserve: false },
        'system-ui-font-family': false
      }
    },
    'postcss-inline-svg': {
      paths: [path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')]
    },
    tailwindcss: {},
    cssnano: {
      preset: [
        'default',
        {
          cssDeclarationSorter: false,
          discardComments: { removeAllButFirst: true },
          normalizeWhitespace: false
        }
      ]
    }
  }
};
