const buttonopenMenu = document.getElementById("button-menu");
const buttonCloseMenu = document.getElementById("button-close");
const menu = document.getElementById("menu");

function checkScreenSize() {
  if (window.innerWidth > 900) {
    menu.style.left = "0";
  } else {
    menu.style.left = "-22.5rem";
  }
}

checkScreenSize();

window.addEventListener("resize", () => {
  checkScreenSize();
});

buttonopenMenu.addEventListener("click", () => {
  menu.style.left = "0";
});

buttonCloseMenu.addEventListener("click", () => {
  menu.style.left = "-22.5rem";
});

// Carrossel

const slides = document.querySelectorAll(".slide");
let index = 0;

showSlide(index);

function nextSlide(n) {
  showSlide((index += n));
}

function previousSlide(n) {
  showSlide((index += n));
}

function showSlide(n) {
  if (n >= slides.length) index = 0;

  if (n < 0) index = slides.length - 1;

  slides.forEach((element) => {
    element.style.display = "none";
  });

  slides[index].style.display = "flex";
}