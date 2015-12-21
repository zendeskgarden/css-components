$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-dark-gray u-fg-white');
  });

  $(".js-text").change(function() {
    $(".js-sample").html($(this).val());
  }).change();
});
