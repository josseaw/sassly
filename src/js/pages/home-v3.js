// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

$(document).ready(function () {
  // button open and close
  $(".js-buttons1").on("click", function () {
    $(".js-buttons2").removeClass("active");
    $(".js-buttons2 .text-l-bold").removeClass("active");
    $(".js-buttons3").removeClass("active");
    $(".js-buttons3 .text-l-bold").removeClass("active");
    $(this).addClass("active");
    $(".js-buttons1 .text-l-bold").addClass("active");
    $(".js-feature-detail").html("");
    $(".js-feature-detail").append(
      '<div class="home__feature__detail"><div class="home__feature__detail__gap"><div class="icon-large icon-large__box icon-large__box--g-blue"><img src="assets/media/images/trending-up.png" alt="" /></div><h3 class="#title">Real Time Data Analytics</h3></div><p class="text-m-regular">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p><button class="home__feature__detail__btn--v3 btn btn--medium btn--primary">learn more</button></div><div class="home__feature__illustration"><img src="assets/media/images/Illustration4.svg" alt="" /></div>'
    );
  });
  $(".js-buttons2").on("click", function () {
    $(".js-buttons1").removeClass("active");
    $(".js-buttons1 .text-l-bold").removeClass("active");
    $(".js-buttons3").removeClass("active");
    $(".js-buttons3 .text-l-bold").removeClass("active");
    $(this).addClass("active");
    $(".js-buttons2 .text-l-bold").addClass("active");
    $(".js-feature-detail").html("");
    $(".js-feature-detail").append(
      '<div class="home__feature__detail"><div class="home__feature__detail__gap"><div class="icon-large icon-large__box icon-large__box--g-blue"><img src="assets/media/images/lock.png" alt="" /></div><h3>Safely Security</h3></div><p class="text-m-regular">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p><button class="home__feature__detail__btn btn btn--medium btn--primary">learn more</button></div><div class="home__feature__illustration"><img src="assets/media/images/Illustration_rev.svg" alt="" /></div>'
    );
  });
  $(".js-buttons3").on("click", function () {
    $(".js-buttons2").removeClass("active");
    $(".js-buttons2 .text-l-bold").removeClass("active");
    $(".js-buttons1").removeClass("active");
    $(".js-buttons1 .text-l-bold").removeClass("active");
    $(this).addClass("active");
    $(".js-buttons3 .text-l-bold").addClass("active");
    $(".js-feature-detail").html("");
    $(".js-feature-detail").append(
      '<div class="home__feature__detail"><div class="home__feature__detail__gap"><div class="icon-large icon-large__box icon-large__box--g-blue"><img src="assets/media/images/monitor.png" alt="" /></div><h3>Multiple Platform</h3></div><p class="text-m-regular">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p><button class="home__feature__detail__btn btn btn--medium btn--primary">learn more</button></div><div class="home__feature__illustration"><img src="assets/media/images/Illustration_rev2.svg" alt="" /></div>'
    );
  });
});
