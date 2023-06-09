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

    var counter =1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4){
            counter =1;
        }
    },5000);//timer
}