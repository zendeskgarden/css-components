$(document).ready(function() {
  var mouse = false;

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

  $(document).on('click', '.c-table__row__cell__sortable', function() {
    var $this = $(this);

    if ($this.is('.is-asc')) {
      $this.removeClass('is-asc').addClass('is-desc');
    } else if ($this.is('.is-desc')) {
      $this.removeClass('is-desc').addClass('is-asc');
    } else {
      $this.addClass('is-asc');
    }

    $this.blur();

    return false;
  }).on('mousedown', '.c-table__row__cell__sortable', function() {
    mouse = true;
    $(this).removeClass('is-focused');
  }).on('focus', '.c-table__row__cell__sortable', function() {
    if (mouse) {
      mouse = false;
    } else {
      $(this).addClass('is-focused');
    }
  }).on('blur', '.c-table__row__cell__sortable', function() {
    $(this).removeClass('is-focused');
  });
});
