function updateNavColor($nav, value) {
  if (value) {
    var color = tinycolor(value);

    $nav
      .toggleClass('c-chrome__nav--dark', color.isDark())
      .toggleClass('c-chrome__nav--light', color.isLight())
      .css('backgroundColor', color.toHexString());
  }
}

$(document).ready(function() {
  [
    '.c-chrome__body__header__item',
    '.c-chrome__nav__fab',
    '.c-chrome__nav__item',
    '.c-chrome__subnav__item'
  ].forEach(Garden.handleFocus);

  Garden.customClasses.push('.c-chrome');
  Garden.rtlClasses.push('.c-chrome');

  $('.js-color').change(function() {
    var value = $(this).val();
    var $nav = $('.c-chrome__nav:not(.c-playground .c-chrome__nav)');

    if (
      value.toUpperCase() ===
      $(this)
        .attr('value')
        .toUpperCase()
    ) {
      $nav.removeClass('c-chrome__nav--dark c-chrome__nav--light').css('backgroundColor', '');
    } else {
      updateNavColor($nav, value);
    }
  });

  $('.js-expand').click(function() {
    $('.c-chrome__nav:not(.c-playground .c-chrome__nav)').toggleClass('c-chrome__nav--expanded');
  });

  $('.js-standalone').click(function() {
    $('.c-chrome__body__header:not(.c-playground .c-chrome__body__header)').toggleClass(
      'c-chrome__body__header--standalone'
    );
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
    var $this = $(this);

    if ($this.hasClass('c-chrome__subnav__item--header')) {
      $this.toggleClass('is-expanded');
      $this
        .next('.c-chrome__subnav__panel')
        .toggleClass('is-hidden', !$this.hasClass('is-expanded'));
    } else {
      var $parent = $this.closest('.c-chrome__subnav');

      if ($parent.length) {
        $parent.find('.c-chrome__subnav__item').removeClass('is-current');
        $this.addClass('is-current');
      }
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
});
