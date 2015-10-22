var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var css2scss = require('css-scss');
var source = path.join(__dirname, 'src', 'index.css');
var destination = path.join(__dirname, 'dist', 'index.scss');
var options = {
  compress: {
    convertValues: false
  },
  features: {
    calc: false,
    colorFunction: false,
    customMedia: false,
    customProperties: false,
    rem: false
  },
  from: source,
};
var css = cssnext(fs.readFileSync(source, 'utf8'), options);
var scss = css2scss(css);

fs.writeFileSync(destination, scss);
