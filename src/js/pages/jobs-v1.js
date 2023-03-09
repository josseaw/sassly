// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

$(document).ready(function () {
  // Dropdown
  $(".js-drop__dropdown1").on("click", function () {
    $("#js-dropdown-1").css({ rotate: "180deg" }).finish();
    $(".js-drop__ul1").slideToggle(300);
  });
  $(".js-drop__dropdown2").on("click", function () {
    $("#js-dropdown-2").css({ rotate: "180deg" }).finish();
    $(".js-drop__ul2").slideToggle(300);
  });
  $(".js-drop__dropdown3").on("click", function () {
    $("#js-dropdown-3").css({ rotate: "180deg" }).finish();
    $(".js-drop__ul3").slideToggle(300);
  });

  $("#js-jobs-filter").on("click", function () {
    $("#js-filter").slideToggle(500);
  });

  $(document).mouseup(function (e) {
    var container1 = $(".js-drop__ul1");
    var container2 = $(".js-drop__ul2");
    var container3 = $(".js-drop__ul3");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container1.is(e.target) && container1.has(e.target).length === 0) {
      $("#js-dropdown-1").css({
        rotate: "0deg",
      });
      container1.hide();
    }
    if (!container2.is(e.target) && container2.has(e.target).length === 0) {
      $("#js-dropdown-2").css({
        rotate: "0deg",
      });
      container2.hide();
    }
    if (!container3.is(e.target) && container3.has(e.target).length === 0) {
      $("#js-dropdown-3").css({
        rotate: "0deg",
      });
      container3.hide();
    }
  });
});
