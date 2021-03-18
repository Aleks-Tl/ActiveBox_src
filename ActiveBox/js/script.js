// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

$(document).ready(function() {
    $('.promo__burger').on('click', function() {
        $('.promo__burger, .menu-header').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.menu-header__link').on('click', function() {
        $('.promo__burger, .menu-header').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.slider__carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});
    

