import $ from "jquery";
import "slick-carousel"
import 'slick-carousel/slick/slick.css'

export default function slick() {
    const slick = document.querySelector('[data-js="slick"]');
    const bgWidth = $(window).width();
    const bgHeight = $(window).width() / 3;
    if (slick) {
        slick.classList.remove('is-hidden')
        slick.offsetHeight;
        const slickOption = {
            autoplay: true,
<<<<<<< HEAD
            speed: 1000,
            dots: true,
            arrows: false
=======
            speed: 300,
            dots: true,
            infinite: true,
            arrows: false,
            width: bgWidth,
            height: bgHeight
>>>>>>> 75dc0f2d9d91fbaa8ecd6d0cd63b8423822e4c66
        }
        $(slick).slick(slickOption)
    }
}