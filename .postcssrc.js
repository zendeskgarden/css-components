const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-input-range': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'color-mod-function': true,
        'custom-properties': { preserve: false },
        'system-ui-font-family': false
      }
    },
    'postcss-focus-visible': { preserve: false },
    'postcss-inline-svg': {
      paths: [path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')]
    },
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
