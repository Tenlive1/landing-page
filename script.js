window.onload = function(){
    const menue_btn = document.querySelector('.hamburger');

    menue_btn.addEventListener('click',()=>{
        menue_btn.classList.toggle('is-active')
    })
}