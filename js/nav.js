(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 750);
    });

    // Active link switching
    $(window).scroll(function () {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 20;

        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })

    })

  })

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
