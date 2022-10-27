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

const productList = [];
productList.push({
    name: 'Bike',
    price: 119.99,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Screen',
    price: 220.53,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: 679.99,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProduct(arr) {
    for (const product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image);
        productCard.appendChild(productImg);
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const div = document.createElement("div");
        const pPrice = document.createElement("p");
        pPrice.innerText = product.price;
        const pName = document.createElement("p");
        pName.innerText = product.name;
        div.appendChild(pPrice);
        div.appendChild(pName);
        productInfo.appendChild(div);
        productCard.appendChild(productInfo);
        const productInfoFigure = document.createElement("figure");
        const imgCart = document.createElement("img")
        imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(imgCart);
        productInfo.appendChild(productInfoFigure);
        const cardsContainer = document.querySelector(".cards-container");
        cardsContainer.appendChild(productCard);   
    }
}

renderProduct(productList);