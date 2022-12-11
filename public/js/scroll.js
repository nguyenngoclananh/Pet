$(window).scroll(function () {
    if ($(window).scrollTop() >= 800) {
        $('div').addClass('fixed-header');
        $('div').addClass('visible-title');
    }
    // else {
    //     $('div').removeClass('wrapper-header');
    //     $('div').removeClass('wrapper-header');
    // }
});