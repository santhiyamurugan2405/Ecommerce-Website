const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;

    const img = document.getElementById("product-img");
    img.src = product.image;
    img.alt = product.name;

    document.getElementById("delivery").innerText = product.delivery;
    document.getElementById("offer").innerText = product.offer;

    const reviewsList = document.getElementById("reviews");
    product.reviews.forEach(r => {
        const li = document.createElement("li");
        li.innerText = r;
        reviewsList.appendChild(li);
    });
}
