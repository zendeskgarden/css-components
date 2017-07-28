$(document).ready(function() {
  $('.js-size').change(function() {
    $('.c-menu:not(.c-playground .c-menu):not(.c-ctl .c-menu)').toggleClass('c-menu--sm');
  });
});

