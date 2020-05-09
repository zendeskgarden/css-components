$(document).ready(function() {
  Garden.rtlClasses.push('.c-btn');

  $('.js-inset').change(function() {
    $('.c-btn').toggleClass('c-btn--focus-inset');
  });

  $('.js-rotate').click(function() {
    $(this).toggleClass('is-active').children('.c-btn__icon').toggleClass('is-rotated');
  })
});
