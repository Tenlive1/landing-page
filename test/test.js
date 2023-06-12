var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    
});