document.addEventListener('DOMContentLoaded', Slider)

function Slider() {
  //initial delcarations 
  let currentWork = 0;
  let btnNext = document.getElementById("right-arrow"); 
  let btnBack = document.getElementById("left-arrow");
  let workName = document.getElementById("work-name");
  let workImage = document.getElementById("work-image");
  let sliderContainer = document.getElementById("image-1");
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


  //desktop
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


  //mobile
  let initialPosition, finalPosition;
  let difference;

  sliderContainer.addEventListener('touchstart', (e) => {
    
    initialPosition = e.touches[0].screenX;

  });
  
  sliderContainer.addEventListener('touchmove', (e) => {

    finalPosition = e.touches[0].screenX;
    difference = initialPosition - finalPosition
    
    if( difference > 50 || difference < -50) {
      
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

  });

  sliderContainer.addEventListener('touchend', () => {

    mobileChangeImages();
    document.getElementsByTagName("html")[0].style.overflow = "auto";

  });

  function mobileChangeImages() {

    if(difference > 50) {
      ChangeNextImage();
    }

    if(difference < -50) {
      ChangePrevImage();
    }
  }

}
