$(document).ready(function() {
  $('.c-txt__input--select')
    .click(function() {
      var $this = $(this);
      var $parent = $this.closest('.u-position-relative');
      var $menu = $parent.find('.c-menu');

      $this.toggleClass('is-open');
      $menu.toggleClass('is-open', $this.hasClass('is-open'));

      if ($menu.hasClass('is-open')) {
        $parent.css('zIndex', 1);
        $menu.attr('aria-hidden', false);
      } else {
        $menu.attr('aria-hidden', true);
        $parent.css('zIndex', '');
      }

      return false;
    })
    .blur(function() {
      var $this = $(this);
      var $parent = $this.closest('.u-position-relative');
      var $menu = $parent.find('.c-menu');

      $this.removeClass('is-open');
      $menu.removeClass('is-open').attr('aria-hidden', true);
      $parent.css('zIndex', '');
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
