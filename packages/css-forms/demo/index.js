$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-daintree u-fg-white');
    $('.c-chk').toggleClass('c-chk--dark');
    $('.c-range').toggleClass('c-range--dark');
    $('.c-txt').toggleClass('c-txt--dark');
  });
});
