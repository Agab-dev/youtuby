$(document).ready(function () {
  $("#myBtn").click(function () {
    $("#dots").toggleClass("hidden");
    $("#more").toggleClass("hidden");
    if ($("#more").hasClass("hidden")) {
      $("#myBtn").text("عرض المزيد");
    } else {
      $("#myBtn").text("عرض عناصر أقل");
    }
  });

  $(".reply").click(function () {
    $(this).parents("div.row").next("div.card").toggle();
  });
});
