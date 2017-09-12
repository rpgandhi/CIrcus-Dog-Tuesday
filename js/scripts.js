$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dog-showing").toggle();
    $(".main-img").toggle();
    $("#dog-hidden").toggle();
  });
});
