$(document).ready(function () {
  $(".clickable").click(function () {
    $(this).toggle();
    $(this).closest("div");
  });



  // $("button#blue").click(function () {
  //   $("body").removeClass();
  //   $("body").addClass("blue-background");
  // });
  // $("button#green").click(function () {
  //   $("body").removeClass();
  //   $("body").addClass("green-background");
  // });
  // $("button#red").click(function () {
  //   $("body").removeClass();
  //   $("body").addClass("red-background");
  // });
});
