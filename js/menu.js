const menuBurger = document.querySelector(".menuItems");
const burger = document.querySelector(".burger");
burger.addEventListener("mouseover", function () {
  menuBurger.style.visibility = "visible";
});

menuBurger.addEventListener("mouseleave", function () {
  menuBurger.style.visibility = "hidden";
});
