$(document).ready(function() {
  Garden.rtlClasses.push('.c-avatar');

  $('.c-avatar:not(.c-avatar--system) img').each(function() {
    var source = 'images/avatar-' + Math.floor(Math.random() * 20 + 1) + '.png';

    $(this).attr('src', source);
  });

  $('.js-dark').click(function() {
    var state = $('body').hasClass('is-dark');
  });

  $('.js-count')
    .on('change input', function() {
      var count = $(this).val();
      var data = count > 0 ? count : '';

      if (count > 9) {
        data = '9+';
      }

      $('.c-avatar:not(.c-playground .c-avatar)').attr('data-badge', data);
    })
    .click(function() {
      return false;
    });

  $('.js-status').change(function() {
    var status = $(this).val();

    $('.c-avatar:not(.c-playground .c-avatar)').removeClass('is-available is-away is-active');

    if (status.length > 0) {
      $('.c-avatar:not(.c-playground .c-avatar)').addClass('is-' + status);
      $('.js-count').change();
    }

    $('.js-count').prop('disabled', status !== 'active');
  });
});
