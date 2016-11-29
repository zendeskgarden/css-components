$(document).ready(function() {
  $('.js-dark').click(function() {
    $('html').toggleClass('u-bg-daintree u-fg-white');
    $('.c-tab').toggleClass('c-tab--dark');
    $('.c-tab__panel').toggleClass('u-bg-algae u-bg-snow u-bc-algae u-bc-anti-flash-white');
  });

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
