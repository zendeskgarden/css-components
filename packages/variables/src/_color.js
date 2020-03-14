/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const palette = require('@zendeskgarden/react-theming').PALETTE;

let retVal = {
  'black': palette.black,
  'green-100': palette.green[100],
  'green-200': palette.green[200],
  'green-300': palette.green[300],
  'green-400': palette.green[400],
  'green-500': palette.green[500],
  'green-600': palette.green[600],
  'green-700': palette.green[700],
  'green-800': palette.green[800],
  'grey-100': palette.grey[100],
  'grey-200': palette.grey[200],
  'grey-300': palette.grey[300],
  'grey-400': palette.grey[400],
  'grey-500': palette.grey[500],
  'grey-600': palette.grey[600],
  'grey-700': palette.grey[700],
  'grey-800': palette.grey[800],
  'blue-100': palette.blue[100],
  'blue-200': palette.blue[200],
  'blue-300': palette.blue[300],
  'blue-400': palette.blue[400],
  'blue-500': palette.blue[500],
  'blue-600': palette.blue[600],
  'blue-700': palette.blue[700],
  'blue-800': palette.blue[800],
  'kale-100': palette.kale[100],
  'kale-200': palette.kale[200],
  'kale-300': palette.kale[300],
  'kale-400': palette.kale[400],
  'kale-500': palette.kale[500],
  'kale-600': palette.kale[600],
  'kale-700': palette.kale[700],
  'kale-800': palette.kale[800],
  'red-100': palette.red[100],
  'red-200': palette.red[200],
  'red-300': palette.red[300],
  'red-400': palette.red[400],
  'red-500': palette.red[500],
  'red-600': palette.red[600],
  'red-700': palette.red[700],
  'red-800': palette.red[800],
  'yellow-100': palette.yellow[100],
  'yellow-200': palette.yellow[200],
  'yellow-300': palette.yellow[300],
  'yellow-400': palette.yellow[400],
  'yellow-500': palette.yellow[500],
  'yellow-600': palette.yellow[600],
  'yellow-700': palette.yellow[700],
  'yellow-800': palette.yellow[800],
  'white': palette.white
};

/* Secondary colors */
retVal = Object.assign(retVal, {
  'secondary-azure-400': palette.azure[400],
  'secondary-azure-600': palette.azure[600],
  'secondary-crimson-400': palette.crimson[400],
  'secondary-crimson-600': palette.crimson[600],
  'secondary-fuschia-400': palette.fuschia[400],
  'secondary-fuschia-600': palette.fuschia[600],
  'secondary-lemon-400': palette.lemon[400],
  'secondary-lemon-600': palette.lemon[600],
  'secondary-lime-400': palette.lime[400],
  'secondary-lime-600': palette.lime[600],
  'secondary-mint-400': palette.mint[400],
  'secondary-mint-600': palette.mint[600],
  'secondary-orange-400': palette.orange[400],
  'secondary-orange-600': palette.orange[600],
  'secondary-pink-400': palette.pink[400],
  'secondary-pink-600': palette.pink[600],
  'secondary-purple-400': palette.purple[400],
  'secondary-purple-600': palette.purple[600],
  'secondary-royal-400': palette.royal[400],
  'secondary-royal-600': palette.royal[600],
  'secondary-teal-400': palette.teal[400],
  'secondary-teal-600': palette.teal[600]
});

/* Muted secondary colors */
retVal = Object.assign(retVal, {
  'secondary-azure-M400': palette.azure.M400,
  'secondary-azure-M600': palette.azure.M600,
  'secondary-crimson-M400': palette.crimson.M400,
  'secondary-crimson-M600': palette.crimson.M600,
  'secondary-fuschia-M400': palette.fuschia.M400,
  'secondary-fuschia-M600': palette.fuschia.M600,
  'secondary-lemon-M400': palette.lemon.M400,
  'secondary-lemon-M600': palette.lemon.M600,
  'secondary-lime-M400': palette.lime.M400,
  'secondary-lime-M600': palette.lime.M600,
  'secondary-mint-M400': palette.mint.M400,
  'secondary-mint-M600': palette.mint.M600,
  'secondary-orange-M400': palette.orange.M400,
  'secondary-orange-M600': palette.orange.M600,
  'secondary-pink-M400': palette.pink.M400,
  'secondary-pink-M600': palette.pink.M600,
  'secondary-purple-M400': palette.purple.M400,
  'secondary-purple-M600': palette.purple.M600,
  'secondary-royal-M400': palette.royal.M400,
  'secondary-royal-M600': palette.royal.M600,
  'secondary-teal-M400': palette.teal.M400,
  'secondary-teal-M600': palette.teal.M600
});

/* Product colors */
retVal = Object.assign(retVal, {
  'chat-orange': palette.product.chat,
  'connect-red': palette.product.connect,
  'explore-blue': palette.product.explore,
  'gather-pink': { r: 231, g: 175, b: 162 },
  'guide-pink': palette.product.guide,
  'message-green': palette.product.message,
  'sell-gold': palette.product.sell,
  'support-green': palette.product.support,
  'talk-yellow': palette.product.talk
});

module.exports = retVal;
