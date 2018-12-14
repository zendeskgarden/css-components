$(document).ready(function() {
  Garden.customClasses.push('.c-menu');
  Garden.smClasses.push('.c-menu');
  Garden.rtlClasses.push('.c-menu');

  $('.c-menu__item').mouseup(function() {
    $(this).blur();
  });

  $(document).on('click', '.c-menu__item', function(event) {
    if (event.target === event.currentTarget) {
      $(this)
        .find('.c-chk__input')
        .click();
    }
  });

  $(document).on(
    'click',
    '.c-menu__item:not(.is-disabled):not(.c-menu__item--header):not(.c-ctl .c-menu__item)',
    function() {
      $(this).toggleClass('is-checked');
    }
  );

  $(document).on('click', '.js-menu', function() {
    var $this = $(this);
    var $pos = $this.offset();
    var $width = $this.outerWidth();
    var $menu = $this.parent().find('.c-menu');
    var $menuWidth = $menu.outerWidth();
    var $popper = $this.parent().find('.menu-container');

    if ($menu.hasClass('c-menu--right')) {
      var x = $width + 2;
      $popper.css('transform', 'translate3d(' + x + 'px, -89px, 0)');
    }
    if ($menu.hasClass('c-menu--left')) {
      var x = $menuWidth + 2;
      $popper.css('transform', 'translate3d(' + -x + 'px, -89px, 0)');
    }
    if ($menu.hasClass('c-menu--up')) {
      var x = $width / 2 - $menuWidth / 2;
      var y = $menu.outerHeight() + $this.outerHeight() + 2;
      $popper.css('transform', 'translate3d(' + x + 'px, ' + -y + 'px, 0)');
    }
    if ($menu.hasClass('c-menu--down')) {
      var x = $width / 2 - $menuWidth / 2;
      $popper.css('transform', 'translate3d(' + x + 'px, 0, 0)');
    }

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
    $('.c-menu')
      .removeClass('is-open')
      .each(function() {
        this.offsetHeight; // trigger reflow
      })
      .attr('aria-hidden', true);
    $('.js-menu').removeClass('is-active');
    $('.js-menu')
      .children('.c-btn__icon')
      .removeClass('is-rotated');
  });
});
