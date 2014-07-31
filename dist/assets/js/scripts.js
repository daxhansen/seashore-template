/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button').click(function() {
        $('.flip-nav').toggleClass('open');
    });

});

document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
});

/*  
    Set up waypoints (Waypoints.js)
    https://github.com/imakewebthings/jquery-waypoints

*/

$(document).ready(function(){
    $('.waypoint-1').waypoint(function() {
        $('.waypoint-1 #title').addClass('animated fadeInDown');
        $('.waypoint-1 #sub-title').addClass('animated fadeInUp delay-short');
    }, {
        offset: '75%'
    });

    $('.waypoint-2').waypoint(function() {
        $('#section-a h3').addClass('animated fadeInUp');
        $('#section-a p').addClass('animated fadeInUp delay-short');
    }, {
        offset: '75%'
    });
     $('.waypoint-3').waypoint(function() {
        $('.col-md-4 .photo-wrapper').addClass('animated zoomIn delay-short');
    }, {
        offset: '75%'
    });
});


function bgParallax(el, rate, direction) {
    var $el = jQuery(el),
        offset = window.scrollY,
        $threshold = $el[0].offsetTop,
        $height = $el.outerHeight(),
        speed = rate * 0.125,
        resetAmt = (($threshold-$height)*speed),

        math = function(){
            if (direction === 'up' || direction === null) {
                return 50 - (offset * speed);
            } else {
                return 50 + (offset * speed);
            }
        };
        if($el[0]) {
            $el.css('background-position-y', math() + '%');
        }
}


$(window).on('scroll', function() {
   window.requestAnimationFrame(scrollVent);
});
function scrollVent() {
    //bgParallax('#top-hero', '0.8', 'up');
}




