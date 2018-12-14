$(document).ready(function() {
  Garden.customClasses.push('.c-table');
  Garden.rtlClasses.push('.c-table');

  $(document).on('click', '.c-table__row--header .c-chk__input', function() {
    var $rows = $(this).parents('.c-table').find('.c-table__row:not(.c-table__row--header):not(.c-table__row--group)');
    var isSelected = $(this).is(':checked');

    $rows.toggleClass('is-selected', isSelected);
    $rows.find('.c-chk__input').prop('checked', isSelected);
  });

  $(document).on('click', '.c-table__row:not(.c-table__row--header) .c-chk__input', function() {
    $(this).parents('.c-table__row').toggleClass('is-selected');
  });

  $(document).on('focusin', '.c-table__row', function() {
    $(this).addClass('is-focused');
  }).on('blur', '.c-table__row', function() {
    $(this).removeClass('is-focused');
  });

  var mouse = false;

  $(document).on('focus', '.c-table__row__cell__overflow', function() {
    if (mouse) {
      mouse = false;
    } else {
      $(this).addClass('is-focused');
    }
  }).on('mousedown', '.c-table__row__cell__overflow', function() {
    mouse = true;
    $(this).removeClass('is-focused');
  }).on('blur', '.c-table__row__cell__overflow', function() {
    $(this).removeClass('is-focused');
  });

  $(document).on('click', '.c-table__row__cell__sortable', function() {
    var $this = $(this);

    if ($this.is('.is-ascending')) {
      $this.removeClass('is-ascending').addClass('is-descending');
    } else if ($this.is('.is-descending')) {
      $this.removeClass('is-descending');
    } else {
      $this.addClass('is-ascending');
    }
  }).on('mousedown', '.c-table__row__cell__sortable', function() {
    mouse = true;
    $(this).removeClass('is-focused');
  }).on('focus', '.c-table__row__cell__sortable', function() {
    if (mouse) {
      mouse = false;
      $(this).blur();
    } else {
      $(this).addClass('is-focused');
    }
  }).on('blur', '.c-table__row__cell__sortable', function() {
    $(this).removeClass('is-focused');
  });

  $('.js-display').change(function() {
    var value = $(this).val();
    var $table = $('.c-table:not(.c-playground .c-table)');

    $table.removeClass('c-table--sm c-table--lg');

    if (value.length > 0) {
      $table.addClass('c-table--' + value);
    }
  });

  $('.js-stripes').change(function() {
    if ($(this).is(':checked')) {
      $('.c-table:not(.c-playground .c-table)').each(function() {
        var addStripe = true;

        $('.c-table__row', $(this)).each(function() {
          var $row = $(this);

          if ($row.hasClass('c-table__row--header')) {
            addStripe = true;
          } else if ($row.hasClass('c-table__row--group')) {
            addStripe = false;
          } else {
            $row.toggleClass('c-table__row--stripe', addStripe);
            addStripe = !addStripe;
          }
        });
      });
    } else {
      $('.c-table__row').removeClass('c-table__row--stripe');
    }
  });
});
