window.onscroll = function() {
  myFunction();}
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo(0, 0);
}