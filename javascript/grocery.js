function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}

// ===== ADD TO CART BUTTON =====
const addToCartButtons = document.querySelectorAll(".card button");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.parentElement;
        const productName = card.querySelector("h3").innerText;
        const productPrice = card.querySelector("p").innerText;

        // Save to localStorage (demo)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({name: productName, price: productPrice});
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${productName} added to cart!`);
    });
});

// ===== SEARCH BAR FILTER =====
const searchInput = document.querySelector(".nav-center input");
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".products .card");

        products.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// ===== LOAD CART INFO (optional) =====
function showCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    if (cartCount) cartCount.innerText = cart.length;
}

// Call on page load
showCartCount();


