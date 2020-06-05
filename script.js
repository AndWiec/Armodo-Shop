//      DZIAŁA NA TWARDO, ALE JAK ZROBIĆ POJEDYNCZO...
var divFooter = document.getElementsByClassName("footer__menu--untoggle"); //div, którzy trzeba kliknąć
var ulsFooter = document.querySelectorAll(".footer__ul--toggled"); //zbiór list

for (let i = 0; i < divFooter.length; i++) {
    divFooter[i].addEventListener("click", function() {
        ulsFooter[i].classList.toggle("footer__ul--toggled");
    })
}

//      INSTAGRAM SWIPER SETTINGS

$('.content__instagram--slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});