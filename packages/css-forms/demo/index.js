$(document).ready(function() {
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
