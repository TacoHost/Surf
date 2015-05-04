function blurImage() {
    var wallpaperWidth = $(".wallpaper-block").css("width"); //taking width of wallpaper
    $(".js-blurred-image").css("width", wallpaperWidth); //implementing width to blurred image
}
$(window).resize(function () {
    blurImage();
});

var distanceToSocial = $('.social-block').offset().top, $window = $(window);

$window.scroll(function () {
    if ($window.scrollTop() >= distanceToSocial) {
        $('.social-block').css("top", "20px");
    } else {
        $('.social-block');
    }
});