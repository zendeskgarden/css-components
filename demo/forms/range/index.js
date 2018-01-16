$(document).ready(function() {
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

  $(window).resize(function() {
    $('.js-range').trigger('input');
  }).trigger('resize');
});
