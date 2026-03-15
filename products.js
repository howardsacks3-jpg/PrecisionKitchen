async function loadProducts(){

const res = await fetch("data/products.json")

const products = await res.json()

const grid = document.getElementById("product-grid")

grid.innerHTML = products.map(p=>`

<div class="product-card">

<a href="product.html?id=${p.id}">
<img src="${p.image}" loading="lazy">
</a>

<h3>${p.name}</h3>

<div class="stars">

★★★★★
<span>(${p.reviews})</span>

</div>

<p>$${p.price}</p>

<button onclick='addToCart(${JSON.stringify(p)})'>
Add to Cart
</button>

</div>

`).join("")

}

loadProducts()
