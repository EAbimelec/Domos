
window.addEventListener('scroll', headerAnimation);

function headerAnimation(){
    const scrollY = 1035;
   if(window.scrollY > scrollY){
    var mainHeader = document.getElementById("main-header");
    mainHeader.classList.add("white");
        }else{
            var mainHeader = document.getElementById("main-header");
            mainHeader.classList.remove("white");
        }
}

