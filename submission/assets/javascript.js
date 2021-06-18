const button = document.querySelector(".bar");
const menu = document.querySelector(".menu");

button.addEventListener("click", function (event) {
  menu.classList.toggle("show");
});
