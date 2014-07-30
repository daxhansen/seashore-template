/***************** Slide-In Nav ******************/

$(window).load(function() {

    $('.nav_slide_button').click(function() {
        $('.flip-nav').toggleClass('open');
    });

});

document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
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

bgParallax('#top-hero', '0.6', 'up');