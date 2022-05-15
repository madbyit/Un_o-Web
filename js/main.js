function getcurrentyear()
{
   document.getElementById("year").innerHTML = new Date().getFullYear();
}

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