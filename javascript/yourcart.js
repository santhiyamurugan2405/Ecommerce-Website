let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
    const container = document.getElementById("cart-items");
    const emptyMsg = document.getElementById("empty-msg");
    const totalEl = document.getElementById("total");

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }

    emptyMsg.style.display = "none";

    cart.forEach((item, index) => {
        const price = parseInt(item.price.replace("₹", ""));
        total += price;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        container.appendChild(div);
    });

    totalEl.innerText = total;
}

// ===== REMOVE ITEM =====
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// ===== PLACE ORDER =====
function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        items: cart,
        date: new Date().toLocaleString(),
        status: "Order Placed"
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    alert("Order placed successfully!");
    window.location.href = "orders.html";
}
