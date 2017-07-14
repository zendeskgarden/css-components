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

function toCamelCase(value) {
  return value.replace(/-([a-z])/g, function (_, c) {
    return c.toUpperCase()
  });
}

const css = `:root {
  ${toProperties(variables).join('\n  ')}
}\n`;

postcss([cssnano])
  .process(css)
  .then(function(result) {
    let js = [];
    let json = [];
    let scss = [];

    result.root.walkRules(function(rule) {
      rule.walkDecls(function(declaration) {
        const key = declaration.prop.replace('--', '');
        const value = declaration.value;

        js.push(`${toCamelCase(key)}: '${value}'`);
        json.push(`"${key}": "${value.replace(/"/g, '\'')}"`);
        scss.push(`$${key}: ${value};`);
      });
    });

    const module = 'const values = {\n  ' + js.join(',\n  ') + '\n};\n\nexport default values;\n';
    js = 'module.exports = {\n  ' + js.join(',\n  ') + '\n};\n';
    json = '{\n  ' + json.join(',\n  ') + '\n}\n';
    scss = scss.join('\n') + '\n';

    const destination = path.join(__dirname, 'dist');

    fs.writeFileSync(path.join(destination, 'index.css'), css, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.js'), js, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.json'), json, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.scss'), scss, 'utf8');
    fs.writeFileSync(path.join(destination, 'module.js'), module, 'utf-8');
  });
