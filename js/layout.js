/*
var distanceToSocial = $('.social-block').offset().top;

$(document).scroll(function() {
    var fromTop = ($(document).scrollTop());

    if ($(document).scrollTop() >= distanceToSocial) {
        $('.social-block').css("top", fromTop);
    } else {
        return false;
    }
});

$(window).scroll(function () {
    var $socblock = $(".social-block");
    var top = $socblock.offset().top - parseFloat($socblock.css("margin-top").replace(/auto/, 0));;
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y >= top) {
            $socblock.addClass("stuck");
        }
        else {
            $socblock.removeClass("stuck");
        }
    });
});   FIX OR DELETE*/ 
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    var $socblock = $(".social-block");
    $(window).scroll(function() {

        if (window.scrollY >= $socblock.offset().top) {
            $socblock.css("position", "fixed").css("top", "50px");
        }
        if (window.scrollY < $socblock.offset().top) {
            $socblock.css({
                position: "absolute",
                top: "0"
            });
        }
    });
    /*
        var $socblock = $(".social-block"),
            $window = $(window),
            offset = $socblock.offset();

        $(window).scroll(function() {
            if ($window.scrollTop() >= offset.top) {
                $socblock.addClass("fixed");

            } else {
                $socblock.removeClass("fixed");

            }
        });FIX OF DELETE*/
});