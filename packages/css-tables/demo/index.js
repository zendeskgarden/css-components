$(document).ready(function() {
  var $focus = null;

  $(document).on('blur', '.c-table__row', function() {
    if ($focus !== null) {
      $(this).toggleClass('is-focused', $(this).get(0) === $focus.get(0));
    }
  });

  $(document).on('click', '.c-table__row--header .c-chk__input', function() {
    var $rows = $(this).parents('.c-table').find('.c-table__row:not(.c-table__row--header):not(.c-table__row--group)');
    var isSelected = $(this).is(':checked');

    $rows.toggleClass('is-selected', isSelected);
    $rows.find('.c-chk__input').prop('checked', isSelected);
  });

  $(document).on('click', '.c-table__row:not(.c-table__row--header) .c-chk__input', function() {
    $(this).parents('.c-table__row').toggleClass('is-selected');
  });

  $(document).on('focus', '.c-table__row', function() {
    $(this).siblings().removeClass('.is-focused');
  });

  $(document).on('mousedown', '.c-chk', function() {
    $focus = $(this).parents('.c-table__row');
  });
});
