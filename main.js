const elementClassMenu = ".navbar-email";
const elementMenu = document.querySelector(elementClassMenu);
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
    const isProductDetailClose = productDetail.classList.contains("inactive");
    if(!isProductDetailClose)
        toggleProductDetail();
    mobileMenu.classList.toggle("inactive");
}

const elementMenuClassShoppingCart = ".navbar-shopping-cart";
const elementMenuShoppingCart = document.querySelector(elementMenuClassShoppingCart);
const productDetail = document.querySelector(".product-detail");

elementMenuShoppingCart.addEventListener("click", toggleProductDetail);

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if(!isMobileMenuClosed)
        toggleMobileMenu();
    productDetail.classList.toggle("inactive");
}
