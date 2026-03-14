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
