/* https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping */

var retVal = {
  'thin': 100,
  'extralight': 200,
  'light': 300,
  'regular': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700,
  'extrabold': 800,
  'black': 900
};

/* Aliases */
retVal = Object.assign(retVal, {
  'ultralight': retVal['extralight'],
  'ultrabold': retVal['extrabold'],
  'heavy': retVal['black']
});

module.exports = retVal;
