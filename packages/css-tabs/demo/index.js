$(document).ready(function() {
  $('.js-rtl').click(function() {
    $('.c-tab').toggleClass('is-rtl');
    $('.js-rtl-class').toggleClass('u-display-none');
  });

  $('.c-tab__list__item').mouseup(function() {
    $(this).blur();
  });
});
