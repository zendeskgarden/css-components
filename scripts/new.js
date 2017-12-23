const Handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs');
const klaw = require('klaw-sync');
const ncp = require('ncp').ncp;
const path = require('path');

Handlebars.registerHelper('capitalize', value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

function addComponent(name) {
  const packages = path.join(__dirname, '..', 'packages');
  const source = path.join(packages, '.template');
  const destination = path.join(packages, name);

  if (!fs.existsSync(destination)) {
    ncp(source, destination, error => {
      if (error) {
        console.log(chalk.red('error'), error);
        process.exit();
      }

      const items = klaw(destination, {
        filter: item => !item.stats.isSymbolicLink(),
        nodir: true
      });

      items.forEach(item => {
        const string = fs.readFileSync(item.path, 'utf8');
        const template = Handlebars.compile(string);
        const data = template({ component: name });

        fs.writeFileSync(item.path, data, 'utf8');
      });
    });
  } else {
    console.log(chalk.red('error'), `Component package exists`);
    process.exit();
  }
}

if (process.argv.length >= 3) {
  const component = process.argv[2];

  addComponent(component);
} else {
  console.log(chalk.red('error'), 'Missing component name');
  process.exit();
}
