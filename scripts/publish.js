#!/usr/bin/env node

const path = require('path');
const childProcess = require('child_process');
const lernaConfig = require(path.resolve(__dirname, '..', 'lerna.json'));
const PUBLISH_COMMIT_MESSAGE = lernaConfig.commands.publish.message;

if (process.env.TRAVIS_COMMIT_MESSAGE &&
    process.env.TRAVIS_COMMIT_MESSAGE.startsWith(PUBLISH_COMMIT_MESSAGE)) {
  const publish = childProcess.spawn('yarn', [
    'lerna',
    'exec',
    'npm publish',
    '--since=HEAD~1',
    '--bail=false'
  ]);

  publish.stdout.on('data', data => {
    process.stdout.write(data);
  });

  publish.stderr.on('data', data => {
    process.stderr.write(data);
  });
}
