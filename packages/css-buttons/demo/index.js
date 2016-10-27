$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-algae u-fg-white');
    $('.c-btn').toggleClass('c-btn--dark');
  });

  $('.c-btn').focus(function() {
    $(this).addClass('is-focused');
  }).blur(function() {
    $(this).removeClass('is-focused');
  }).mouseup(function() {
    $(this).removeClass('is-focused');
  });
});
