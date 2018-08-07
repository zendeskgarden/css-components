const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-input-range': {},
    'postcss-cssnext': {
      features: { fontFamilySystemUi: false }
    },
    'postcss-inline-svg': {
      path: path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')
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
