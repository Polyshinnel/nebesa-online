$('.banner__wrapper').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items: 1
})



$('.banner__arrow_right').on('click', function() {
    $(this).parent().find('.owl-next').trigger('click');
});

$('.banner__arrow_left').on('click', function() {
    $(this).parent().find('.owl-prev').trigger('click');
});


$('.gallery-block').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items: 4,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        570:{
            items:4,
            margin: 25,
            nav:false
        },
    }
})