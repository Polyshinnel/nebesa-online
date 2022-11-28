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
