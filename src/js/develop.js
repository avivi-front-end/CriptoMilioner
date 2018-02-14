function slidersInit() {
    $('.js-main-slider').slick({
        arrows:false,
        fade: true,
        dots:true
    });
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
$(document).ready(function () {
    slidersInit();
    simpleAccordion();
});