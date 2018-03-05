$(document).ready(function() {
  Garden.customClasses.push('.c-btn');
  Garden.darkClasses.push('.c-btn');
  Garden.smClasses.push('.c-btn');
  Garden.rtlClasses.push('.l-btn-group');
  Garden.handleFocus('.c-btn');

  $(document).on('click', '.l-btn-group[role=tablist] .c-btn:not(:disabled):not(.is-disabled)', function() {
    $(this).addClass('is-selected').siblings('.c-btn').removeClass('is-selected');
  });
});
