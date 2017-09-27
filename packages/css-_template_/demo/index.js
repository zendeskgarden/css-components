$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-template:not(.c-playground .c-template)').toggleClass('c-template--custom');
  });

  $('.js-rtl').click(function() {
    $('.c-template:not(.c-playground .c-template)').toggleClass('is-rtl');
  });
});
