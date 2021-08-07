document.addEventListener('DOMContentLoaded', main);

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
}
