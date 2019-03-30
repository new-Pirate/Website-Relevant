$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
    });

    /* Валидация для телефонов */

    $("#tel, #popupTel").mask("+7(999) 999-99-99");
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