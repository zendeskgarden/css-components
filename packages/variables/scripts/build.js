#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');
const cssnano = require('cssnano')({ preset: ['default', { cssDeclarationSorter: false }] });
const cssVariables = require('../src/index');

/**
 * Convert the given variables object to an array of CSS properties.
 *
 * @param {Object} variables The object to convert.
 *
 * @returns {Array} CSS properties.
 */
function toProperties(variables) {
  const categories = Object.keys(variables);
  const valueOf = (category, value) => {
    let retVal;

    if (category === 'font-family') {
      retVal = value
        .split(',')
        .map((font) => {
          return font.replace(/"/gu, "'");
        })
        .join(', ');
    } else {
      retVal = value;
    }

    return retVal;
  };

  return categories.reduce((retVal, category) => {
    const keys = Object.keys(variables[category]);

    keys.forEach((key) => {
      const value = valueOf(category, variables[category][key]);
      const _key = key.length > 0 ? `${category}-${key}` : `${category}`;

      retVal.push(`--zd-${_key}: ${value};`);
    });

    return retVal;
  }, []);
}

/**
 * Convert the given kebab-case value to camelCase.
 *
 * @param {String} value The kebab-case value to convert.
 *
 * @returns {String} The value converted to camelCase.
 */
function toCamelCase(value) {
  return value.replace(/-(?<character>[\w\d])/gu, (_, c) => {
    return c.toUpperCase();
  });
}

const HEADER = `/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

`;
const CSS = `${HEADER}:root {
  ${toProperties(cssVariables).join('\n  ')}
}\n`;

postcss([cssnano])
  .process(CSS, { from: undefined })
  .then((result) => {
    const jsItems = [];
    const jsonItems = [];
    const scssItems = [];

    result.root.walkRules((rule) => {
      rule.walkDecls((declaration) => {
        const key = declaration.prop.replace('--', '');
        const value = declaration.value;

        jsItems.push(`${toCamelCase(key)}: '${value}'`);
        jsonItems.push(`"${key}": "${value.replace(/"/gu, "'")}"`);
        scssItems.push(`$${key}: ${value};`);
      });
    });

    const destination = path.join(__dirname, '..', 'dist');

    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }

    const js = `{\n  ${jsItems.join(',\n  ')}\n};\n`;
    const MODULE = `${HEADER}const retVal = ${js}\nexport default retVal;\n`;
    const JS = `${HEADER}module.exports = ${js}`;
    const JSON = `{\n  ${jsonItems.join(',\n  ')}\n}\n`;
    const SCSS = `${HEADER}${scssItems.join('\n')}\n`;

    console.log('Writing CSS');
    fs.writeFileSync(path.join(destination, 'index.css'), CSS, 'utf8');
    console.log('Writing JS');
    fs.writeFileSync(path.join(destination, 'index.js'), JS, 'utf8');
    console.log('Writing JSON');
    fs.writeFileSync(path.join(destination, 'index.json'), JSON, 'utf8');
    console.log('Writing SCSS');
    fs.writeFileSync(path.join(destination, 'index.scss'), SCSS, 'utf8');
    console.log('Writing ES6 module');
    fs.writeFileSync(path.join(destination, 'module.js'), MODULE, 'utf8');
  });
