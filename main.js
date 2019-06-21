
import('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js');
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}

{/* <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script> */ }
import('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js');
// jQuery.noConflict();


    // window.$(document).ready(function () {
        var $window = $(window);
        $nav = $('nav');
        var header = document.getElementById("nav-header");

        function resize() {

            if ($window.width() <= 768) {
                 $nav.removeClass('fixed-bottom').addClass('fixed-top');
            }
            else if ($window.width() > 768) {
                $("#nav-header").removeClass('fixed-top').addClass('fixed-bottom');
            }
        }
        $window.resize(resize).trigger('resize');
    // });


particlesJS.load('particles-js', 'assets/particles-js.json', function () {
    console.log('callback - particles.js config loaded');
});