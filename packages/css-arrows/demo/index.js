$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-dark-gray u-fg-white');
    $('.c-menu').toggleClass('u-bg-oil u-fg-white');
  });

  $('.js-border').click(function() {
    $('.c-menu').toggleClass('u-menu-border');
  });

  $('.js-shadow').click(function() {
    $('.c-menu').toggleClass('u-menu-no-shadow');
  });
});
