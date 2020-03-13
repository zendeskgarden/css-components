/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fontSizes = require('@zendeskgarden/react-theming').DEFAULT_THEME.fontSizes;
const math = require('polished').math;

let retVal = { ...fontSizes };

/* Monospace font sizes */
retVal = Object.assign(retVal, {
  'sm-monospace': math(`${fontSizes.sm} - 1px`),
  'md-monospace': math(`${fontSizes.md} - 1px`),
  'lg-monospace': math(`${fontSizes.lg} - 1px`)
});

module.exports = retVal;
