// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

$(document).ready(function () {
  // Section Why Us Settings
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.home-v2-why-btn').appendTo('.home-v2-why');
    } else {
      $('.home-v2-why-btn').appendTo('.home-v2-why-header-wrap');
    }
  });

  // Section Feature Accordion Settings
  // feature 1
  $('#accordionOne').on('click', function () {
    $('.js-home-v2-feature-img').attr('src', 'assets/media/images/Illustration4.svg');
  });

  // feature 2
  $('#accordionTwo').on('click', function () {
    $('.js-home-v2-feature-img').attr('src', 'assets/media/images/Illustration_rev.svg');
  });

  // feature 3
  $('#accordionThree').on('click', function () {
    $('.js-home-v2-feature-img').attr('src', 'assets/media/images/Illustration_rev2.svg');
  });

  // Section Integration Settings
  $(window).resize(function () {
    if ($(window).width() < 992) {
      $('.home-v2-integ-button-wrap').appendTo('.home-v2-integ');
    } else {
      $('.home-v2-integ-button-wrap').appendTo('.home-v2-integ-left');
    }
  });

  // Section Article Settings
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.home-v2-article-btn').appendTo('.home-v2-article');
    } else {
      $('.home-v2-article-btn').appendTo('.home-v2-article-header-wrap');
    }
  });
});
