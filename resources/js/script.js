// SWIPER SLIDER //
$(document).ready(function(){
    
    var mySwiper = new Swiper ('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    })    
});

// SCROLLIFY //
$(function () {
    $.scrollify({
        section: ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});

// SMOOTH SCROLL //
$(function () {
    $('.menu-item a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});

// HAMBURGER MENU //
function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu() {
    document.getElementById('navbar').style.height = 0;
}