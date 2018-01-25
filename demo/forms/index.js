$(document).ready(function() {
  $('.js-custom').click(function() {
    $('.c-range:not(.c-playground .c-range)').toggleClass('c-range--custom');
  });

  $('.js-size').change(function() {
    $('.c-menu:not(.c-playground .c-menu):not(.c-ctl .c-menu)').toggleClass('c-menu--sm');
    $('.c-range:not(.c-playground .c-range)').toggleClass('c-range--sm');
  });

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-range:not(.c-playground .c-range)').removeClass('has-error has-warning has-success');

    if (value.length > 0) {
      $('.c-range:not(.c-playground .c-range)').addClass('has-' + value);
    }
  });
});
