$(document).ready(function() {
  Garden.rtlClasses.push('.c-dialog');
  Garden.handleFocus('.c-dialog__close');

  $(document).on('click', '.c-dialog', function(event) {
    event.stopPropagation();
  });

  $(document).on('click', '.c-dialog__close, .c-dialog .js-close', function() {
    $(this).closest('.c-dialog').hide();
    $(this).closest('.l-backdrop').remove();
    $('body').css('overflow', '');
  });

  $(document).on('click', '.l-backdrop', function() {
    $(this).find('.c-dialog').hide();
    $(this).remove();
    $('body').css('overflow', '');
  });

  $(document).on('click', '.js-dialog', function() {
    var $this = $(this);
    var dialog = $this.attr('href');

    if ($this.hasClass('js-backdrop')) {
      dialog = $(dialog).clone().appendTo('body').wrap(function() {
        var retVal = $('<div class="l-backdrop"/>');

        $('body').css('overflow', 'hidden');

        if($this.hasClass('js-backdrop--center')) {
          retVal.addClass('l-backdrop--center');
        }

        if ($('.js-rtl').is(':checked')) {
          retVal.addClass('is-rtl');
        }

        return retVal;
      });
    }

    $(dialog).addClass('is-open').show().focus().parent('.l-backdrop').addClass('is-visible');

    setTimeout(function() {
      $(dialog).removeClass('is-open');
    }, 500);

    return false;
  });
});
