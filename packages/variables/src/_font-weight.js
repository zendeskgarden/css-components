/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping */
let retVal = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};

/* Aliases */
retVal = Object.assign(retVal, {
  ultralight: retVal.extralight,
  ultrabold: retVal.extrabold,
  heavy: retVal.black
});

module.exports = retVal;
