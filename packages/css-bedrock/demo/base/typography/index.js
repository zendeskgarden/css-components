$(document).ready(function() {
  $(".js-text").change(function() {
    $(".js-sample").html($(this).val());
  }).change();
});
