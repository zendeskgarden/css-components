$(document).ready(function() {
  Garden.customClasses.push('.c-loaders');
  Garden.rtlClasses.push('.c-loaders');

  const PATTERN_MATRIX = /matrix\([-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,([-+]?[0-9]*\.?[0-9]+),([-+]?[0-9]*\.?[0-9]+)\)/;
  const DATA = {};
  const animation = lottie.loadAnimation({
    container: $('#dots')[0],
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
  });
  const initData = (name, x, y) => {
    if (!(name in DATA)) {
      DATA[name] = {};
      DATA[name].X = 0;
      DATA[name].Y = 0;
    }

    if (DATA[name].X === 0) {
      DATA[name].X = x;
    }

    if (DATA[name].Y === 0) {
      DATA[name].Y = y;
    }
  }
  const addTransform = (name, key, x, y) => {
    initData(name, x, y);

    x -= DATA[name].X;
    y -= DATA[name].Y;

    if (x !== 0 || y !== 0) {
      DATA[name][key] = `${key}% { transform: translate(${Math.round(x)}px, ${Math.round(y)}px) }`;
    }
  }

  animation.setSubframe(false);

  animation.onEnterFrame = event => {
    const elements = animation.renderer.elements;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const matrix = element.finalTransform.mat.to2dCSS();
      const [x, y] = matrix.match(PATTERN_MATRIX).slice(1);

      addTransform(element.data.nm.toLowerCase(), event.currentTime, parseFloat(x), parseFloat(y));
    }
  }

  animation.onComplete = () => {
    for (let name in DATA) {
      let keyframes = `@keyframes zd-${name} {`;

      for (let key in DATA[name]) {
        keyframes = `${keyframes}\n  ${DATA[name][key]}`;
      }

      keyframes = `${keyframes}\n}`;
      console.log(keyframes);
    }
  }
});
