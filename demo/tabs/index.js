$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-tab:not(.c-playground .c-tab)').toggleClass('c-tab--custom');
  });
});
