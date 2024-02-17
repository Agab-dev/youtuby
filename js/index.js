$(document).ready(function () {
  $(".first-list-element").addClass("active");

  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#toggler").click(function () {
    $("#wrap").toggleClass("toggled");
    if ($("#wrap").hasClass("toggled")) {
      $(".layer").fadeIn();
    } else {
      $(".layer").fadeOut();
    }
  });

  $(".layer").click(function () {
    $("#wrap").toggleClass("toggled");
    $(".layer").fadeOut();
  });

  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
});
