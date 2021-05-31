// function scroll to show box-shadow
function funScrol() {
    document.getElementById("header").style.boxShadow = "rgb(0 0 0 / 20%) 0px 1px 8px";
    if (window.scrollY === 0) {
        document.getElementById("header").style.boxShadow = "none";
    }
}
// Use SwiperJS for testimonial slide
var swiper = new Swiper('.swiper-testimonial', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
})
// Toggle menu
var menuBar = document.querySelector('.menu-bar');
var nav = document.querySelector('.nav');

menuBar.addEventListener('click', function() {
    if (nav.classList.value.indexOf('show-menu') !== -1) {
        nav.classList.remove('show-menu');
    }else {
        nav.classList.add('show-menu');
    }
})