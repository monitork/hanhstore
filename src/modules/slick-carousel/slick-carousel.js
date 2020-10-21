import $ from "jquery";
import "slick-carousel"
import 'slick-carousel/slick/slick.css'

export default function slickCarousel() {
    const slick = document.querySelector('[data-js="slick-carousel"]');
    if (slick) {
        slick.classList.remove('is-hidden')
        slick.offsetHeight;
        const slickOption = {
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 4,
        }
        $(slick).slick(slickOption)
    }
}