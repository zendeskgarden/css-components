$(document).ready(function() {
  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-txt').removeClass('has-error has-warning has-success');

    if (value.length > 0) {
      $('.c-txt').addClass('has-' + value);
    }
  });
});
