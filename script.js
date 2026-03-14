let cart=[]
let total=0

function addToCart(name,price){

cart.push({name,price})

total+=price

updateCart()

openCart()

}

function updateCart(){

document.getElementById("cartCount").innerText=cart.length

document.getElementById("cartTotal").innerText=total.toFixed(2)

let items=""

cart.forEach(item=>{

items+=`<p>${item.name} - $${item.price}</p>`

})

document.getElementById("cartItems").innerHTML=items

}

function openCart(){

document.getElementById("cart").classList.add("open")

}

function closeCart(){

document.getElementById("cart").classList.remove("open")

}

document.getElementById("cartButton").onclick=openCart

function calculateShipping(){

let cost=document.getElementById("country").value

document.getElementById("shippingResult").innerText="Shipping cost: $"+cost

}
function searchProducts(){

let input=document.getElementById("search").value.toLowerCase()

let products=document.querySelectorAll(".product")

products.forEach(p=>{

let name=p.innerText.toLowerCase()

p.style.display=name.includes(input) ? "block" : "none"

})

}
fetch("products.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("product-list")

data.products.forEach(p=>{

container.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add to Cart
</button>
</div>)
fetch("products.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("product-list")

data.products.forEach(p=>{

container.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add to Cart
</button>

</div>
fetch("products.json")

.then(response => response.json())

.then(data => {

let container = document.getElementById("product-grid")

data.products.forEach(p => {

container.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="location.href='checkout.html'">
Buy Now
</button>

</div>

`

})

})
`

})

})
`

