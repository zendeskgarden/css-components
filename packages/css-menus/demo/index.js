$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-dark-gray u-fg-white');
  });

  $('.js-menu-button').click(function(event) {
    if (!$(this).hasClass('is-disabled')) {
      $(document).trigger('click');
      $(this).parent().find('.js-menu').addClass('is-open').show();
      $(this).addClass('is-disabled');
    }

    return false;
  });

  $(document).click(function() {
    $('.js-menu').removeClass('is-open').each(function() {
      this.offsetHeight; // trigger reflow
    }).hide();
    $('.js-menu-button').removeClass('is-disabled');
  });

  $('.c-btn').focus(function() {
    $(this).addClass('is-focused');
  }).blur(function() {
    $(this).removeClass('is-focused');
  }).mouseup(function() {
    $(this).removeClass('is-focused');
  });

  $('.c-menu__item').mouseup(function() {
    $(this).blur();
  });
});
