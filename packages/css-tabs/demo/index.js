$(document).ready(function() {
  $('.js-rtl').click(function() {
    $('.c-tab').toggleClass('is-rtl');
    $('.js-rtl-class').toggleClass('u-display-none');
  });

  $('.c-tab__list__item').click(function() {
    var $parent = $(this).parent('.js-tablist');

    if ($parent.length) {
      $parent.children('.c-tab__list__item').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
  });

  $('.c-tab__list__item').mouseup(function() {
    $(this).blur();
  });

  $('.c-tab__list__item a').click(function() {
    $(this).parent().click();

    return false;
  });
});
