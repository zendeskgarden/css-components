/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const palette = require('@zendeskgarden/react-theming').PALETTE;

const addColors = (colors, hue, isSecondary) => {
  for (let i = 1; i <= 12; i++) {
    colors[`${isSecondary ? 'secondary-' : ''}${hue}-${i * 100}`] = palette[hue][i * 100];
  }
};

const retVal = {
  black: palette.black,
  white: palette.white
};

/* Primary colors */
addColors(retVal, 'green');
addColors(retVal, 'grey');
addColors(retVal, 'blue');
addColors(retVal, 'kale');
addColors(retVal, 'red');
addColors(retVal, 'yellow');

/* Secondary colors */
addColors(retVal, 'azure', true);
addColors(retVal, 'crimson', true);
addColors(retVal, 'fuschia', true);
addColors(retVal, 'lemon', true);
addColors(retVal, 'lime', true);
addColors(retVal, 'mint', true);
addColors(retVal, 'orange', true);
addColors(retVal, 'pink', true);
addColors(retVal, 'purple', true);
addColors(retVal, 'royal', true);
addColors(retVal, 'teal', true);

module.exports = retVal;
