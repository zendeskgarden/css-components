$(document).ready(function() {
  $('.c-txt__input--select').click(function() {
    var $this = $(this);
    var $menu = $(this).parent().siblings('.c-menu');

    $this.toggleClass('is-open');
    $menu.toggleClass('is-open', $this.hasClass('is-open'));

    if ($menu.hasClass('is-open')) {
      $menu.parent('.u-position-relative').css('zIndex', 1);
      $menu.show();
    } else {
      $menu.hide();
      $menu.parent('.u-position-relative').css('zIndex', '');
    }

    return false;
  }).blur(function() {
    var $menu = $(this).parent().siblings('.c-menu');

    $(this).removeClass('is-open');
    $menu.removeClass('is-open').hide();
    $menu.parent('.u-position-relative').css('zIndex', '');
  });

  $('.c-txt__input--select[contenteditable]').focus(function() {
    var $this = $(this);

    setTimeout(function() {
      if (!$this.hasClass('is-open')) {
        $this.click();
      }
    }, 100);
  });

  $('.c-txt__label').click(function() {
    var $select = $('#' + $(this).attr('for'));

    $select.focus();

    return false;
  });

  $('.js-rtl').click(function() {
    $('.c-txt').toggleClass('is-rtl');
    $('.c-menu').toggleClass('is-rtl');
  });

  $('form').submit(function() {
    return false;
  });
});
