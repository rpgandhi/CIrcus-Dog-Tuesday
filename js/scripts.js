$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dog-showing").toggle();
    $(".main-img").toggle();
    $("#dog-hidden").toggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#cream").click(function() {
    $("body").removeClass();
    $("body").addClass("cream-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("button#original").click(function() {
    $("body").removeClass();
    //$("body").addClass("original-background");
  });
});
