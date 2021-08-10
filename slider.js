document.addEventListener('DOMContentLoaded', Slider)

function Slider() {

  let currentWork = 0;
  let btnNext = document.getElementById("right-arrow"); 
  let btnBack = document.getElementById("left-arrow");
  let workName = document.getElementById("work-name");
  let workImage = document.getElementById("work-image");
  let works = [
    {
      "workName": "Domos automaticos",
      "workImage": "images/domo-automatico.png"
    },
    {
      "workName": "Puertas de cristal templado",
      "workImage": "images/puerta-crital-automatica.jpg"
    }
  ];
  let lastItem = works.length - 1;
  btnNext.addEventListener('click', ChangeNextImage);
  btnBack.addEventListener('click', ChangePrevImage);

  function ChangeNextImage() {
 
    currentWork++;
    if(currentWork > lastItem) {
      currentWork = 0;
    } 
    MakeChanges();
  }
  
  function ChangePrevImage() {
    
    currentWork--;
    if(currentWork == -1) {
      currentWork = lastItem;
    } 
    MakeChanges();

  }

  function MakeChanges() {     
    workName.innerText = works[currentWork].workName;
    workImage.src = works[currentWork].workImage;
  }

}
