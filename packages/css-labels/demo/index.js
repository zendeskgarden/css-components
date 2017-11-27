$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-label:not(.c-playground .c-label)').toggleClass('c-label--custom');
  });

  $('.js-resize').on('input', function() {
    $('.js-txt').css('width', $(this).val() + '%');
  });

  $('.js-resize').on('change', function() {
    $(this).trigger('input');
  });
});
