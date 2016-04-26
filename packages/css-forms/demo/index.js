$(document).ready(function() {
  var keyboard = true;

  $('.c-chk__label').mouseup(function() {
    keyboard = false;
  });

  $('.c-chk__input').focus(function() {
    $(this).parent('.c-chk').toggleClass('is-focused', keyboard);
    keyboard = true;
  }).blur(function() {
    $(this).parent('.c-chk').removeClass('is-focused');
  });
});
