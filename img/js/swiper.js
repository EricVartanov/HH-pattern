const conditionsSwiper = new Swiper('.conditions__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,


    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px

    },

    // Navigation arrows
    navigation: {
        nextEl: '.conditions__swiper-button-next',
        prevEl: '.conditions__swiper-button-prev',
    },

    pagination: {
        el: '.conditions__swiper-pagination',
        type: 'bullets',
    },
});