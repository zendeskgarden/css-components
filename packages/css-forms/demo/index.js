$(document).ready(function() {
  $('.js-size').change(function() {
    $('.c-label:not(.c-playground .c-label)').toggleClass('c-label--lg');
    $('.c-menu:not(.c-playground .c-menu):not(.c-ctl .c-menu)').toggleClass('c-menu--sm');
    $('.c-range:not(.c-playground .c-range)').toggleClass('c-range--sm');
    $('.c-txt:not(.c-playground .c-txt)').toggleClass('c-txt--sm');
  });

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-chk').removeClass('has-error has-warning has-success');
    $('.c-range').removeClass('has-error has-warning has-success');
    $('.c-txt').removeClass('has-error has-warning has-success');

    if (value.length > 0) {
      $('.c-chk').addClass('has-' + value);
      $('.c-range').addClass('has-' + value);
      $('.c-txt').addClass('has-' + value);
    }
  });
});
