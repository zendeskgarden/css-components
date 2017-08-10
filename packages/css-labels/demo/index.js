$(document).ready(function() {
  $('.js-resize').on('input', function() {
    $('.js-txt').css('width', $(this).val() + '%');
  });

  $('.js-resize').on('change', function() {
    $(this).trigger('input');
  });
});
