/*$('[data-toggle="tooltip"]').tooltip();

var distanceToSocial = $('.social-block').offset().top;

$(document).scroll(function() {
    var fromTop = ($(document).scrollTop());

    if ($(document).scrollTop() >= distanceToSocial) {
        $('.social-block').css("top", fromTop);
    } else {
        return false;
    }
});*/
$(window).scroll(function() {
    $(window).scroll(function() {
        if (window.scrollY >= 600) {
            $(".social-block").css("position", "fixed").css("top", "50px");
            console.log("HEHLELELELELELLELE");
        }
        if (window.scrollY < 600) {
            $(".social-block").css({
                position: "absolute",
                top: "0"
        });
        }
    });
});