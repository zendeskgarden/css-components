$(document).ready(function() {
  Garden.customClasses.push('.c-tab');
  Garden.rtlClasses.push('.c-tab');

  $('.c-tab__list__item').click(function() {
    var $parent = $(this).parent('.c-tab__list:not(.js-demo)');

    if ($parent.length) {
      $parent.children('.c-tab__list__item').removeClass('is-selected');
      $(this).addClass('is-selected');
    }
  });

  $('.c-tab__list__item').mousedown(function() {
    $(this).blur();

    return false;
  });

  $('.c-tab__list__item').keydown(function(event) {
    if (event.which === 13 || event.which === 32) {
      $(this).children('a')[0].click();
    }
  });

  $('.c-tab__list__item a').click(function() {
    $(this).parent().click();

    return $(this).parents('.c-nav').length > 0;
  });
});
