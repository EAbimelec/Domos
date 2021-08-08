window.addEventListener('load', main);
var transisiones = document.getElementsByClassName('transision1');
  for( i=0; i<transisiones.length; i++){
    console.log(transisiones[i].className);
    transisiones[i].classList.add("transision2");
  }


function main(){
  window.addEventListener('scroll', headerAnimation);
  window.onresize = conditions;


  var mainHeader = document.getElementById("main-header");
  var checkbox = document.querySelector("input[name=checkbox]");
  const scrollY = 1035;

  function headerAnimation(){
      if(window.scrollY > scrollY && window.innerWidth > 768){
        mainHeader.classList.add("white");  
        
      }else{
          mainHeader.classList.remove("white");
        }
  }

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        if(window.innerWidth > 768){
          mainHeader.classList.remove("main-header-desktop");
        }else{
          mainHeader.classList.remove("main-header-desktop");
          mainHeader.classList.remove("main-header-mobile1"); 
          mainHeader.classList.add("main-header-mobile2");     
        }
      }else {
        if(window.innerWidth > 768){
          mainHeader.classList.add("main-header-desktop");
          mainHeader.classList.remove("main-header-mobile1"); 
          mainHeader.classList.remove("main-header-mobile2"); 
        
        }else{
          mainHeader.classList.remove("main-header-desktop");
          mainHeader.classList.remove("main-header-mobile2");
          mainHeader.classList.add("main-header-mobile1");
        }
      }
    });

    function conditions(){
    
    if(window.innerWidth < 768){
      mainHeader.classList.add("main-header-mobile1");
      mainHeader.classList.remove("main-header-desktop");

    }
    
    if(window.innerWidth > 768){
      mainHeader.classList.remove("main-header-mobile2");
      mainHeader.classList.remove("main-header-mobile1");
      mainHeader.classList.add("main-header-desktop");
      document.querySelector("input[name=checkbox]").checked = false;
    }
  }

  var botones = document.getElementsByClassName('btn--m');

  for( i=0; i<botones.length; i++){
    botones[i].addEventListener("click", function() {
    document.querySelector("input[name=checkbox]").checked = false;
    if(window.innerWidth < 768){
    mainHeader.classList.add("main-header-mobile1");
    mainHeader.classList.remove("main-header-mobile2");
    }
    });
  }

  

}
