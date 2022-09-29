window.onload =    function displayCon() {
  
    AOS.init({
        duration: 1500,
    })
    setTimeout( () =>

    {
    document.querySelector(".container1-wrap").style.display = "none";
    document.querySelector(".container2-wrap").style.display = "block"
    }, 2000
)
}


var slideIndex = 0;
showSlides();

function showSlides() {

  var i;
  var slides = document.querySelectorAll(".img-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
console.log(slideIndex)
  setTimeout(showSlides, 15000);
   // Change image every 2 seconds

}

var textIndex = 0;
showTexts();

function showTexts() {

  var i;
  var texts = document.querySelectorAll(".text");
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";  
  }
  textIndex++;
  if (textIndex > texts.length) {textIndex = 1}
  texts[textIndex-1].style.display = "block";
console.log(textIndex)
  setTimeout(showTexts, 15000);
   // Change image every 2 seconds

}

