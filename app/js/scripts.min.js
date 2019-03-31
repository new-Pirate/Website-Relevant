$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
    });

    /* Валидация для телефонов */

    $("#tel, #popupTel").mask("+7(999) 999-99-99");

    /* Animate.css */

    $('.mainTask').viewportChecker({
        classToAdd: 'vision animated zoomIn',
        offset: 50
    });

    $('.task_title').viewportChecker({
        classToAdd: 'vision animated fadeInUp',
        offset: 10
    });

    $('.task_client').viewportChecker({
        classToAdd: 'vision animated fadeInRight',
        offset: 50
    });

    $('.task_data').viewportChecker({
        classToAdd: 'vision animated fadeInLeft',
        offset: 50
    });

    $('.task_tasks').viewportChecker({
        classToAdd: 'vision animated fadeInUp',
        offset: 50
    });

    $('.made_title').viewportChecker({
        classToAdd: 'vision animated zoomInLeft',
        offset: 20
    });

    $('.made_block').viewportChecker({
        classToAdd: 'vision animated fadeInLeft',
        offset: 10
    });

    $('.result_content').viewportChecker({
        classToAdd: 'vision animated fadeInRight',
        offset: 20
    });

    $('.result_slider').viewportChecker({
        classToAdd: 'vision animated fadeInUp',
        offset: 20
    });

    $('.form').viewportChecker({
        classToAdd: 'vision animated fadeInLeft',
        offset: 10
    });

    $('.callback').viewportChecker({
        classToAdd: 'vision animated fadeInRight',
        offset: 10
    });
});


/* Popup */

function PopUpShow() {
    $("#popup").fadeIn(500).show();
}

function PopUpHide() {
    $("#popup").hide();
}

$("#callbackPopup").click(function () {
    PopUpShow();
});

$("#closePopup, #sendButton").click(function () {
    PopUpHide();
    return false;
});