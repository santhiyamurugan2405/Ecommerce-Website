document.addEventListener("DOMContentLoaded", loadOrders);

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const list = document.getElementById("orders-list");
    const emptyMsg = document.getElementById("empty-msg");

    list.innerHTML = "";

    if (orders.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }

    emptyMsg.style.display = "none";

    orders.forEach((order, index) => {
        const orderDiv = document.createElement("div");
        orderDiv.className = "order-card";

        let itemsHTML = "";
        order.items.forEach(item => {
            itemsHTML += `<p>${item.name} - ${item.price}</p>`;
        });

        orderDiv.innerHTML = `
            <h4>Order #${index + 1}</h4>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <div class="order-items">
                ${itemsHTML}
            </div>
        `;

        list.appendChild(orderDiv);
    });
}


/* ===== CLEAR ORDERS ===== */
function clearOrders() {
    if (confirm("Are you sure you want to clear all orders?")) {
        localStorage.removeItem("cart");
        loadOrders();
    }
}
