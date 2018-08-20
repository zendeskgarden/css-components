#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const childProcess = require('child_process');
const lernaBin = path.resolve(__dirname, '..', 'node_modules', '.bin', 'lerna');
const lernaConfig = require(path.resolve(__dirname, '..', 'lerna.json'));
const PUBLISH_COMMIT_MESSAGE = lernaConfig.command.version.message;

if (process.env.TRAVIS_COMMIT_MESSAGE &&
    process.env.TRAVIS_COMMIT_MESSAGE.startsWith(PUBLISH_COMMIT_MESSAGE)) {
  const publish = childProcess.spawn(lernaBin, [
    'exec',
    'npm publish',
    '--since=HEAD^'
  ]);

  publish.stdout.on('data', data => {
    process.stdout.write(data);
  });

  publish.stderr.on('data', data => {
    process.stderr.write(data);
  });
}
