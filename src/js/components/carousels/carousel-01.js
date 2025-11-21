import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".carouselOne", {
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
