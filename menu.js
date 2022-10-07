
const menuBurger = document.querySelector('.menuItems');
const burger = document.querySelector('.burger');

burger.addEventListener ('mouseover', function () {
    menuBurger.style.display = "block";
    }
);

menuBurger.addEventListener("mouseleave", function () {
  menuBurger.style.display = "none";
});
