// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 992) {
      $('.js-hero-btn-wrap').appendTo('.hero-wrap');
    } else {
      $('.js-hero-btn-wrap').appendTo('.hero__left');
    }
  });

  // Article Section Settings
  // Nav Menu
  let marketTab = $(document).find('#menu-market');
  let techTab = $(document).find('#menu-tech');
  let growTab = $(document).find('#menu-grow');
  let allTab = $(document).find('#menu-all');

  // Nav Cards
  let marketCards = $(document).find('[data-js="market"]');
  let techCards = $(document).find('[data-js="tech"]');
  let growCards = $(document).find('[data-js="grow"]');
  let allCards = $(document).find('[data-js]');

  // Cards Container
  let marketWrap = $(document).find('#artc-market');
  let techWrap = $(document).find('#artc-tech');
  let growWrap = $(document).find('#artc-grow');
  let allWrap = $(document).find('#artc-all');

  let navWrap = $(document).find('.nav-wrap');
  let scrollWrap = $(document).find('.blog-nav');

  // Scroll Left Calculation
  let scrollWidth = scrollWrap.width();
  let windowWidth = $(window).width();
  let maxLeft = scrollWidth - windowWidth + 40;

  $(document).click(function () {
    if (marketTab.hasClass('active')) {
      marketCards.appendTo(marketWrap);
      navWrap.scrollLeft(0);
    } else if (techTab.hasClass('active')) {
      techCards.appendTo(techWrap);
      navWrap.scrollLeft(maxLeft);
    } else if (growTab.hasClass('active')) {
      growCards.appendTo(growWrap);
      navWrap.scrollLeft(maxLeft);
    } else if (allTab.hasClass('active')) {
      allCards.appendTo(allWrap);
      navWrap.scrollLeft(0);
    }
  });
});
