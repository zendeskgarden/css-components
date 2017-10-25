$(document).ready(function() {
  $('.c-chrome__nav__item:not(.c-chrome__nav__item--logo)').click(function() {
    var $parent = $(this).parent('.c-chrome__nav');

    if ($parent.length) {
      $parent.children('.c-chrome__nav__item').removeClass('is-current');
      $(this).addClass('is-current');
    }

    return false;
  });

  $('.js-custom').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome)').toggleClass('c-chrome--custom');
  });

  $('.js-expand').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome) .c-chrome__nav').toggleClass('c-chrome__nav--expanded');
  });

  $('.js-rtl').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome)').toggleClass('is-rtl');
  });

  $('.js-solo').click(function() {
    var $parent = $(this).closest('div');

    if ($parent.length) {
      $parent.find('.c-chrome__body__header').toggleClass('c-chrome__body__header--solo');
    }
  });

  $(document).on('click', '.c-chrome__body__header__item', function() {
    var $this = $(this);
    var $menu = $this.find('.c-menu');

    if ($menu.length) {
      if ($menu.hasClass('is-open')) {
        $(document).trigger('click');
      } else {
        $(document).trigger('click');
        $menu.addClass('is-open').attr('aria-hidden', false);
        $this.addClass('is-active');
        $this.children('.c-chrome__body__header__item__icon.js-rotate').addClass('is-rotated');
      }
    }

    return false;
  });

  $(document).click(function() {
    $('.c-chrome__body__header__item').removeClass('is-active');
    $('.c-chrome__body__header__item').children('.c-chrome__body__header__item__icon').removeClass('is-rotated');
  });

  $(document).on('focus', '.c-chrome__nav__item, .c-chrome__body__header__item', function() {
    $(this).addClass('is-focused');
  }).on('blur mouseup', '.c-chrome__nav__item, .c-chrome__body__header__item', function() {
    $(this).removeClass('is-focused');
  });

  $(document).on('focus', '.c-chrome__nav__item a, .c-chrome__body__header__item a', function(event) {
    event.stopPropagation();
  });
});
