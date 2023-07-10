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