// (function ($) {

//   "use strict";

//   // COLOR MODE 
//   $('.color-mode').click(function () {
//     $('.color-mode-icon').toggleClass('active')
//     $('body').toggleClass('dark-mode')
//   })

//   // HEADER
//   $(".navbar").headroom();

//   // PROJECT CAROUSEL
//   $('.owl-carousel').owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 10,
//     nav: true
//   });

//   // SMOOTHSCROLL
//   $(function () {
//     $('.nav-link, .custom-btn-link').on('click', function (event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top - 49
//       }, 1000);
//       event.preventDefault();
//     });
//   });

//   // TOOLTIP
//   $('.social-links a').tooltip();

// })(jQuery);


(function ($) {

  "use strict";

  // COLOR MODE 
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')

    // Save the preference to localStorage
    if ($('body').hasClass('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', null);
    }
  })

  // Check for saved 'darkMode' in localStorage
  let darkMode = localStorage.getItem('darkMode');

  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === 'enabled') {
    $('body').addClass('dark-mode');
    $('.color-mode-icon').addClass('active');
  } else if (darkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If the user has not visited before and their system preference is dark, enable dark mode
    $('body').addClass('dark-mode');
    $('.color-mode-icon').addClass('active');
  }

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);