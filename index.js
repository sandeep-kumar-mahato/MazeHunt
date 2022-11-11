window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

var navLinks = document.getElementById("nav-links");
function showmenu() {
  navLinks.style.right = "0";
}
function hidemenu() {
  navLinks.style.right = "-200px";
}
