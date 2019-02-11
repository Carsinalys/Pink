// ползунки
(function () {

    let crop = document.querySelectorAll('.crop'),
        contrast = document.querySelectorAll('.contrast'),
        paintbucket = document.querySelectorAll('.paintbucket'),
        cropParent = crop[0].parentElement,
        contrastParent = contrast[0].parentElement,
        paintbucketParent = paintbucket[0].parentElement,
        cropParentMobile = crop[1].parentElement,
        contrastParentMobile = contrast[1].parentElement,
        paintbucketParentMobile = paintbucket[1].parentElement,
        container = document.querySelector('.change-photo__editor'),
        currentTarget,
        listener,
        eventType,
        beginCoor,
        beginCoorPage,
        diff,
        mobileX,
        mobileXOnMove;

    //мобилкин код

    listener = function (e) {
        let moveStep = e.changedTouches[0].screenX - mobileX,
            currentElementCss = parseFloat(getComputedStyle(currentTarget).left);
        mobileXOnMove = currentElementCss + moveStep;
    };

    container.addEventListener('touchstart',function (event) {
        mobileX = event.changedTouches[0].screenX;
        currentTarget = event.target;
        eventType = event.type;
        somethingMobile();
    });

    container.addEventListener("touchend", function (event) {
        somethingMobile();
        function checkSize(value) {
            if (mobileXOnMove <= -1) {
                value.style.left = '0%';
            } else if (mobileXOnMove >= currentTarget.offsetParent.offsetWidth) {
                value.style.left = '96%';
            }
        }

        function swichFun(item) {
            item.style.left = mobileXOnMove + 'px';
            item.style.transform = 'scale(1.5)';
            setTimeout(function () {
                item.style.transform = 'scale(1)';
            }, 200);

            checkSize(item);
        }

        switch (currentTarget) {
            case crop[0]:
                swichFun(crop[0]);
                break;
            case contrast[0]:
                swichFun(contrast[0]);
                break;
            case paintbucket[0]:
                swichFun(paintbucket[0]);
                break;
            case crop[1]:
                swichFun(crop[1]);
                break;
            case contrast[1]:
                swichFun(contrast[1]);
                break;
            case paintbucket[1]:
                swichFun(paintbucket[1]);
                break;

        }
        eventType = event.type;

    });

    function somethingMobile () {
        if (eventType === 'touchstart') {
            container.addEventListener('touchmove',listener);
        } else if (eventType === 'touchend'){
            container.removeEventListener('touchmove',listener);
        }
    }

    // код на клики

    function checkSize(value) {
        if (parseFloat(getComputedStyle(value).left) <= -1) {
            value.style.left = '0%';
        } else if (parseFloat(getComputedStyle(value).left) >= currentTarget.parentElement.offsetWidth) {
            value.style.left = '96%';
        }
    }

    function swichFun(item) {
        item.style.left = beginCoor + diff + 'px';
        checkSize(item);
    }

    function currentItem (item) {
        switch (item) {
            case crop[0]:
                swichFun(crop[0]);
                break;
            case contrast[0]:
                swichFun(contrast[0]);
                break;
            case paintbucket[0]:
                swichFun(paintbucket[0]);
                break;
            case crop[1]:
                swichFun(crop[1]);
                break;
            case contrast[1]:
                swichFun(contrast[1]);
                break;
            case paintbucket[1]:
                swichFun(paintbucket[1]);
                break;
        }
    }

    container.addEventListener('dragstart', function (e) {
        currentTarget = e.target;
        beginCoorPage = e.pageX;
        currentTarget.style.transform = 'scale(1.5)';
        beginCoor = parseFloat(getComputedStyle(currentTarget).left);
    });

    container.addEventListener('drag', function (e) {
        let coor = e.pageX;
        diff = coor - beginCoorPage;
        currentItem(currentTarget);
    });

    container.addEventListener('dragend', function (e) {
        let coor = e.pageX;
        diff = coor - beginCoorPage;
        currentTarget.style.transform = 'scale(1)';
        currentItem(currentTarget);
    });


    function onTap (item) {
        if (item === cropParent || item === contrastParent || item === paintbucketParent || item === cropParentMobile || item === contrastParentMobile || item === paintbucketParentMobile) {
            let y = item.firstElementChild;
            y.style.left = event.offsetX + 'px';
            y.style.transform = 'scale(2)';
            function optionDown () {
                y.style.transform = 'scale(1)';
            }
            setTimeout( optionDown, 200);
        }
    }


    container.addEventListener('mousedown',function (event) {
        currentTarget = event.target;
        eventType = event.type;

        onTap(currentTarget);
    });

}());


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




//редактор для mobile для странички foto

    (function () {
        $('.change-photo__crop__pic').on('click',function (e) {
            e.preventDefault();
            let   $this = $(this),
                container = $this.closest('.change-photo__area_mobile'),
                line1 = container.find('.change-photo__crop__line'),
                line2 = container.find('.change-photo__paintbucket__line'),
                line3 = container.find('.change-photo__contrast__line'),
                pic1 = container.find('.change-photo__crop__pic'),
                pic2 = container.find('.change-photo__paintbucket__pic'),
                pic3 = container.find('.change-photo__contrast__pic');

            line1.addClass('change-photo__crop__line_active');
            line2.removeClass('change-photo__paintbucket__line_active');
            line3.removeClass('change-photo__paintbucket__line_active');
            pic1.addClass('change-photo__crop__pic_active');
            pic2.removeClass('change-photo__paintbucket__pic_active');
            pic3.removeClass('change-photo__contrast__pic_active');
        });
        $('.change-photo__paintbucket__pic').on('click',function (e) {
            e.preventDefault();
            let   $this = $(this),
                container = $this.closest('.change-photo__area_mobile'),
                line1 = container.find('.change-photo__crop__line'),
                line2 = container.find('.change-photo__paintbucket__line'),
                line3 = container.find('.change-photo__contrast__line'),
                pic1 = container.find('.change-photo__crop__pic'),
                pic2 = container.find('.change-photo__paintbucket__pic'),
                pic3 = container.find('.change-photo__contrast__pic');

            line1.removeClass('change-photo__crop__line_active');
            line2.addClass('change-photo__paintbucket__line_active');
            line3.removeClass('change-photo__paintbucket__line_active');
            pic1.removeClass('change-photo__crop__pic_active');
            pic2.addClass('change-photo__paintbucket__pic_active');
            pic3.removeClass('change-photo__contrast__pic_active');
        });
        $('.change-photo__contrast__pic').on('click',function (e) {
            e.preventDefault();
            let   $this = $(this),
                container = $this.closest('.change-photo__area_mobile'),
                line1 = container.find('.change-photo__crop__line'),
                line2 = container.find('.change-photo__paintbucket__line'),
                line3 = container.find('.change-photo__contrast__line'),
                pic1 = container.find('.change-photo__crop__pic'),
                pic2 = container.find('.change-photo__paintbucket__pic'),
                pic3 = container.find('.change-photo__contrast__pic');

            line1.removeClass('change-photo__crop__line_active');
            line2.removeClass('change-photo__paintbucket__line_active');
            line3.addClass('change-photo__paintbucket__line_active');
            pic1.removeClass('change-photo__crop__pic_active');
            pic2.removeClass('change-photo__paintbucket__pic_active');
            pic3.addClass('change-photo__contrast__pic_active');
        });
    }());


});