 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
