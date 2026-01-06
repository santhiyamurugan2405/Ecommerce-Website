let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== ADD TO CART =====
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.parentElement;
            const name = card.querySelector("h3").innerText;
            const price = card.querySelector("p").innerText;

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(name + " added to cart");
            updateCartCount();
        });
    });

    updateCartCount();
});

// ===== CART COUNT =====
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// ===== SEARCH =====
document.getElementById("search").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
    });
});

function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}
