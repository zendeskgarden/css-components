const Handlebars = require('handlebars');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const fs = require('fs');
const klaw = require('klaw-sync');
const ncp = require('ncp').ncp;
const path = require('path');
const rimraf = require('rimraf');

Handlebars.registerHelper('capitalize', value => {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

const packages = path.join(process.cwd(), 'packages');

function linkCss(component) {
  const destination = path.join(process.cwd(), 'demo', component);

  process.chdir(destination);

  const source = path.relative(destination, path.join(packages, component, 'dist'));

  fs.readdirSync(source).forEach(file => {
    fs.symlinkSync(path.join(source, file), file);
  });

  console.log(chalk.green('success'), 'Linked demo CSS');
}

function updateDemo(component) {
  const source = path.join(packages, component, 'demo');
  const destination = path.join(process.cwd(), 'demo', component);

  ncp(source, destination, error => {
    if (error) {
      console.log(chalk.red('error'), error);
    } else {
      rimraf(source, () => {
        console.log(chalk.green('success'), 'Updated component demo');
        execSync(`yarn build --scope @zendeskgarden/css-${component}`);
        linkCss(component);
        execSync(`yarn start --open=${component}`);
      });
    }
  });
}

function addComponent(name) {
  const source = path.join(packages, '.template');
  const destination = path.join(packages, name);

  if (fs.existsSync(destination)) {
    console.log(chalk.red('error'), 'Component package exists');
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
        execSync('yarn postinstall');
        updateDemo(name);
      }
    });
  }
}

if (process.argv.length >= 3) {
  addComponent(process.argv[2]);
} else {
  console.log(chalk.red('error'), 'Missing component name');
}
