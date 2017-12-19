const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const variables = require('../src/index');

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
    let jsItems = [];
    let jsonItems = [];
    let scssItems = [];

    result.root.walkRules(function(rule) {
      rule.walkDecls(function(declaration) {
        const key = declaration.prop.replace('--', '');
        const value = declaration.value;

        jsItems.push(`${toCamelCase(key)}: '${value}'`);
        jsonItems.push(`"${key}": "${value.replace(/"/g, '\'')}"`);
        scssItems.push(`$${key}: ${value};`);
      });
    });

    const destination = path.join(__dirname, '..', 'dist');

    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }

    const _js = '{\n  ' + jsItems.join(',\n  ') + '\n};\n';
    const module = `const retVal = ${_js}\nexport default retVal;\n`;
    const js = `module.exports = ${_js}`;
    const json = '{\n  ' + jsonItems.join(',\n  ') + '\n}\n';
    const scss = scssItems.join('\n') + '\n';

    fs.writeFileSync(path.join(destination, 'index.css'), css, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.js'), js, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.json'), json, 'utf8');
    fs.writeFileSync(path.join(destination, 'index.scss'), scss, 'utf8');
    fs.writeFileSync(path.join(destination, 'module.js'), module, 'utf-8');
  });
