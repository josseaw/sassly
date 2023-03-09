// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

$(document).ready(function () {
  let sections = {};
  $('section').each((_, e) => {
    sections[e.id] = e.offsetTop;
  });

  // Sidebar Menu Active Depend on Which Section
  $(window).scroll(function () {
    for (let key in sections) {
      if ($(window).scrollTop() >= sections[key]) {
        $('.js-tabs-nav-wrap').removeClass('active');
        $(`.js-tabs-nav-wrap[href="#${key}"]`).addClass('active');
      }
    }
  });

  // Sidebar Menu Scroll and Show, Only for Mobile View
  // Sidebar Will Only Show Between Content Div
  $(window).scroll(function () {
    if ($(window).width() < 576) {
      if ($(window).scrollTop() <= 250) {
        $('.style-guide-sidebar').fadeOut(500);
      } else if ($(window).scrollTop() >= 16250) {
        $('.style-guide-sidebar').fadeOut(500);
      } else {
        $('.style-guide-sidebar').show();
      }
    }
  });

  // Refresh Browser when Resize
  // Fix Bug Unable to See Sidebar when Resize Small Screen to Bigger Screen
  $(window).resize(function () {
    if ($(window).width() > 576) {
      location.reload(true);
    }
  });
});
