/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fontWeights = require('@zendeskgarden/react-theming').DEFAULT_THEME.fontWeights;

/* https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping */
let retVal = { ...fontWeights };

/* Aliases */
retVal = Object.assign(retVal, {
  ultralight: fontWeights.extralight,
  ultrabold: fontWeights.extrabold,
  heavy: fontWeights.black
});

module.exports = retVal;
