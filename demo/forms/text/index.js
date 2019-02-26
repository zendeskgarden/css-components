$(document).ready(function() {
  Garden.customClasses.push('.c-txt__input');
  Garden.rtlClasses.push(
    '.c-txt',
    '.c-txt__input',
    '.c-txt__label',
    '.c-txt__hint',
    '.c-txt__message'
  );
  Garden.smClasses.push(
    '.c-txt__input',
    '.c-txt__label',
    '.c-txt__hint'
  );

  $('.js-bare').change(function() {
    $('.c-txt__input:not(.c-playground .c-txt__input):not(.c-txt__input--media__body)').toggleClass('c-txt__input--bare');
  });

  $('.js-inset').change(function() {
    $('.c-txt__input:not(.c-playground .c-txt__input):not(.c-txt__input--media__body)').toggleClass('c-txt__input--focus-inset');
  });

  $('.js-validation').change(function() {
    var value = $(this).val();

    $('.c-txt__input:not(.c-playground .c-txt__input)').removeClass('c-txt__input--error c-txt__input--warning c-txt__input--success');
    $('.c-txt__message:not(.c-playground .c-txt__message)').removeClass('c-txt__message--error c-txt__message--warning c-txt__message--success');

    if (value.length > 0) {
      $('.c-txt__input:not(.c-playground .c-txt__input)').addClass('c-txt__input--' + value);
      $('.c-txt__message:not(.c-playground .c-txt__message)').addClass('c-txt__message--' + value);
    }
  });

  // Override [type="file"] focus for FireFox, which only focuses "browse".
  $(document).on('focus', '.c-txt__input[type="file"]', function() {
    $(this).addClass('is-focused');
  }).on('blur', '.c-txt__input[type="file"]', function() {
    $(this).removeClass('is-focused');
  });

  $(document).on('focus', '.c-txt__input--media input', function() {
    $(this).parent().addClass('is-focused');
  }).on('blur', '.c-txt__input--media input', function() {
    $(this).parent().removeClass('is-focused');
  });

  $(document).on('click', '.c-txt__input--media', function() {
    $(this).children('input').focus();
  });
});
