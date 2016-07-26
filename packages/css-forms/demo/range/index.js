$(document).ready(function() {
  var keyboard = true;

  $('.c-range__input, .c-range__label').mousedown(function() {
    keyboard = false;
  });

  $('.c-range__input').focus(function() {
    $(this).parent('.c-range').toggleClass('is-focused', keyboard);
    keyboard = true;
  }).blur(function() {
    $(this).parent('.c-range').removeClass('is-focused');
  });

  $('.c-range__input').on('input', function() {
    $(this).pseudo();

    var $this = $(this);
    var min = $this.attr('min') || 0;
    var max = $this.attr('max');

    if (max && (parseInt(max) < parseInt(min))) {
      max = 100;
    }

    var value = max ? ~~(100 * ($this.val() - min) / (max - min)) : $this.val();
    var backgroundSize = value + '%';

    $(this).pseudo(':-webkit-slider-runnable-track', 'background-size', backgroundSize);
  }).trigger('input');

  $('.js-rtl').click(function() {
    $('.c-range').toggleClass('is-rtl');
  });
});
