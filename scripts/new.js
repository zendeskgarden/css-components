const Handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs');
const klaw = require('klaw-sync');
const ncp = require('ncp').ncp;
const path = require('path');
const rimraf = require('rimraf');

Handlebars.registerHelper('capitalize', value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

const parent = path.join(__dirname, '..');
const packages = path.join(parent, 'packages');

function linkCss(name) {
}

function updateDemo(name) {
  const source = path.join(packages, name, 'demo');
  const destination = path.join(parent, 'demo', name);

  ncp(source, destination, error => {
    if (error) {
      console.log(chalk.red('error'), error);
    } else {
      rimraf(source, () => {
        console.log(chalk.green('success'), 'Updated component demo');
      });
    }
  });
}

function addComponent(name) {
  const source = path.join(packages, '.template');
  const destination = path.join(packages, name);

  if (fs.existsSync(destination)) {
    console.log(chalk.red('error'), `Component package exists`);
  } else {
    ncp(source, destination, error => {
      if (error) {
        console.log(chalk.red('error'), error);
      } else {
        const items = klaw(destination, { nodir: true });

        items.forEach(item => {
          const string = fs.readFileSync(item.path, 'utf8');
          const template = Handlebars.compile(string);
          const data = template({ component: name });

          fs.writeFileSync(item.path, data, 'utf8');
        });

        console.log(chalk.green('success'), 'Added new component');
        updateDemo(name);
      }
    });
  }
}

if (process.argv.length >= 3) {
  addComponent(process.argv[2])
} else {
  console.log(chalk.red('error'), 'Missing component name');
}
