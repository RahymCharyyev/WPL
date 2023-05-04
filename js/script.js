const burgerBtn = document.getElementById("burger-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});
