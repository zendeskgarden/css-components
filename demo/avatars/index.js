$(document).ready(function() {
  Garden.rtlClasses.push('.c-avatar');

  $('.c-avatar:not(.c-avatar--system) img').each(function() {
    var source = 'images/avatar-' + Math.floor(Math.random() * 20 + 1) + '.png';

    $(this).attr('src', source);
  });

  $('.js-dark').click(function() {
    var state = $('body').hasClass('is-dark');
  });

  $('.js-status').change(function() {
    var status = $(this).val();

    $('.c-avatar:not(.c-playground .c-avatar)').removeClass('is-online is-away is-active');

    if (status.length > 0) {
      $('.c-avatar:not(.c-playground .c-avatar)').addClass('is-' + status);
    }
  });
});
