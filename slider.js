document.addEventListener('DOMContentLoaded', Slider)

function Slider() {

  let workIndex = 0;
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

  btnNext.addEventListener('click', ChangeNextImage);
  btnBack.addEventListener('click', ChangeNextImage);

  function ChangeNextImage() {
    
    workIndex++;
    workName.innerText = works[workIndex].workName;
    workImage.src = works[workIndex].workImage;
    
  }
  
}
