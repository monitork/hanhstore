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
            speed: 300,
            dots: true,
            infinite: true,
            arrows: false,
            width: bgWidth,
            height: bgHeight
        }
        $(slick).slick(slickOption)
    }
}