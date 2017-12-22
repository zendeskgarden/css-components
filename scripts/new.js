const Handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs');
const ncp = require('ncp').ncp;
const path = require('path');
let component;

if (process.argv.length >= 3) {
  component = process.argv[2];
} else {
  console.log(chalk.red('error'), 'Missing component name');
  process.exit();
}

const destination = path.join(__dirname, '..', 'packages', component);

if (fs.existsSync(destination)) {
  console.log(chalk.red('error'), `Component package exists`);
  process.exit();
}

Handlebars.registerHelper('capitalize', (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

let source = path.join(__dirname, '..', 'packages', '.template');

ncp(source, destination, (error) => {
  if (error) {
    console.log(chalk.red('error'), error);
    process.exit();
  }

  console.log(component);
});
