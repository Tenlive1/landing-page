window.onload = function(){
    const menue_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    const listen_btn = document.querySelector('.Listen-btn');
    const idol_btn = document.querySelector('.num-1');
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
    idol_btn.addEventListener('click',()=>{
      let val = Math.floor(Math.random() * 2);
      if(val == 0){
        window.open("https://www.youtube.com/watch?v=ZRtdQ81jPUQ&ab_channel=Ayase%2FYOASOBI","_blank"); 
    }else if(val == 1){
        window.open("https://www.billboard.com/music/chart-beat/yoasobi-idol-tops-billboard-global-excl-us-chart-1235346245/","_blank"); 
    }
    })

    var swiper = new Swiper(".slide-content", { 
      slidesPerView: "1",
      spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false,
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        
        breakpoints:{
          0:{
            slidesPerView: "1",
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            
          },
          481: {
            slidesPerView: "2",
            loop: true,
            centeredSlides: true,
            spaceBetween: 30,
            
          },
          769:{
            slidesPerView: "3",
            loop: true,
            centeredSlides: true,
            spaceBetween: 35,
            
          },
          1025 :{
            slidesPerView: "4",
            loop: true,
            centeredSlides: true,
            spaceBetween: 35,
            
            
          },
          1200:{
            slidesPerView: "5",
            centeredSlides: false,
            loop: false,
            spaceBetween: 35,
          },
        },
    });
    
}

