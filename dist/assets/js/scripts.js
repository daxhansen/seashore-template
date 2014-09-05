/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button, .flip-nav.open .top-nav li').click(function() {
        $('.flip-nav').toggleClass('open');
    });
    $('#slider-c').flexslider({
        animation: 'fade',
        slideshow: false
    });
    $('#section-b .flexslider').flexslider({
        animation: 'slide',
        slideshow: false,
        animationLoop: false
    });
    

});

document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
});



$(document).ready(function(){
    window.isDesktop;

    (function(){
        var $el = $('#pollMQ');
        if ($el.css('display') === 'block') {
            window.isDesktop = true;
        } else {
            window.isDesktop = false;
        }
    })();
    if(window.isDesktop) {
        /* instantiate Stellar.js (parallax) */
        //$(window).stellar();
        $.stellar({
            positionProperty: 'transform',
            hideDistantElements: false,
            horizontalOffset: 0
        });

        /** Smooth Scrolling **/
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var threshold = function() {
                        return 0;
                    };
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: (target.offset().top - threshold())
                        }, 2000);
                        return false;
                    }
                }
            });
        });
    }

    /*  
    Set up waypoints (Waypoints.js)
    https://github.com/imakewebthings/jquery-waypoints
    */
    $('.waypoint-1').waypoint(function() {
        $('.waypoint-1 .title').addClass('animated fadeInDown');
        $('.waypoint-1 .sub-title').addClass('animated fadeInUp delay-short');
    }, {
        offset: '90%'
    });

    $('.waypoint-2').waypoint(function() {
        $('#section-a .anchor').addClass('animated zoomIn');
        $('#section-a h3').addClass('animated fadeInUp');
        $('#section-a p').addClass('animated fadeInUp delay-short');
    }, {
        offset: '75%'
    });
    $('.waypoint-3').waypoint(function() {
        //$('.waypoint-3').addClass('animated');
        $('.waypoint-3').each(function(i){
            var $this = $(this);
            setTimeout(function(){
                $this.addClass('animated fadeInUp');
            }, (i*400));
        });
    }, {
        offset: '75%'
    });

    $('.waypoint-c-1').waypoint(function() {
        $('.waypoint-c-1').addClass('animated fadeIn delay-short');
    }, {
        offset: '50%'
    });

    $('.waypoint-4').waypoint(function() {
        
        $('.waypoint-4 h4').addClass('animated fadeIn');
        $('.waypoint-4 p').addClass('animated fadeIn delay-short');
        $('.waypoint-4 .large').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

    $('.waypoint-5').waypoint(function() {
        
        $('.waypoint-5').addClass('animated fadeIn');
        
    }, {
        offset: '75%'
    });

    $('.waypoint-6').waypoint(function() {
        
        $('#section-e .anchor').addClass('animated zoomIn');
        $('#section-e p').addClass('animated fadeInUp delay-short');
        
    }, {
        offset: '75%'
    });

   

});






