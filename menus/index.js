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

      if (!$popper.closest('.c-table__row__cell--overflow').length) {
        $popper.css('transform', 'translate3d(' + x + 'px, -89px, 0)');
      }
    }
    if ($menu.hasClass('c-menu--left')) {
      var x = $menuWidth + 2;

      if (!$popper.closest('.c-table__row__cell--overflow').length) {
        $popper.css('transform', 'translate3d(' + -x + 'px, -89px, 0)');
      }
    }
    if ($menu.hasClass('c-menu--up')) {
      var x = $width / 2 - $menuWidth / 2;
      var y = $menu.outerHeight() + $this.outerHeight() + 2;

      if ($this.hasClass('js-menu--split')) {
        x = 0;
        y = $menu.outerHeight() + $this.outerHeight() + 4;
      }

      if (!$popper.closest('.c-table__row__cell--overflow').length) {
        $popper.css('transform', 'translate3d(' + x + 'px, ' + -y + 'px, 0)');
      }
    }
    if ($menu.hasClass('c-menu--down')) {
      var x = Math.max($width / 2 - $menuWidth / 2, 0); // Avoid negative numbers

      if (!$popper.closest('.c-table__row__cell--overflow').length) {
        $popper.css('transform', 'translate3d(' + x + 'px, 0, 0)');
      } else {
        // Same as css calc(2em + 1px)
        var y = $this.outerHeight() + 1;

        // Special treatment here for overflow button in tables
        // since the icon is a pseudo element we need to hint to
        // the menu what the "real" y position is and clean up
        // on animationend so as not to mess with table styles
        if (!$menu.hasClass('is-open')) {
          $popper.css('transform', 'translateY(' + y + 'px)');
          $popper.one('animationend', function() {
            $popper.css('transform', '');
          });
        }
      }
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
