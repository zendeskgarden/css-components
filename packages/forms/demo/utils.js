/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const toClassName = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base} c-field--dark` : base;

  if (size.length > 0) {
    retVal += ` ${size.join(' ')}`;
  }

  if (validation) {
    retVal += ` ${validation}`;
  }

  return retVal;
};

export const toClassSelector = (theme, base, size = [], validation = undefined) => {
  let retVal = theme.colors.base === 'dark' ? `${base}.c-field--dark` : base;

  if (size.length > 0) {
    retVal += `.${size.join('.')}`;
  }

  if (validation) {
    retVal += `.${validation}`;
  }

  return retVal;
};
