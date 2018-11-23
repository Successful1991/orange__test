$(document).ready(function () {
  initSlider();
  AOS.init();  //animation of blocks at the skroll, settings it is registered on blocks in html.

});

function initSlider() {
  $(".header__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: false
  })
}

function activePopup() {
  var active =  $('.popup').hasClass('popupActive');
  active? $('.popup').removeClass('popupActive'):$('.popup').addClass('popupActive');
}