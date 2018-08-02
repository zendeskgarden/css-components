$(document).ready(function() {
  $('.js-animate').click(function() {
    const isChecked = $(this).is(':checked');

    $('.js-dots').toggleClass('o-loader--dots', isChecked);
    $('.js-spinner').toggleClass('o-loader--spinner', isChecked);

    if (isChecked) {
      lottie.play();
    } else {
      lottie.stop();
    }
  });

  $('.js-color').change(function() {
    const value = $(this).val();

    if (value) {
      $('.o-loader--dots, .o-loader--spinner').css('color', value);
    }
  });

  $('.js-size').on('change input', function() {
    const size = $(this).val();

    $('.js-lottie').css('width', size);
    $('.js-dots, .js-spinner').css('fontSize', size);
  }).click(function() {
    return false;
  });

  $('.js-speed').on('change input', function() {
    const speed = parseFloat($(this).val());

    lottie.setSpeed(speed + 1);

    const duration = parseFloat(1 / (speed + 1));

    if (isFinite(duration)) {
      $('.js-dots circle, .js-spinner circle').css({
        animationDuration: duration + 's',
        animationPlayState: 'running'
      });
    } else {
      $('.js-dots circle, .js-spinner circle').css('animationPlayState', 'paused');
    }
  });

  const PATTERN_MATRIX = /matrix\([-+]?\d*\.?\d+,[-+]?\d*\.?\d+,[-+]?\d*\.?\d+,[-+]?\d*\.?\d+,([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\)/;
  const PATTERN_PATH = /C*.([-+]?\d*\.?\d*),([-+]?\d*\.?\d*)$/;
  const KEYFRAMES = {};
  const LOOP = true;
  const AUTOPLAY = false;
  const PATH = 'bodymovin/spinner.json';
  const SUBFRAME = false;
  const SPEED = 1;

  if ($('.js-lottie').length) {
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
          y -= 5;
        }

        KEYFRAMES[name].Y = y;
      }
    };
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
    };
    const addDash = (name, key, rotate, length, x, y) => {
      initData(name, 0, 0);
      rotate = Math.round(rotate - 90);
      length = Math.round(length / 7.5);

      KEYFRAMES[name][key] = `${key}% { stroke-dasharray: ${length} 250; transform: rotate(${rotate}deg); }`;
    };
    const toDegrees = (x, y) => {
      const radians = Math.atan2(y, x);
      const degrees = radians * (180 / Math.PI);
      let retVal = degrees + 90;

      if (x < 0 && y < 0) {
        retVal += 360;
      }

      return retVal;
    }

    animation.setSubframe(SUBFRAME);
    animation.setSpeed(SPEED);

    animation.onEnterFrame = event => {
      const elements = animation.renderer.elements;

      elements.forEach(element => {
        const name = element.data.nm.toLowerCase();

        if (animation.animationData.nm.toLowerCase() === 'spinner') {
          const $svg = $(animation.wrapper);
          const $path = $svg.find('path');
          const path = $path.attr('d');

          if (path) {
            const matches = path.match(PATTERN_PATH);

            if (matches) {
              const [x, y] = matches.slice(1);
              const degrees = toDegrees(x, y);
              const radius = $svg.width() / 2;
              const offset = 2 * Math.PI * radius * (degrees / 360);

              addDash(name, event.currentTime, degrees, $path[0].getTotalLength(), x, y);
            }
          }
        } else {
          const matrix = element.finalTransform.mat.to2dCSS();
          const [x, y] = matrix.match(PATTERN_MATRIX).slice(1);

          addTransform(name, event.currentTime, parseFloat(x), parseFloat(y));
        }
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

    animation.addEventListener('DOMLoaded', function() {
      $('.js-animate').triggerHandler('click');
    });
  } else {
    $('.js-animate').triggerHandler('click');
  }
});
