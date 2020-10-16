import $ from "jquery";
import "slick-carousel"
import 'slick-carousel/slick/slick.css'

export default function slick() {
    const slick = document.querySelector('[data-js="slick"]');
    if (slick) {
        slick.classList.remove('is-hidden')
        slick.offsetHeight;
        const slickOption = {
            autoplay: true,
            speed: 300
        }
        $(slick).slick(slickOption)
    }
}