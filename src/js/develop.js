function slidersInit() {
    var sl1 = $('.js-partners-slider');
    if(sl1)sl1.slick({ arrows:true, dots:false, slidesToShow:5, autoplay: true,  autoplaySpeed: 1000,
        responsive: [
            {  breakpoint: 1200, settings: { slidesToShow: 4 }},
            {  breakpoint: 900, settings: { slidesToShow: 3 }},
            {  breakpoint: 666, settings: { slidesToShow: 2 }},
            {  breakpoint: 500, settings: { slidesToShow: 1 }}
        ]});
    var sl2 = $('.js-main-slider');
    if(sl2) sl2.slick({ arrows:false, autoplay: true,  autoplaySpeed: 3000, fade: true, dots:true});
}
function simpleAccordion() {
    $(document).on('click','.js-acc-arrow', function () {
        var li = $(this).closest('li');
        li.toggleClass('active');
        var box = li.find('.js-acc-hidden');
        if(li.hasClass('active')){
            $('.js-acc-arrow').not(this).closest('li').removeClass('active')
            $('.js-acc-hidden').stop().slideUp();
            box.stop().slideDown();
        }else{
            box.stop().slideUp();
        }
    });
}
function butter() {
    $('.js-butter').click(function () {
        if($(this).hasClass('active')){
            $('.header__menu').removeClass('active');
            $(this).removeClass('active');
        }else{
            $('.header__menu').addClass('active');
            $(this).addClass('active');
        }


    })
}
$(document).ready(function () {
    slidersInit();
    simpleAccordion();
    butter();
});