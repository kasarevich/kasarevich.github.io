 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: false,
  swipeToSlide:true,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider',
  dots: true,
  centerMode: true,
  swipeToSlide:true,
  focusOnSelect: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
