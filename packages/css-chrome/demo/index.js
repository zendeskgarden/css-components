$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome)').toggleClass('c-chrome--custom');
  });

  $('.js-rtl').click(function() {
    $('.c-chrome:not(.c-playground .c-chrome)').toggleClass('is-rtl');
  });
});
