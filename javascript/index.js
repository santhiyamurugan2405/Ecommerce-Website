document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".card button");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            alert("Item added to cart 🛒");
        });
    });

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.border = "2px solid #E76F51";
        });
    });

});

function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if (!menu) {
        console.log("sideMenu not found");
        return;
    }

    menu.style.right = (menu.style.right === "0px") ? "-260px" : "0px";
}
function openProduct(name, price, image) {

    const product = {
        name: name,
        price: price,
        image: image,
        delivery: "₹40",
        offer: "10% OFF",
        reviews: [
            "⭐⭐⭐⭐⭐ Excellent product",
            "⭐⭐⭐⭐ Value for money"
        ]
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "product.html";
}

