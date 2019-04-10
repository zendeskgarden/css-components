/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

let retVal = {
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};

/* Monospace font sizes */
retVal = Object.assign(retVal, {
  'sm-monospace': '11px',
  'md-monospace': '13px',
  'lg-monospace': '17px'
});

module.exports = retVal;
