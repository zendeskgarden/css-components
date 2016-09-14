$(document).ready(function() {
  svg4everybody();

  $('.js-btn').click(function() {
    var $this = $(this);
    var dialog = $this.attr('href');

    if ($this.hasClass('js-backdrop')) {
      dialog = $(dialog).clone().appendTo('body').wrap(function() {
        if ($this.hasClass('js-transparent')) {
          return '<div class="l-backdrop l-backdrop--transparent js-dismiss"/>'
        } else {
          $('html').css('overflow', 'hidden');

          if ($this.hasClass('js-lightbox')) {
            return '<div class="l-backdrop l-backdrop--lightbox js-dismiss"/>'
          } else {
            return '<div class="l-backdrop js-dismiss"/>'
          }
        }
      });

    }

    $(dialog).show();

    return false;
  });

  $(document).on('focus', '.c-btn, .c-dialog__close', function() {
    $(this).addClass('is-focused');
  });

  $(document).on('blur', '.c-btn, .c-dialog__close', function() {
    $(this).removeClass('is-focused');
  });

  $(document).on('mouseup', '.c-btn, .c-dialog__close', function() {
    $(this).removeClass('is-focused');
  });

  $(document).on('click', '.js-close', function() {
    $(this).closest('.c-dialog').hide();
    $(this).closest('.l-backdrop').remove();
    $('html').css('overflow', '');
  });

  $(document).on('click', '.js-dismiss', function() {
    $(this).find('.js-close').trigger('click');
  });
});
