$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-dark-gray u-fg-white');
  });

  $('.js-menu-button').click(function(event) {
    $(document).trigger('click');
    $(this).parent().find('.js-menu').addClass('is-open').show();
    $(this).addClass('is-disabled');

    return false;
  });

  $(document).click(function() {
    $('.js-menu').hide().removeClass('is-open');
    $('.js-menu-button').removeClass('is-disabled');
  });

  $('.c-menu__item').mouseup(function() {
    $(this).blur();
  });
});
