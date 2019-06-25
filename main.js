
// import('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js');
import("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");

{/* <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script> */ }
import('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js');
// jQuery.noConflict();


     window.$(document).ready(function () {
        var $window = $(window);
        $nav = $('nav');
        $services = document.getElementsByClassName("services-container");

        function resize() {

            if ($window.width() <= 768) {
                 $nav.removeClass('fixed-bottom').addClass('sticky-top');
            }
            else if ($window.width() > 768) {
                $nav.removeClass('sticky-top').addClass('fixed-bottom');
            }

            if ($window.width() <= 768) {
                $(".services-container").addClass('flex-column');
           }
           else if ($window.width() > 768) {
            $(".services-container").removeClass('flex-column');
           }
        }
        $window.resize(resize).trigger('resize');
     });


particlesJS.load('particles-js', 'assets/particles-js.json', function () {
    console.log('callback - particles.js config loaded');
});


$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable  #Services

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;   
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    // alert(scrollDistance);
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        // alert($(this).position().top);
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation a.active').removeClass('active');
                    $('.navigation a').eq(i).addClass('active');
            }
    });
}).scroll();