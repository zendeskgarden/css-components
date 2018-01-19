$(document).ready(function() {
  $('.js-bare').change(function() {
    $('.c-txt__input:not(.c-playground .c-txt__input):not(.c-txt__input--media__body)').toggleClass('c-txt__input--bare');
  });

  $('.js-custom').click(function() {
    $('.c-chk:not(.c-playground .c-chk)').toggleClass('c-chk--custom');
    $('.c-range:not(.c-playground .c-range)').toggleClass('c-range--custom');
    $('.c-txt__input:not(.c-playground .c-txt__input)').toggleClass('c-txt__input--custom');
  });

  $('.js-size').change(function() {
    $('.c-label:not(.c-playground .c-label)').toggleClass('c-label--lg');
    $('.c-menu:not(.c-playground .c-menu):not(.c-ctl .c-menu)').toggleClass('c-menu--sm');
    $('.c-range:not(.c-playground .c-range)').toggleClass('c-range--sm');
    $('.c-txt__input:not(.c-playground .c-txt__input)').toggleClass('c-txt__input--sm');
    $('.c-txt__label:not(.c-playground .c-txt__label)').toggleClass('c-txt__label--sm');
    $('.c-txt__hint:not(.c-playground .c-txt__hint)').toggleClass('c-txt__hint--sm');
  });

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-chk:not(.c-playground .c-chk)').removeClass('has-error has-warning has-success');
    $('.c-range:not(.c-playground .c-range)').removeClass('has-error has-warning has-success');
    $('.c-txt__input:not(.c-playground .c-txt__input)').removeClass('c-txt__input--error c-txt__input--warning c-txt__input--success');
    $('.c-txt__message:not(.c-playground .c-txt__message)').removeClass('c-txt__message--error c-txt__message--warning c-txt__message--success');

    if (value.length > 0) {
      $('.c-chk:not(.c-playground .c-chk)').addClass('has-' + value);
      $('.c-range:not(.c-playground .c-range)').addClass('has-' + value);
      $('.c-txt__input:not(.c-playground .c-txt__input)').addClass('c-txt__input--' + value);
      $('.c-txt__message:not(.c-playground .c-txt__message)').addClass('c-txt__message--' + value);
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

  $(document).on('focus', '.c-txt__input--media input', function() {
    $(this).parent().addClass('is-focused');
  }).on('blur', '.c-txt__input--media input', function() {
    $(this).parent().removeClass('is-focused');
  });

  $.darkClasses.push(
    '.c-txt__input',
    '.c-txt__label',
    '.c-txt__hint',
    '.c-txt__message',
    '.c-label'
  );

  $.rtlClasses.push(
    '.c-txt__input',
    '.c-txt__label',
    '.c-txt__hint',
    '.c-txt__message'
  );
});
