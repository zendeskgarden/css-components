const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-input-range': {},
    'postcss-cssnext': {},
    'postcss-inline-svg': {
      path: path.join(__dirname, 'node_modules', '@zendeskgarden', 'svg-icons', 'src')
    },
    'cssnano': {
      autoprefixer: false,
      core: false,
      discardComments: { removeAllButFirst: true },
      reduceIdents: false,
      zindex: false
    }
  }
};
