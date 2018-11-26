$(document).ready(function() {
  Garden.customClasses.push('.c-tag');
  Garden.rtlClasses.push('.c-tag');

  $('.js-size').change(function() {
    $('.c-tag:not(.c-playground .c-tag)').toggleClass('c-tag--lg');
  });

  $('.js-resize').on('input', function() {
    $('.js-txt').css('width', $(this).val() + '%');
  }).on('change', function() {
    $(this).trigger('input');
  });
});
