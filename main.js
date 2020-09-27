// responsive header
var wrapper = document.querySelector(".wrapper");
var nav = document.querySelector(".nav");

document.getElementById("gamburger").onclick = function () {
  wrapper.classList.toggle("active");
  document.getElementById("nav").classList.toggle("show");
};


