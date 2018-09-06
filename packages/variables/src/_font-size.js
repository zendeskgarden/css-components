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

/* Deprecated sizes */
retVal = Object.assign(retVal, {
  /* Larger than H1 */
  giga: retVal['xxxl'],
  mega: '28px',
  kilo: '25px',

  /* H1-H6 */
  alpha: retVal['xl'],
  beta: '20px',
  gamma: retVal['lg'],
  delta: '16px',
  epsilon: retVal['md'],
  zeta: retVal['sm'],

  /* Smaller than H6 */
  milli: '11px',
  micro: '10px',
  nano: '9px'
});

module.exports = retVal;
