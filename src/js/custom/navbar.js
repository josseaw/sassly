// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

$(document).ready(function () {
  // scrolling navbar
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".js-navbar").css({ background: "transparent" });
    }
    if ($(this).scrollTop() > 80) {
      $(".js-navbar").css({
        height: "86px",
        background: "linear-gradient(52deg, #0097fe, #14358a)",
      });
    }
  });

  // button open and close
  $(".js-navbar__menu").on("click", function () {
    $(this).css({ display: "none" });
    $(".js-navbar__close").css({ display: "block" });
    $(".navbar__links").css({ display: "flex" });
    $(".navbar__sign").css({ display: "flex" });
    $(".js-navbar__links").slideDown(500);
  });
  $(".js-navbar__close").on("click", function () {
    $(this).css({ display: "none" });
    $(".js-navbar__menu").css({ display: "block" });
    $(".navbar__links").css({ display: "none" });
    $(".navbar__sign").css({ display: "none" });
    $(".js-navbar__links").slideUp(500);
  });

  // Dropdown
  // --- Desktop
  $("#js-dropdown-navbar").click(function () {
    $("#js-dropdown-arrow")
      .css({ backgroundColor: "#ac5fe6", rotate: "180deg" })
      .finish();

    $(this).addClass("active1");
    $(".js-dropdown-box").addClass("active1");
    $("#js-dropdown-menu").slideDown("medium");
  });

  $(document).mouseup(function (e) {
    var container = $("#js-dropdown-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("#js-dropdown-arrow").css({
        backgroundColor: "#cdd0d8",
        rotate: "0deg",
      });
      $("#js-dropdown-navbar").removeClass("active1");
      container.hide();
      $(".js-dropdown-box").removeClass("active1");
    }
  });

  // --- Mobile
  $("#js-dropdown").click(function () {
    $("#js-dropdown2").toggleClass("active");
    $("#js-dropdown-arrow2").toggleClass("active");
    $(".navbar__sign").toggleClass("active");
  });
});
