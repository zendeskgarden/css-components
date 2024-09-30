/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const gardenTailwindCSSPlugin = require('@zendeskgarden/tailwindcss');

module.exports = {
  content: ['./packages/*/src/**/*.css'],
  theme: {
    extend: {}
  },
  plugins: [gardenTailwindCSSPlugin({ includeBedrock: false })]
};
