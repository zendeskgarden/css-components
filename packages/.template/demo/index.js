$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-{{component}}:not(.c-playground .c-{{component}})').toggleClass('c-{{component}}--custom');
  });

  $('.js-rtl').click(function() {
    $('.c-{{component}}:not(.c-playground .c-{{component}})').toggleClass('is-rtl');
  });
});
