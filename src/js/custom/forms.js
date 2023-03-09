// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

$(document).ready(function () {
  // Dropdown
  $(".js-drop__dropdown").on("click", function () {
    // console.log("hello");
    $(".js-drop__ul").slideToggle(300);
  });

  // Textarea with current
  $(".items__inputs-area-error--textarea").keyup(function () {
    var characterCount = $(this).val().length,
      current = $("#current-error");

    current.text(characterCount);
  });
  $(".items__inputs-area--textarea").keyup(function () {
    var characterCount = $(this).val().length,
      current = $("#current");

    current.text(characterCount);
  });
});
