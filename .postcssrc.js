const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-input-range': {},
    'postcss-inline-svg': {
      path: path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')
    },
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': { preserve: false },
        'system-ui-font-family': false
      }
    },
    'cssnano': {
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
