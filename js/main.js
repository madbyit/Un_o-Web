/** Copy right */

function getcurrentyear()
{
   document.getElementById("year").innerHTML = new Date().getFullYear();
}

/** Cookies */

function getcookies()
{
   var dateCookie = new Date();
   document.cookie = "Date="+dateCookie;
   /* By default, the cookie is deleted when the browser is closed. */
   console.log(document.cookie);

   /* Remove banner */
   var cb = document.getElementById("cookie-banner");
   cb.style.display = "none";
}

/** Slide show */

let slideIndex = 1;
showSlides(slideIndex);

/* Next/previous controls*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Thumbnail image controls */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("unjoSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}