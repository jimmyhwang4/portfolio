var i = 0;
var txt = 'IniTiaLIzIng pOrTFoLIo....'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  if (i == txt.length) {
    window.location.href = "portfolio.html"
  }
}