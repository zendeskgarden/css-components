/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const base = 20;
const retVal = {
  '': `${base}px`,
  'lg': `${base * 1.5}px`,
  'sm': `${base / 2}px`,
  'xl': `${base * 2}px`,
  'xs': `${base / 4}px`,
  'xxs': `${base / 10}px`
};

module.exports = retVal;
