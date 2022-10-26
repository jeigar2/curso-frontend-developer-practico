const elementMenuClass = ".navbar-email";
const elementMenu = document.querySelector(elementMenuClass);
const desktopMenu = document.querySelector(".desktop-menu");

elementMenu.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

const elementMenuClassMovile = ".menu";
const elementMenuMovile = document.querySelector(elementMenuClassMovile);
const mobileMenu = document.querySelector(".mobile-menu");

elementMenuMovile.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}