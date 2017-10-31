$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome)').toggleClass('c-chrome--custom');
  });

  $('.js-expand').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome) .c-chrome__nav').toggleClass('c-chrome__nav--expanded');
  });

  $('.js-standalone').click(function() {
    var $parent = $(this).closest('div');

    if ($parent.length) {
      $parent.find('.c-chrome__body__header').toggleClass('c-chrome__body__header--standalone');
    }
  });

  $(document).on('click', '.c-chrome__nav__item:not(.c-chrome__nav__item--logo)', function() {
    var $parent = $(this).parent('.c-chrome__nav');

    if ($parent.length) {
      $parent.children('.c-chrome__nav__item').removeClass('is-current');
      $(this).addClass('is-current');
    }

    return false;
  });

  $(document).on('click', '.c-chrome__subnav__item', function() {
    var $parent = $(this).parent('.c-chrome__subnav');

    if ($parent.length) {
      $parent.children('.c-chrome__subnav__item').removeClass('is-current');
      $(this).addClass('is-current');
    }

    return false;
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
      }

      return false;
    }
  });

  $(document).click(function() {
    $('.c-chrome__body__header__item').removeClass('is-active');
  });

  $(document).on('focus', '.c-chrome__body__header__item *', function(event) {
    event.stopPropagation();
  });

  $('.c-chrome').toggleClass('c-chrome--dark', window.getUrlParameter('mode') === 'dark');
  $('.c-chrome').toggleClass('is-rtl', window.getUrlParameter('dir') === 'rtl');
});
