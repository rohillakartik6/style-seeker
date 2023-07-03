$(function () {

    var swiper = new Swiper('.carousel-gallery .swiper-container', {
        effect: 'slide',
        speed: 1200,
        slidesPerView: 4,
        spaceBetween: 10,
        simulateTouch: true,
        autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            // when window width is <= 480px
            430: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is <= 640px
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            2560: {
                slidesPerView: 5,
                spaceBetween: 10
            }
        }
    });
});