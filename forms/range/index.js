$(document).ready(function() {
  Garden.customClasses.push(
    '.c-range__input',
    '.c-range__slider'
  );
  Garden.smClasses.push(
    '.c-range__input',
    '.c-range__label',
    '.c-range__hint',
    '.c-range__slider'
  );
  Garden.rtlClasses.push(
    '.c-range',
    '.c-range__input',
    '.c-range__label',
    '.c-range__hint',
    '.c-range__message',
    '.c-range__slider'
  );
  Garden.handleFocus('.c-range__input');
  Garden.handleFocus('.c-range__slider__track__rail__thumb');

  $('.c-playground').on('change', function() {
    $('.c-range__input', this).trigger('input');
  });

  $('.js-rtl').click(function() {
    $('.c-txt--inline').toggleClass('u-float-left u-float-right');
    $('.js-range').trigger('input');
  });

  $('.js-range').on('input', function() {
    var selector = '.c-range__slider__track__rail .c-range__slider__track__rail__thumb:';
    var $this = $(this);
    var value;

    if ($this.attr('name') === 'min') {
      selector += 'first-child';
      value = $this.val();
    } else {
      selector += 'last-child';
      value = $this.val();
    }

    if (value) {
      $(selector).val(value);
    }

    $('.c-range').each(function() {
      var $range = $(this);
      var $track = $range.find('.c-range__slider__track');
      var $thumbs = $track.find('.c-range__slider__track__rail__thumb');

      if ($thumbs.length > 0) {
        var $min = $thumbs.first();
        var $max = $thumbs.last();
        var direction = $range.hasClass('is-rtl') ? 'right' : 'left';
        var min = $min.val();
        var max = $max.val();

        $min.removeAttr('style').css(direction, min + '%');
        $max.removeAttr('style').css(direction, max + '%');

        var position = (direction === 'right') ? $max.position() : $min.position();

        if (position) {
          if (direction === 'right') {
            position = position.left + 20;
          } else {
            position = position.left;
          }
        }

        $track.css({
          backgroundSize: max - min + '%',
          backgroundPosition: position
        });
      }
    });
  });

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-range__message:not(.c-playground .c-range__message)').removeClass('c-range__message--error c-range__message--warning c-range__message--success');

    if (value.length > 0) {
      $('.c-range__message:not(.c-playground .c-range__message)').addClass('c-range__message--' + value);
    }
  });

  var keyboard = true;
  var selector = '.c-range__input, .c-range__slider__track__rail__thumb';
  var updateRangeBackground = function($rangeInput) {
    var min = $rangeInput.attr('min') || 0;
    var max = $rangeInput.attr('max');

    if (max && (parseFloat(max) < parseFloat(min))) {
      max = 100;
    }

    var value = max ? (100 * ($rangeInput.val() - min) / (max - min)) : $rangeInput.val();
    var backgroundSize = value + '%';

    $rangeInput.css('background-size', backgroundSize);
  };

  $(document).on('focus', selector, function() {
    $(this).toggleClass('is-focused', keyboard);
    keyboard = true;
  }).on('blur mousedown', selector, function() {
    if (event.type === 'mousedown') {
      keyboard = false;
    }

    $(this).removeClass('is-focused');
  }).on('input', '.c-range__input', function() {
    updateRangeBackground($(this));
  });

  $('.c-range__input').trigger('input');

  $(window).resize(function() {
    $('.js-range').trigger('input');
  }).trigger('resize');
});
