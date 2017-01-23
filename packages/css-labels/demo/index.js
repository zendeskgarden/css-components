$(document).ready(function() {
  $('.js-removable').click(function() {
    $('.c-label').toggleClass('c-label--remove', $(this).is(':checked'));
  });

  $('.js-rtl').click(function() {
    $('.c-label:not(.c-ctl .c-label)').toggleClass('is-rtl');
  });

  $('.js-size').change(function() {
    var value = $(this).val();

    $('.c-label').removeClass('c-label--sm c-label--lg');

    if (value.length > 0) {
      $('.c-label').addClass('c-label--' + value);
    }
  });
});
