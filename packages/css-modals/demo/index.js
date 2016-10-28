$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-daintree u-fg-white');
    $('.c-dialog').toggleClass('c-dialog--dark');
    $('.c-btn').toggleClass('c-btn--dark');
  });

  $('.js-rtl').click(function() {
    $('.c-dialog').toggleClass('is-rtl');
  });

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

    $(dialog).addClass('is-open').show().parent('.l-backdrop').addClass('is-visible');

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

  $(document).on('click', '.c-dialog', function(event) {
    event.stopPropagation();
  });
});
