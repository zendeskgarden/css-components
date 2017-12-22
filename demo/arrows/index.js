$(document).ready(function() {
  $('.js-border').click(function() {
    $('.c-main .c-menu').toggleClass('u-bc-transparent', !$(this).is(':checked'));
  });

  $('.js-box-shadow').click(function() {
    $('.c-main .c-menu').toggleClass('u-bs-none', !$(this).is(':checked'));
  });
});
