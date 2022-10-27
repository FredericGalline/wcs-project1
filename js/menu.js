const menuBurger = document.querySelector(".menuItems");
const burger = document.querySelector(".menu-burger");

burger.addEventListener("click", function () {
  //menuBurger.classList.toggle("visible");
  menuBurger.classList.toggle("hidden");

  menuBurger.classList.toggle("fadein");
  menuBurger.classList.toggle("fadeout");
});

/*
menuBurger.addEventListener("mouseleave", function () {
  menuBurger.style.visibility = "hidden";
});
*/

/* template glassMorphism */
const glassMorphism = document.querySelector(".glassMorphism");
glassMorphism.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/glassmorphism.css";
});

/* template nueMorphing */
const neuMorphism = document.querySelector(".neuMorphism");
neuMorphism.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/neumorphism.css";
});

/* template flat */
const flatDesign = document.querySelector(".flatdesign");
flatDesign.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/flatdesign.css";
});

/* template Green */
const greenDesign = document.querySelector(".green");
greenDesign.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/green.css";
});

const darkDesign = document.querySelector(".dark");
darkDesign.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/dark.css";
});

const starWars = document.querySelector(".starwars");
starWars.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("theme_css").href = "./css/starwars.css";
});
