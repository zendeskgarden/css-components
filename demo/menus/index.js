$(document).ready(function() {
  Garden.customClasses.push('.c-menu');
  Garden.darkClasses.push('.c-menu');
  Garden.smClasses.push('.c-menu');
  Garden.rtlClasses.push('.c-menu');

  $('.c-menu__item').mouseup(function() {
    $(this).blur();
  });

  $(document).on('click', '.c-menu__item:not(.c-menu__item--header):not(.c-ctl .c-menu__item)', function() {
    $(this).toggleClass('is-checked');
  });

  $(document).on('click', '.js-menu', function() {
    var $this = $(this);
    var $menu = $this.parent().find('.c-menu');

    if ($menu.hasClass('is-open')) {
      $(document).trigger('click');
    } else {
      $(document).trigger('click');
      $menu.addClass('is-open').attr('aria-hidden', false);
      $this.addClass('is-active');
      $this.children('.c-btn__icon').addClass('is-rotated');
    }

    return false;
  });

  $(document).click(function() {
    $('.c-menu').removeClass('is-open').each(function() {
      this.offsetHeight; // trigger reflow
    }).attr('aria-hidden', true);
    $('.js-menu').removeClass('is-active');
    $('.js-menu').children('.c-btn__icon').removeClass('is-rotated');
  });
});
