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
    cookieBanner();
}

function setNecessaryCookies()
{
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    document.cookie = 'cookie=onlyNecessary;expires='+now.toUTCString()+';path=/';
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
  else
  {
    console.log("No cookies");
  }
}

function loadHome() {
  var url = window.location.href; /* Returns full URL */
  var shorturl = url.substring(url.lastIndexOf('/') + 1);
  if((shorturl == 'index.html') || (shorturl == ''))
  {
    var home = document.getElementById("homelink");
    home.click();
  }
}