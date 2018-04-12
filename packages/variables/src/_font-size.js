/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css
 * www.modularscale.com/?14&px&1.125 */
const retVal = {
  /* Larger than H1 */
  giga: '36px',
  mega: '28px',
  kilo: '25px',

  /* H1-H6 */
  alpha: '22px',
  beta: '20px',
  gamma: '18px',
  delta: '16px',
  epsilon: '14px',
  zeta: '12px',

  /* Smaller than H6 */
  milli: '11px',
  micro: '10px',
  nano: '9px'
};

module.exports = retVal;
