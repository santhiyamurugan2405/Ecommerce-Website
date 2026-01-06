function addToCart(productName) {
    alert(productName + " added to cart!");
}
function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}
