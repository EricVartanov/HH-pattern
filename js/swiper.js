const conditionsSwiper = new Swiper('.conditions__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Default parameters
    slidesPerView: 3,
    spaceBetween: 30,


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