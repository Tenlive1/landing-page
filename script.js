window.onload = function(){
    const menue_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    const listen_btn = document.querySelector('.Listen-btn');
    menue_btn.addEventListener('click',()=>{
        menue_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })

    listen_btn.addEventListener('click',()=>{
        let val = Math.floor(Math.random() * 2);
        if(val == 0){
            window.open("https://www.youtube.com/watch?v=IIHoq68i5f0&ab_channel=SonLe","_blank"); 
        }else if(val == 1){
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley","_blank"); 
        }
    });

    var swiper = new Swiper(".slide-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        lazyLoading: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        // breakpoints: {
        //     "@0.00": {
        //       slidesPerView: 1,
        //       spaceBetween: 10,
              
        //     },
        //     "@0.75": {
        //       slidesPerView: 2,
        //       spaceBetween: 20,
        //     },
        //     "@1.00": {
        //       slidesPerView: 3,
        //       spaceBetween: 40,
        //     },
        //     "@1.50": {
        //       slidesPerView: 4,
        //       spaceBetween: 50,
        //     },
        //   },
        
    });
    
}

