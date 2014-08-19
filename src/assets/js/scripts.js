/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button').click(function() {
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

    /* instantiate Stellar.js (parallax) */
    $(window).stellar();
});






