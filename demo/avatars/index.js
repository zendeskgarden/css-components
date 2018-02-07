$(document).ready(function() {
  $('.js-dark').click(function() {
    var state = $('body').hasClass('is-dark');

    $('.c-avatar:not(.c-playground .c-avatar)').toggleClass('c-avatar--borderless', state);
  });
});
