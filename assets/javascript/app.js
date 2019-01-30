$(document).ready(function () {
    // var didScroll;

    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $("header").outerHeight();

    // // on scroll, let the interval function know the user has scrolled
    // $(window).scroll(function (event) {
    //     didScroll = true;
    // });
    // // run hasScrolled() and reset didScroll status
    // setInterval(function () {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);

    // function hasScrolled() {
    //     var st = $(this).scrollTop();

    //     if (Math.abs(lastScrollTop - st) <= delta)
    //         return;

    //     // If current position > last position AND scrolled past navbar...
    //     if (st > lastScrollTop && st > navbarHeight) {
    //         // Scroll Down
    //         $("header").removeClass("nav-down").addClass("nav-up");
    //     } else {
    //         // Scroll Up
    //         // If did not scroll past the document (possible on mac)...
    //         if (st + $(window).height() < $(document).height()) {
    //             $("header").removeClass("nav-up").addClass("nav-down");
    //         }
    //     }

    //     lastScrollTop = st;
    // }

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
});