$(document).ready(function() {
  $('.js-animate').click(function() {
    const isChecked = $(this).is(':checked');

    $('.js-dots').toggleClass('o-loader-dots', isChecked);

    if (isChecked) {
      lottie.play();
    } else {
      lottie.stop();
    }
  });

  $('.js-color').change(function() {
    const value = $(this).val();

    if (value) {
      const color = tinycolor(value);

      $('.o-loader-dots').css('color', value);
    }
  });

  $('.js-size').on('change input', function() {
    const size = $(this).val();

    $('.js-lottie').css('width', size);
    $('.js-dots').css({
      width: size,
      height: size * .9
    });
  }).click(function() {
    return false;
  });

  $('.js-speed').on('change input', function() {
    const speed = parseFloat($(this).val());

    lottie.setSpeed(speed + 1);

    const duration = parseFloat(1 / (speed + 1));

    if (isFinite(duration)) {
      $('.js-dots *').css({
        animationDuration: duration + 's',
        animationPlayState: 'running'
      });
    } else {
      $('.js-dots *').css('animationPlayState', 'paused');
    }
  });

  const PATTERN_MATRIX = /matrix\([-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,[-+]?[0-9]*\.?[0-9]+,([-+]?[0-9]*\.?[0-9]+),([-+]?[0-9]*\.?[0-9]+)\)/;
  const KEYFRAMES = {};
  const LOOP = true;
  const AUTOPLAY = false;
  const PATH = 'dots.json';
  const SUBFRAME = false;
  const SPEED = 1;
  const animation = lottie.loadAnimation({
    container: $('.js-lottie')[0],
    loop: LOOP,
    autoplay: AUTOPLAY,
    path: PATH
  });
  const initData = (name, x, y) => {
    if (!(name in KEYFRAMES)) {
      KEYFRAMES[name] = {};
      KEYFRAMES[name].X = 0;
      KEYFRAMES[name].Y = 0;
    }

    if (KEYFRAMES[name].X === 0) {
      KEYFRAMES[name].X = x;
    }

    if (KEYFRAMES[name].Y === 0) {
      if (name === 'yellow' && y !== 0) {
        // Compensate for lower starting dot.
        y -= 4.375;
      }

      KEYFRAMES[name].Y = y;
    }
  }
  const addTransform = (name, key, x, y) => {
    initData(name, x, y);

    x -= KEYFRAMES[name].X;
    y -= KEYFRAMES[name].Y;

    if (x !== 0 || y !== 0) {
      x = Math.round(x);
      y = Math.round(y);

      if (y === 0) {
        KEYFRAMES[name][key] = `${key}% { transform: translate(${x}px); }`;
      } else {
        KEYFRAMES[name][key] = `${key}% { transform: translate(${x}px, ${y}px); }`;
      }
    }
  }

  animation.setSubframe(SUBFRAME);
  animation.setSpeed(SPEED);

  animation.onEnterFrame = event => {
    const elements = animation.renderer.elements;

    elements.forEach(element => {
      const matrix = element.finalTransform.mat.to2dCSS();
      const [x, y] = matrix.match(PATTERN_MATRIX).slice(1);

      addTransform(element.data.nm.toLowerCase(), event.currentTime, parseFloat(x), parseFloat(y));
    });
  }

  animation.onLoopComplete = (event) => {
    if (event.currentLoop === 1) {
      Object.keys(KEYFRAMES).forEach(name => {
        let keyframes = `@keyframes zd-${name} {`;
        let keys = Object.keys(KEYFRAMES[name]).filter(key => (key !== 'X' && key !== 'Y'));

        keys.forEach(key => {
          keyframes = `${keyframes}\n  ${KEYFRAMES[name][key]}`;
        });

        keyframes = `${keyframes}\n}`;
        console.log(keyframes);
      });
    }
  }

  animation.addEventListener('DOMLoaded', () => {
    $('.js-animate').triggerHandler('click');
  });
});
