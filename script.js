window.onload = function(){
    const menue_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    const listen_btn = document.querySelector('.Listen-btn');
    const idol_btn = document.querySelector('.num-1');
    menue_btn.addEventListener('click',()=>{
        menue_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    const home_btn = document.querySelector('.home-btn');// when user click home it will close the menue
    home_btn.addEventListener('click',()=>{
      menue_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
  });
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



    //hidden the nav bar
    
    const nav = document.querySelector("header");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () =>{
      if(lastScrollY < window.scrollY && !mobile_menu.classList.contains('is-active')){
        nav.classList.add("hidden");
      }
      else {
        nav.classList.remove("hidden");
      }
      
      
      lastScrollY = window.scrollY;
    });
   
}

var swiper = new Swiper(".slide-content", { 
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
      
      // autoplay: {
      //     delay: 4500,
      //     disableOnInteraction: false,
      // },
      
      breakpoints:{
        720:{
            spaceBetween: 35,
        },
        1060 :{
          slidesPerView: "3",
          loop: false,
          centeredSlides: false,
          spaceBetween: 40,
          
        },
        1280 :{
          slidesPerView: "5",
          loop: false,
          centeredSlides: false,
          spaceBetween: 45,
          
        },
        
        
      },
  });

