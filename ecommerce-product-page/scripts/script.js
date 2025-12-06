const buttonopenMenu = document.getElementById("button-menu");
const buttonCloseMenu = document.getElementById("button-close");
const menu = document.getElementById("menu");

function checkScreenSize () {
    if (window.innerWidth > 900) {
        menu.style.left = "0";
    } else {
        menu.style.left = "-22.5rem";
    }
}

checkScreenSize()

window.addEventListener("resize", () => {
    checkScreenSize()
});

buttonopenMenu.addEventListener("click", () => {
    menu.style.left = "0";
});

buttonCloseMenu.addEventListener("click", () => {
    menu.style.left = "-22.5rem";
});