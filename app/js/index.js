$(document).ready(function () {
  initSlider();
});

function initSlider() {
  $(".header__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false,
  })
}