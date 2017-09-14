$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-btn:not(.c-playground .c-btn)').toggleClass('c-btn--custom');
  });
});
