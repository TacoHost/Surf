$('[data-toggle="tooltip"]').tooltip();

var distanceToSocial = $('.social-block').offset().top;

$(document).scroll(function() {
    var fromTop = ($(document).scrollTop());

    if ($(document).scrollTop() >= distanceToSocial) {
        $('.social-block').css("top", fromTop);
    } else {
        return false;
    }
});