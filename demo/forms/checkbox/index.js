$(document).ready(function() {
  Garden.customClasses.push('.c-chk__label');
  Garden.rtlClasses.push(
    '.c-chk__label',
    '.c-chk__hint',
    '.c-chk__message'
  );

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-chk__message:not(.c-playground .c-chk__message)').removeClass('c-chk__message--error c-chk__message--warning c-chk__message--success');

    if (value.length > 0) {
      $('.c-chk__message:not(.c-playground .c-chk__message)').addClass('c-chk__message--' + value);
    }
  });

  $('.c-chk__input:not(.c-ctl .c-chk__input)').click(function(event) {
    if (event.altKey && !$(this).is(':checked')) {
      $(this).prop('indeterminate', true);
    }
  });

  $('.c-chk__input[indeterminate]').each(function() {
    $(this).prop('indeterminate', true);
  });

  var keyboard = true;

  $(document).on('mouseup', '.c-chk__label', function() {
    keyboard = false;
  });

  $(document).on('focus', '.c-chk__input', function() {
    $(this).siblings('.c-chk__label').toggleClass('is-focused', keyboard);
    keyboard = true;
  }).on('blur', '.c-chk__input', function() {
    $(this).siblings('.c-chk__label').removeClass('is-focused');
  });
});
