
$(document).ready(function () {

    //меню
    (function () {
        $('.menu-burger').on('click',function (e) {
            e.preventDefault();
            let $this = $(this),
                container = $this.closest('.header'),
                menuDisplay = container.find('.nav__list'),
                menuCross = container.find('.menu-burger'),
                menuStyle = container.find('.laptop_cover');

            menuDisplay.slideToggle("slow");
            menuCross.toggleClass("menu-burger_active");
            menuStyle.toggleClass("laptop_cover_active");
        });
    }());

});

