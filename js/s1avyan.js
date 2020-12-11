// плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// плавная прокрутка

// Google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
//  /google map

// API - application programming interface
console.log("Privet");

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal)
  modal.style.display = "none";
}