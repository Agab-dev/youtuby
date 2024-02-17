$(document).ready(function () {
  $("#search-filters-icon").click(function () {
    $(".filter-column").slideToggle("slow");
  });

  $("input:checkbox").click(function () {
    const $box = $(this);
    if ($box.is(":checked")) {
      const group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    }
  });
});
