$(document).ready(function() {
  Garden.customClasses.push('.c-btn');
  Garden.smClasses.push('.c-btn');
  Garden.rtlClasses.push('.l-btn-group');
  Garden.handleFocus('.c-btn');

  $('.js-inset').change(function() {
    $('.c-btn').toggleClass('c-btn--focus-inset');
  });

  $('.js-rotate').click(function() {
    $(this).toggleClass('is-active').children('.c-btn__icon').toggleClass('is-rotated');
  })
});
