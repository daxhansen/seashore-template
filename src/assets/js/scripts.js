/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button').click(function() {
        $('.flip-nav').toggleClass('open');
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
        $('.waypoint-1 #title').addClass('animated fadeInDown');
        $('.waypoint-1 #sub-title').addClass('animated fadeInUp delay-short');
    }, {
        offset: '75%'
    });

    $('.waypoint-2').waypoint(function() {
        $('#section-a .anchor').addClass('animated zoomIn');
        $('#section-a h3').addClass('animated fadeInUp');
        $('#section-a p').addClass('animated fadeInUp delay-short');
    }, {
        offset: '75%'
    });
    $('.waypoint-3').waypoint(function() {
        $('.waypoint-3.photo-wrapper').addClass('animated zoomIn delay-short');
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

    /* instantiate Stellar.js (parallax) */
    $(window).stellar();
});






