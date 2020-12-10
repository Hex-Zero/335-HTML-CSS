$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
    $(".max-nav-overlay").toggleClass("show");
  });
  $(".max-nav-overlay").click(function () {
    $(".animated-icon1").click();
  });
});
