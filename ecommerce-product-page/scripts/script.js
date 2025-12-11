const buttonopenMenu = document.getElementById("button-menu");
const buttonCloseMenu = document.getElementById("button-close");
const menu = document.getElementById("menu");

const lightboxBackground = document.getElementById("lightbox-background");
const desktopNavigation = document.getElementById("desktop-navigation");
const desktopSlides = document.querySelectorAll(".desktop-slide");

const slides = document.querySelectorAll(".slide");

let index = 0;

function checkScreenSize() {
  if (window.innerWidth > 900) {
    menu.style.left = "0";
  } else {
    menu.style.left = "-22.5rem";
    lightboxBackground.style.display = "none";
    showSlide(index);
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

showSlide(index);

function nextSlide(n) {
  window.innerWidth < 900
    ? showSlide((index += n))
    : showDesktopSlide((index += n));
}

function previousSlide(n) {
  window.innerWidth < 900
    ? showSlide((index += n))
    : showDesktopSlide((index += n));
}

function showSlide(n) {
  if (n >= slides.length) index = 0;

  if (n < 0) index = slides.length - 1;

  slides.forEach((element) => {
    element.style.display = "none";
  });

  slides[index].style.display = "flex";

  showDesktopSlide(index);
}

showDesktopSlide(index);

function showDesktopSlide(n) {
  if (n >= slides.length) index = 0;

  if (n < 0) index = slides.length - 1;

  slides.forEach((slide) => {
    slide.addEventListener("click", (evt) => {
      lightboxBackground.style.display = "block";
    });
  });

  desktopSlides.forEach((deskSlide) => {
    deskSlide.style.display = "none";
  });
  desktopSlides[index].style.display = "flex";
}

const closeBackground = document.getElementById("close-background");

closeBackground.addEventListener("click", () => {
  lightboxBackground.style.display = "none";
  showSlide(index);
});