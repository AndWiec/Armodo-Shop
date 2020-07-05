//      DZIAŁA NA TWARDO, ALE JAK ZROBIĆ POJEDYNCZO...
var divFooter = document.getElementsByClassName("footer__menu--untoggle"); //div to click on
var ulsFooter = document.querySelectorAll(".footer__ul--toggled");
var screenWidth = screen.width;
var x = 0;

if (screenWidth < 980) {
    x = 1;
} else {
    x = 3;
}
for (let i = 0; i < divFooter.length; i++) {
    divFooter[i].addEventListener("click", function() {
        ulsFooter[i].classList.toggle("footer__ul--toggled");
    })
}

//      INSTAGRAM SWIPER SETTINGS

$('.content__instagram--slider').slick({
    infinite: true,
    slidesToShow: x,
    slidesToScroll: 1
});