var siteQueryName = window.location.protocol+'//'+window.location.host;
var imgQueryPath = siteQueryName+'/themes/nebesa/';

function hideMenuElems() {
    $('.header__mobile-menu img').attr('src',imgQueryPath+'assets/images/icons/mobile/header-menu.svg');
    $('.header__mobile-menu-block').slideUp();
    $('.header__mobile-menu-catalog').removeClass('header__mobile-menu-catalog_active');
    $('.header__mobile-menu-catalog-list').css('display','none');
}

function hideCatalogMenu() {
    $('.header__bottom-catalog').removeClass('header__bottom-catalog_active');
    $('.header__bottom-catalog-list').slideUp();
}

function setFormData(title,subTitle) {
    $('.recall-form__title h4').html(title);
    $('.recall-form__title p').html(subTitle);
}

function getDataElem(elem) {
    var title = elem.attr('data-title');
    var subTitle = elem.attr('data-subtitle');
    var controller = elem.attr('data-controller');

    return {
        title : title,
        subTitle : subTitle,
        controller : controller
    };
}

$(document).mouseup(function(e){
    var menu = $('.header__mobile-menu-block');
    var menuState = $('.header__mobile-menu-block').css('display');

    if(menuState == 'block') {
        if ( !menu.is(e.target) && menu.has(e.target).length === 0 ) {
            hideMenuElems();
        }
    }
});

$('.header__mobile-menu').click(function(){
    var menuState = $('.header__mobile-menu-block').css('display');
    if(menuState == 'none') {
        $('.header__mobile-menu img').attr('src',imgQueryPath+'assets/images/icons/mobile/header-close.svg');
        $('.header__mobile-menu-block').slideToggle();
    }
});

$('.header__mobile-menu-catalog').click(function() {
    var catalogState = $('.header__mobile-menu-catalog-list').css('display');
    if(catalogState == 'none') {
        $('.header__mobile-menu-catalog').addClass('header__mobile-menu-catalog_active');
    } else {
        $('.header__mobile-menu-catalog').removeClass('header__mobile-menu-catalog_active');
    }
    
    $('.header__mobile-menu-catalog-list').slideToggle();
});

$('.header__mobile-menu-taxi').click(function() {
    hideMenuElems();
    $('.taxi-recall-block').fadeIn(300);
});

$(document).mouseup(function(e){
    var form = $('.taxi-recall-block__form');
    var formState = $('.taxi-recall-block__form').css('display');

    if(formState == 'block') {
        if ( !form.is(e.target) && form.has(e.target).length === 0 ) {
            $('.taxi-recall-block').fadeOut(300);
        }
    }
});

$('.taxi-recall-block__form-close').click(function(){
    $('.taxi-recall-block').fadeOut(300);
});

$('.header__mobile-menu-discount').click(function() {
    hideMenuElems();
    var data = getDataElem($(this));
    var title = data.title;
    var subTitle = data.subTitle;
    var controller = data.controller;
    setFormData(title,subTitle);
    $('.recall-block').fadeIn(300);
    

});

$(document).mouseup(function(e){
    var recallform = $('.recall-form');
    var recallformState = $('.recall-block').css('display');

    if(recallformState == 'block') {
        if ( !recallform.is(e.target) && recallform.has(e.target).length === 0 ) {
            $('.recall-block').fadeOut(300);
        }
    }
});

$('.recall-form__close').click(function() {
    $('.recall-block').fadeOut(300);
});

$('.header__bottom-catalog').click(function() {
    var headerCatalogState = $('.header__bottom-catalog-list').css('display');

    if(headerCatalogState == 'none') {
        $('.header__bottom-catalog').addClass('header__bottom-catalog_active');
        $('.header__bottom-catalog-list').slideToggle();
    }
});

$(document).mouseup(function(e){
    var menuCatalog = $('.header__bottom-catalog-list');
    var menuCatalogState = $('.header__bottom-catalog-list').css('display');

    if(menuCatalogState == 'block') {
        if ( !menuCatalog.is(e.target) && menuCatalog.has(e.target).length === 0 ) {
            hideCatalogMenu();
        }
    }
});

$('.header__bottom-discount').click(function() {
    $('.recall-block').fadeIn(300);
    var data = getDataElem($(this));
    var title = data.title;
    var subTitle = data.subTitle;
    var controller = data.controller;
    setFormData(title,subTitle);
})

$('.header__bottom-taxi').click(function() {
    var taxiHeaderState = $('.header__bottom-taxi-menu').css('display');
    if(taxiHeaderState == 'none') {
        $('.header__bottom-taxi-menu').slideToggle();
    }
});

$(document).mouseup(function(e){
    var taxiBlock = $('.header__bottom-taxi-menu');
    var taxiBlockState = $('.header__bottom-taxi-menu').css('display');

    if(taxiBlockState == 'block') {
        if ( !taxiBlock.is(e.target) && taxiBlock.has(e.target).length === 0 ) {
            hideCatalogMenu();
            $('.header__bottom-taxi-menu').slideUp();
        }
    }
});


$('.header__top-recall,.main-btn-block__btn_recall,.main-page-organization__block-item-btn,.footer-contacts__text-block-btn').click(function() {
    $('.recall-block').fadeIn(300);
    var data = getDataElem($(this));
    var title = data.title;
    var subTitle = data.subTitle;
    var controller = data.controller;
    setFormData(title,subTitle);
});

$('.page-template__banner-btn_taxi').click(function(){
    $('.taxi-recall-block').fadeIn(300);
})