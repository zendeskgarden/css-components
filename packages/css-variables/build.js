const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const variables = require('./src/index');

function toProperties(variables) {
  const categories = Object.keys(variables);
  const valueOf = function(category, value) {
    let retVal;

    if (category === 'color') {
      retVal = `rgb(${value.r}, ${value.g}, ${value.b})`;
    } else if (category === 'font-family') {
      retVal = value.map(function(font) {
        return font.indexOf(' ') === -1 ? font : `'${font}'`;
      }).join(', ');
    } else {
      retVal = value;
    }

    return retVal;
  };

  return categories.reduce(function (retVal, category) {
    const keys = Object.keys(variables[category]);

    keys.forEach(function(key) {
      const value = valueOf(category, variables[category][key]);

      key = key.length > 0 ? `${category}-${key}` : `${category}`;
      retVal.push(`--zd-${key}: ${value};`);
    });

    return retVal;
  }, []);
}

const css = `:root {
  ${toProperties(variables).join('\n  ')}
}`;

postcss([cssnano])
  .process(css)
  .then(function(result) {
    let json = [];
    let scss = [];

    result.root.walkRules(function(rule) {
      rule.walkDecls(function(declaration) {
        const key = declaration.prop.replace('--', '');
        const value = declaration.value;

        json.push(`"${key}": "${value.replace(/"/g, '\'')}"`);
        scss.push(`$${key}: ${value};`);
      });
    });

    json = '{\n  ' + json.join(',\n  ') + '\n}';
    scss = scss.join('\n');

    const destination = path.join(__dirname, 'dist');

    fs.writeFileSync(path.join(destination, 'index.css'), css, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.json'), json, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.scss'), scss, 'utf8');
  });
