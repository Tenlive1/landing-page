    if (typeof browser === "undefined") {
        var browser = chrome;
    }

    var swiper = new Swiper(".slide-content", { 
      slidesPerView: "1",
      spaceBetween: 30,
      loop:true,
      centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // },
        
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //       slidesPerView: 1,
        //       spaceBetween: 24,
        //       slidesPerGroup: 1,
        //     },
        //     // when window width is >= 480px
        //     480: {
        //       slidesPerView: 2,
        //       spaceBetween: 24,
        //       slidesPerGroup: 1,            
        //     },
        //     // when window width is >= 640px
        //     640: {
        //       slidesPerView: 2,
        //       spaceBetween: 24,
        //       slidesPerGroup: 1,
        //     },
        //     1024: {
        //       slidesPerView: 4,
        //       spaceBetween: 32,
        //       slidesPerGroup: 1,
        //     //   centeredSlides: false,
        //     },
        //     1336: {
        //       slidesPerView: 5,
        //       spaceBetween: 32,
        //       slidesPerGroup: 1,
        //     },
        //   },
    });


