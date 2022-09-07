const swiperArtist = new Swiper('.swiperArtist', {
  loop: true,
  slidesPerView: 1,
  simulateTouch: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  }
});

const swiperOther = new Swiper(".swiperOther", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
});