// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

$(document).ready(function () {
  // Enable This for Play Button Functionaly
  //   $('.js-player').on('click', function () {
  //     $('.about-team-video').play();
  //   });

  // Change img src Here
  // Map 1
  $('#accordionOne').on('click', function () {
    $('.js-about-map-img').attr('src', 'assets/media/images/About-V1-office-map.png');
  });

  // Map 2
  $('#accordionTwo').on('click', function () {
    $('.js-about-map-img').attr('src', 'assets/media/images/About-V1-office-map.png');
  });

  // Map 3
  $('#accordionThree').on('click', function () {
    $('.js-about-map-img').attr('src', 'assets/media/images/About-V1-office-map.png');
  });
});
