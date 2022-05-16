/** Copy right */

function getcurrentyear()
{
   document.getElementById("year").innerHTML = new Date().getFullYear();
}

/** Cookies */

function setCookies()
{
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
    console.log(document.cookie);
    cookieBanner();
}

function cookieBanner()
{
  /** Remove banner if there are cookies */
  if(document.cookie) {
    console.log("Cookie-value: " + document.cookie);
    
    /* Remove banner */
    var cb = document.getElementById("cookie-banner");
    cb.style.display = "none";
  }
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

  if (n > slides.length){
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

