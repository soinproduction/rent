import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {infoSlider, reviewsSection} = vars;

if (reviewsSection) {
  const slider = reviewsSection.querySelector('.swiper-container');
  const pagination = reviewsSection.querySelector('.swiper-pagination')

  const mySlider = new Swiper(slider, {
    slidesPerView: 1,
    // speed: 1000,
    observer: true,
    observeParents: true,
    spaceBetween: 40,

    speed: 4000,
    autoplay: {
      delay: 1500,
    },
  
    centredMode: true,
    watchOverflow: true,

    pagination: {
      el: pagination,
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        loop: true,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });

}

infoSlider && infoSlider.forEach((slider) => {
  const mySlider = new Swiper(slider.querySelector('.swiper-container'), {
    slidesPerView: 1,
    speed: 1000,
    observer: true,
    observeParents: true,

    direction: 'vertical',
    effect: 'slide',

    speed: 4000,
    autoplay: {
      delay: 1500,
    },

    freeMode: true,
    watchOverflow: true,

    mousewheelControl: true,
  });

  slider.swiper = mySlider;

});

