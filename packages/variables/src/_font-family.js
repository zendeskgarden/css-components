/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* https://bitsofco.de/the-new-system-font-stack/ */
const retVal = {
  /* 1. macOS
   * 2. Windows
   * 3. Ubuntu
   * 4. Fallback */
  monospace: [
    'SFMono-Regular', /* [1] */
    'Consolas' /* [2] */,
    'Liberation Mono' /* [3] */,
    'Menlo' /* [4] */,
    'Courier' /* [4] */,
    'monospace' /* [4] */
  ],
  /* 1. drafts.csswg.org/css-fonts-4/#system-ui
   * 2. macOS Safari & FF (San Francisco)
   * 3. macOS Chrome (San Francisco)
   * 4. Windows
   * 5. Android & ChromeOS
   * 6. KDE
   * 7. Ubuntu
   * 8. GNOME
   * 9. Fallback */
  system: [
    'system-ui', /* [1] */
    '-apple-system' /* [2] */,
    'BlinkMacSystemFont' /* [3] */,
    'Segoe UI' /* [4] */,
    'Roboto', /* [5] */
    'Oxygen-Sans', /* [6] */
    'Ubuntu', /* [7] */
    'Cantarell', /* [8] */
    'Helvetica Neue' /* [9] */,
    'Arial' /* [9] */,
    'sans-serif' /* [9] */
  ]
};

module.exports = retVal;
