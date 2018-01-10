$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-menu:not(.c-playground .c-menu)').toggleClass('c-menu--custom');
  });

  $('.js-size').change(function() {
    $('.c-menu:not(.c-playground .c-menu):not(.c-ctl .c-menu)').toggleClass('c-menu--sm');
  });

  $(document).on('click', '.c-menu__item:not(.c-menu__item--header):not(.c-ctl .c-menu__item)', function() {
    $(this).toggleClass('is-checked');
  });
});
