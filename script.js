window.onload =    function displayCon() {
  
    AOS.init({
        duration: 1500,
    })
    setTimeout( () =>

    {
    document.querySelector(".container1-wrap").style.display = "none";
    document.querySelector(".container2-wrap").style.display = "block"
    }, 10000
)
}


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {

  var i;
  var slides = document.querySelectorAll(".img-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

}

var textIndex = 1;
showTexts(textIndex);

function showTexts(n) {

  var i;
  var texts = document.querySelectorAll(".text");
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";  
  }
  if (n > texts.length) {textIndex = 1}    
  if (n < 1) {textIndex = texts.length}
  if (textIndex > texts.length) {textIndex = 1}
  texts[textIndex-1].style.display = "block";

}


function plusSlides(n) {
  showSlides(slideIndex += n)
  showTexts(textIndex += n);
}
