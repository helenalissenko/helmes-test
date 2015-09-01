var $window = $(window),
    $ul = $('ul.nav-tabs');

$(window).on('resize', function () {
    if ($window.width() < 752) {
        $ul.addClass('nav-stacked');
    }else{

        $ul.removeClass('nav-stacked')};
});