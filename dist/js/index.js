
//сдайдер
$(document).ready(function () {
    (function () {
        function changeSlide(item, tab, itemActive) {
            tab.addClass('active_tab').siblings().removeClass('active_tab');
            itemActive.fadeOut(200, function () {
                item.fadeIn(200, function () {
                    $(this).addClass('slide_active').siblings().removeClass('slide_active');
                });
            });
        }

        $('.slider__tab').on('click', function (event) {
            event.preventDefault();
            let
                $this = $(this),
                item = $this.closest('.slider__tab'),
                container = $this.closest('.slider'),
                content = container.find('.slide'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.slide_active');

            changeSlide(reqItem, item, activeItem);
        });
        $(".controls_right").click(function () {
            let $this = $(this),
                container = $this.closest('.slider'),
                item = container.find('.slider__tab'),
                slide = container.find('.slide'),
                itemActive = item.filter('.active_tab'),
                slideActive = slide.filter('.slide_active'),
                ndx = itemActive.index(),
                reqItem = slide.eq(ndx + 1),
                reqTab = item.eq(ndx + 1);

            if (ndx === 2) {
                let reqItem = slide.eq(0),
                    reqTab = item.eq(0);
                changeSlide(reqItem, reqTab, slideActive);
            } else {
                changeSlide(reqItem, reqTab, slideActive);
            }
        });
        $(".controls_left").click(function () {
            let $this = $(this),
                container = $this.closest('.slider'),
                item = container.find('.slider__tab'),
                slide = container.find('.slide'),
                itemActive = item.filter('.active_tab'),
                slideActive = slide.filter('.slide_active'),
                ndx = itemActive.index(),
                reqItem = slide.eq(ndx - 1),
                reqTab = item.eq(ndx - 1);

            if (ndx === 0) {
                let reqItem = slide.eq(2),
                    reqTab = item.eq(2);
                changeSlide(reqItem, reqTab, slideActive);
            } else {
                changeSlide(reqItem, reqTab, slideActive);
            }
        });
    }());


    //меню
    (function () {
        $('.menu-burger').on('click', function (e) {
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

//табы на tablet

    (function () {
        $('.about__text').on('click', function (event) {
            event.preventDefault();
            let
                $this = $(this),
                item = $this.closest('.about__laptop__item'),
                container = $this.closest('.about__laptop'),
                content = container.find('.about__laptop__cover'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.about__laptop__cover_active');
            item.addClass('about__laptop__item_active').siblings().removeClass('about__laptop__item_active');
            activeItem.fadeOut(100, function () {
                reqItem.fadeIn(100, function () {
                    $(this).addClass('about__laptop__cover_active').siblings().removeClass('about__laptop__cover_active')
                });
            });
        });
    }());

//табы на mobile тарифы

    (function () {
        $('.mobile__tab').on('click', function (event) {
            event.preventDefault();
            let
                $this = $(this),
                item = $this.closest('.mobile__tab'),
                container = $this.closest('.tariff'),
                content = container.find('.mobile'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.mobile_active');
            item.addClass('mobile__tab_active').siblings().removeClass('mobile__tab_active');
            activeItem.fadeOut(100, function () {
                reqItem.fadeIn(100, function () {
                    $(this).addClass('mobile_active').siblings().removeClass('mobile_active')
                });
            });
        });
    }());

// тач на мобилку

    (function () {

        // тач на тарифы

        function changeSlide(item, tab, itemActive) {
            tab.addClass('mobile__tab_active').siblings().removeClass('mobile__tab_active');
            itemActive.fadeOut(200, function () {
                item.fadeIn(200, function () {
                    $(this).addClass('mobile_active').siblings().removeClass('mobile_active');
                });
            });
        }

        let table = document.querySelector('.container_mobile'),
            beginPath,
            endPath;

        table.addEventListener("touchstart", function (e) {
            e.preventDefault();
            beginPath = e.targetTouches[0].screenX;
        });

        table.addEventListener("touchend", function (e) {
            var $this = $(this),
                container = $this.closest('.container_mobile'),
                item = container.find('.mobile__tab'),
                slide = container.find('.mobile'),
                itemActive = item.filter('.mobile__tab_active'),
                slideActive = slide.filter('.mobile_active'),
                ndx = itemActive.index();
            e.preventDefault();
            endPath = e.changedTouches[0].screenX;
            var x = beginPath - endPath;
            if (x < 0) {
                var reqItemRight = slide.eq(ndx + 1),
                    reqTabRight = item.eq(ndx + 1);

                if (ndx === 2) {
                    let reqItemRight = slide.eq(0),
                        reqTabRight = item.eq(0);
                    changeSlide(reqItemRight, reqTabRight, slideActive);
                } else {
                    changeSlide(reqItemRight, reqTabRight, slideActive);
                }
            } else {
                var reqItem = slide.eq(ndx - 1),
                    reqTab = item.eq(ndx - 1);

                if (ndx === 0) {
                    let reqItem = slide.eq(2),
                        reqTab = item.eq(2);
                    changeSlide(reqItem, reqTab, slideActive);
                } else {
                    changeSlide(reqItem, reqTab, slideActive);
                }
            }
        });


    }());


// тач на мобилу slider
    (function () {

        function changeSlide(item, tab, itemActive) {
            tab.addClass('active_tab').siblings().removeClass('active_tab');
            itemActive.fadeOut(200, function () {
                item.fadeIn(200, function () {
                    $(this).addClass('slide_active').siblings().removeClass('slide_active');
                });
            });
        }

        let div = document.querySelector('.slider'),
            beginPath,
            endPath;


        div.addEventListener("touchstart", function (e) {
            e.preventDefault();
            beginPath = e.targetTouches[0].screenX;
        });

        div.addEventListener("touchend", function (e) {
            var $this = $(this),
                container = $this.closest('.slider'),
                item = container.find('.slider__tab'),
                slide = container.find('.slide'),
                itemActive = item.filter('.active_tab'),
                slideActive = slide.filter('.slide_active'),
                ndx = itemActive.index();
            e.preventDefault();
            endPath = e.changedTouches[0].screenX;
            var x = beginPath - endPath;
            if (x < 0) {
                var reqItemRight = slide.eq(ndx + 1),
                    reqTabRight = item.eq(ndx + 1);

                if (ndx === 2) {
                    let reqItemRight = slide.eq(0),
                        reqTabRight = item.eq(0);
                    changeSlide(reqItemRight, reqTabRight, slideActive);
                } else {
                    changeSlide(reqItemRight, reqTabRight, slideActive);
                }
            } else {
                var reqItem = slide.eq(ndx - 1),
                    reqTab = item.eq(ndx - 1);

                if (ndx === 0) {
                    let reqItem = slide.eq(2),
                        reqTab = item.eq(2);
                    changeSlide(reqItem, reqTab, slideActive);
                } else {
                    changeSlide(reqItem, reqTab, slideActive);
                }
            }
        });

    }());

});


ymaps.ready(init);   //код яндес карт
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 15,
        controls: []
    });
    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055],
        {
            hintContent: 'Hello',
            balloonContent: 'We are here'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [36, 35],
            iconImageOffset: [-13, -12]
        });
    myMap.geoObjects.add(myPlacemark);
    // myMap.controls.remove('zoomControl')
    //     .remove('trafficControl')
    //     .remove('typeSelector')
    //     .remove('fullscreenControl')
    //     .remove('geolocationControl')
    //     .remove('searchControl')
    //     .remove('rulerControl');
    //  или можно прописать controls: [] как выще!! ааааа суукааа
    myMap.behaviors.disable('scrollZoom');
}