let siteName = window.location.protocol+'//'+window.location.host;
let imgPath = siteName+'/themes/nebesa/';

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.54333116126063,36.30253612698363],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Похоронный дом Небеса',
            balloonContent: 'Похоронный дом Небеса, г. Калуга, ул. Зерновая 17В'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: imgPath+'assets/images/icons/contacts-pin.svg',
            // Размеры метки.
            iconImageSize: [65, 76],
        });

    myMap.geoObjects
        .add(myPlacemark);
});