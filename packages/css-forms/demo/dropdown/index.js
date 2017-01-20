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

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-txt').removeClass('has-error has-warning has-success');

    if (value.length > 0) {
      $('.c-txt').addClass('has-' + value);
    }
  });

  $('form').submit(function() {
    return false;
  });
});
