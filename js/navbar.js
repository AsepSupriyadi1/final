$(document).ready(function () {
  // NAVBAR

  $(".nav-container .hamburger-menu").on("click", () => {
    $(".navbar ul").css("display", "flex");
    $(".navbar .cross-menu").css("display", "block");
  });

  $(".nav-container .cross-menu").on("click", () => {
    $(".navbar ul").css("display", "none");
    $(".navbar .cross-menu").css("display", "none");
  });
});
