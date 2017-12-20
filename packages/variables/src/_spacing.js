const base = 20;
const retVal = {
  '': `${base}px`,
  'lg': `${base * 1.5}px`,
  'sm': `${base / 2}px`,
  'xl': `${base * 2}px`,
  'xs': `${base / 4}px`,
  'xxs': `${base / 10}px`
};

module.exports = retVal;
