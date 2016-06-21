$(document).ready(function() {
  $('.c-btn').focus(function() {
    $(this).addClass('is-focused');
  }).blur(function() {
    $(this).removeClass('is-focused');
  }).mouseup(function() {
    $(this).removeClass('is-focused');
  });
});
