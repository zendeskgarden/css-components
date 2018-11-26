$(document).ready(function() {
  Garden.rtlClasses.push('.c-scrollbar');

  $('.c-scrollbar:not(.js-not)').each(function() {
    var scrollbar = new PerfectScrollbar($(this)[0]);

    $(this).data('scrollbar', scrollbar);
  });

  var scrollbar = null;

  $('.c-playground').on('change', function() {
    $('.c-playground .c-scrollbar').each(function() {
      var scrollbar = $(this).data('scrollbar');

      if (scrollbar) {
        scrollbar.destroy();
        scrollbar = null;
      }

      new PerfectScrollbar($(this)[0]);
    });
  });

  $('.js-rtl').click(function() {
    $('.c-scrollbar:not(.js-not):not(.c-playground .c-scrollbar)').each(function () {
      $(this).data('scrollbar').destroy();
      $(this).data('scrollbar', null);

      var scrollbar = new PerfectScrollbar($(this)[0]);

      $(this).data('scrollbar', scrollbar);
    });
  });

  $('.js-size').on('change input', function() {
    var $this = $(this);
    var $scrollbar = $this.parent().siblings('.c-scrollbar');
    var $img = $scrollbar.children('img');
    var width = ($this.val() / 100) * 2560;

    $img.width(width);
    $scrollbar.data('scrollbar').update();
  }).click(function() {
    return false;
  });
});
