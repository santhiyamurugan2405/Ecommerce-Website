// ===============================
// GLOBAL CART
// ===============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// ADD TO CART
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.parentElement;
            const name = card.querySelector("h3").innerText;
            const price = card.querySelector("p").innerText;

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} added to cart`);
            updateCartCount();
        });
    });

    updateCartCount();
});


function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}

// ===============================
// CART COUNT (NAVBAR)
// ===============================
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// ===============================
// SEARCH FILTER
// ===============================
const searchInput = document.querySelector(".nav-center input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });
    });
}

// ===============================
// PAGE NAVIGATION
// ===============================
function goTo(page) {
    window.location.href = page;
}

// ===============================
// LOGIN VALIDATION
// ===============================
function loginUser() {
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();

    if (email === "" || pass === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", email);
    alert("Login Successful");

    window.location.href = "index.html";
}

// ===============================
// PROFILE PAGE LOAD
// ===============================
function loadProfile() {
    const user = localStorage.getItem("user");
    const profile = document.getElementById("profile-email");

    if (profile) {
        profile.innerText = user ? user : "Guest User";
    }
}

// ===============================
// LOGOUT
// ===============================
function logout() {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    window.location.href = "login.html";
}
