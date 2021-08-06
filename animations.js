
window.addEventListener('scroll', headerAnimation);
window.onresize = conditions;




function headerAnimation(){
    const scrollY = 1035;
    if(window.scrollY > scrollY && window.innerWidth > 768){
      var mainHeader = document.getElementById("main-header");
      mainHeader.classList.add("white");  
      
    }else{
        var mainHeader = document.getElementById("main-header");
        mainHeader.classList.remove("white");
      }
}

window.addEventListener('load', checkboxDeclaration);

function checkboxDeclaration(){
  var mainHeader = document.getElementById("main-header");
  var checkbox = document.querySelector("input[name=checkbox]");
  
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      mainHeader.classList.remove("main-header-desktop");
      mainHeader.classList.add("main-header-mobile");  
    
    } else {
      mainHeader.classList.add("main-header-desktop");
      mainHeader.classList.remove("main-header-mobile");
    
    }
  });
}

function conditions(){
  var mainHeader = document.getElementById("main-header");
  if(window.innerWidth > 768){
    mainHeader.classList.remove("white");
    mainHeader.classList.remove("main-header-mobile");
    mainHeader.classList.add("main-header-desktop");
    document.querySelector("input[name=checkbox]").checked = false;
  }
  headerAnimation();
}








