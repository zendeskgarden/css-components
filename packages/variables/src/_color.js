/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

let retVal = {
  'black': { r: 0, g: 0, b: 0 },
  'green-100': { r: 237, g: 248, b: 244 },
  'green-200': { r: 209, g: 232, b: 223 },
  'green-300': { r: 174, g: 207, b: 194 },
  'green-400': { r: 94, g: 174, b: 145 },
  'green-500': { r: 34, g: 143, b: 103 },
  'green-600': { r: 3, g: 129, b: 83 },
  'green-700': { r: 24, g: 97, b: 70 },
  'green-800': { r: 11, g: 59, b: 41 },
  'grey-100': { r: 248, g: 249, b: 249 },
  'grey-200': { r: 233, g: 235, b: 237 },
  'grey-300': { r: 216, g: 220, b: 222 },
  'grey-400': { r: 194, g: 200, b: 204 },
  'grey-500': { r: 135, g: 146, b: 157 },
  'grey-600': { r: 104, g: 115, b: 125 },
  'grey-700': { r: 73, g: 84, b: 92 },
  'grey-800': { r: 47, g: 57, b: 65 },
  'blue-100': { r: 237, g: 247, b: 255 },
  'blue-200': { r: 206, g: 226, b: 242 },
  'blue-300': { r: 173, g: 204, b: 228 },
  'blue-400': { r: 82, g: 147, b: 199 },
  'blue-500': { r: 51, g: 127, b: 189 },
  'blue-600': { r: 31, g: 115, b: 183 },
  'blue-700': { r: 20, g: 74, b: 117 },
  'blue-800': { r: 15, g: 53, b: 84 },
  'kale-100': { r: 245, g: 251, b: 252 },
  'kale-200': { r: 193, g: 214, b: 217 },
  'kale-300': { r: 129, g: 154, b: 158 },
  'kale-400': { r: 86, g: 119, b: 122 },
  'kale-500': { r: 51, g: 93, b: 99 },
  'kale-600': { r: 4, g: 68, b: 77 },
  'kale-700': { r: 3, g: 54, b: 61 },
  'kale-800': { r: 1, g: 43, b: 48 },
  'red-100': { r: 255, g: 240, b: 241 },
  'red-200': { r: 245, g: 213, b: 216 },
  'red-300': { r: 245, g: 181, b: 186 },
  'red-400': { r: 227, g: 91, b: 102 },
  'red-500': { r: 217, g: 63, b: 76 },
  'red-600': { r: 204, g: 51, b: 64 },
  'red-700': { r: 140, g: 35, b: 44 },
  'red-800': { r: 104, g: 18, b: 25 },
  'yellow-100': { r: 255, g: 248, b: 237 },
  'yellow-200': { r: 255, g: 240, b: 219 },
  'yellow-300': { r: 252, g: 219, b: 169 },
  'yellow-400': { r: 255, g: 182, b: 72 },
  'yellow-500': { r: 245, g: 161, b: 51 },
  'yellow-600': { r: 237, g: 150, b: 28 },
  'yellow-700': { r: 173, g: 94, b: 24 },
  'yellow-800': { r: 112, g: 59, b: 21 },
  'white': { r: 255, g: 255, b: 255 }
};

/* Secondary colors */
retVal = Object.assign(retVal, {
  'secondary-azure-400': { r: 48, g: 145, b: 236 },
  'secondary-azure-600': { r: 19, g: 113, b: 214 },
  'secondary-crimson-400': { r: 227, g: 79, b: 50 },
  'secondary-crimson-600': { r: 199, g: 42, b: 28 },
  'secondary-fuschia-400': { r: 214, g: 83, b: 194 },
  'secondary-fuschia-600': { r: 168, g: 24, b: 151 },
  'secondary-lemon-400': { r: 255, g: 212, b: 36 },
  'secondary-lemon-600': { r: 255, g: 187, b: 16 },
  'secondary-lime-400': { r: 67, g: 179, b: 36 },
  'secondary-lime-600': { r: 46, g: 130, b: 0 },
  'secondary-mint-400': { r: 0, g: 166, b: 86 },
  'secondary-mint-600': { r: 5, g: 133, b: 65 },
  'secondary-orange-400': { r: 222, g: 112, b: 29 },
  'secondary-orange-600': { r: 191, g: 80, b: 0 },
  'secondary-pink-400': { r: 236, g: 77, b: 99 },
  'secondary-pink-600': { r: 212, g: 32, b: 84 },
  'secondary-purple-400': { r: 181, g: 82, b: 226 },
  'secondary-purple-600': { r: 106, g: 39, b: 184 },
  'secondary-royal-400': { r: 93, g: 125, b: 245 },
  'secondary-royal-600': { r: 51, g: 83, b: 226 },
  'secondary-teal-400': { r: 2, g: 161, b: 145 },
  'secondary-teal-600': { r: 2, g: 128, b: 121 }
});

/* Product colors */
retVal = Object.assign(retVal, {
  'chat-orange': { r: 247, g: 154, b: 62 },
  'connect-red': { r: 235, g: 102, b: 81 },
  'explore-blue': { r: 48, g: 170, b: 188 },
  'guide-pink': { r: 235, g: 73, b: 98 },
  'message-green': { r: 55, g: 184, b: 175 },
  'sell-gold': { r: 212, g: 174, b: 94 },
  'support-green': { r: 120, g: 163, b: 0 },
  'talk-yellow': { r: 239, g: 201, b: 61 }
});

module.exports = retVal;
