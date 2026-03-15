async function loadProduct(){

const params = new URLSearchParams(window.location.search)

const id = params.get("id")

const res = await fetch("data/products.json")
const products = await res.json()

const p = products.find(x => x.id == id)

if(!p) return

document.getElementById("product-page").innerHTML = `

<img src="${p.image}" width="300">

<h1>${p.name}</h1>

<p>${p.description}</p>

<p>$${p.price}</p>

<button onclick='addToCart(${JSON.stringify(p)})'>
Add To Cart
</button>

`

}

loadProduct()
