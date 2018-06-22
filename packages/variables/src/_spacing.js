/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const base = 20;
const retVal = {
  'xxs': `${base * 0.2}px`,
  'xs': `${base * 0.4}px`,
  'sm': `${base * 0.6}px`,
  '': `${base}px`,
  'lg': `${base * 1.6}px`,
  'xl': `${base * 2}px`,
  'xxl': `${base * 2.4}px`
};

module.exports = retVal;
