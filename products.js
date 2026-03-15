async function loadProducts(){

const res = await fetch("data/products.json")

const products = await res.json()

const grid = document.getElementById("product-grid")

if(!grid) return

grid.innerHTML = products.map(p=>`

<div class="product">

<a href="product.html?id=${p.id}">
<img src="${p.image}">
</a>

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick='addToCart(${JSON.stringify(p)})'>
Add To Cart
</button>

</div>

`).join("")

}

loadProducts()
