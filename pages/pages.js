$(function(){

    
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'

});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '<span class="left"><iconify-icon icon="ooui:previous-ltr" width="20" height="20"></iconify-icon></span>',
  nextArrow:'<span class="right"><iconify-icon icon="ooui:previous-rtl" width="20" height="20"></iconify-icon></span>'
});
    




    })
   



