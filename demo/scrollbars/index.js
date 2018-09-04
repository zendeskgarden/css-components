$(document).ready(function() {
  Garden.customClasses.push('.c-scrollbar');
  Garden.rtlClasses.push('.c-scrollbar');

  new PerfectScrollbar('.c-scrollbar');

  var scrollbar = null;

  $('.c-playground').on('change', function() {
    if (scrollbar) {
      scrollbar.destroy();
      scrollbar = null;
    }

    scrollbar = new PerfectScrollbar('.c-playground .c-scrollbar');
  });
});
