var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var cssimport = require('postcss-import')();
var cssnext = require('postcss-cssnext')({
  features: {
    calc: false,
    colorFunction: false,
    customMedia: false,
    customProperties: false,
    rem: false
  }
});
var cssnano = require('cssnano')({
  autoprefixer: false,
  convertValues: false
});
var css2scss = require('css-scss');
var source = path.join(__dirname, 'src', 'index.css');
var destination = path.join(__dirname, 'dist', 'index.scss');

postcss([cssimport, cssnext, cssnano])
  .process(fs.readFileSync(source, 'utf8'), { from: source })
  .then(function(result) {
    // Convert then remove blank lines, comments, and `!default` flags.
    var scss = css2scss(result.css).replace(/\n\n|^\n?\/\/.*$| !default/gm, '');

    fs.writeFileSync(destination, scss);
  });
