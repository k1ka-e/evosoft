//  Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
      1000: {
        slidesPerView: 3,
      },
    },
  });