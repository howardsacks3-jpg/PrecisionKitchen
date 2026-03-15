let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart))
updateCartCount()
}

function addToCart(product){

const existing = cart.find(i => i.id === product.id)

if(existing){
existing.qty++
}else{
cart.push({...product, qty:1})
}

saveCart()
alert(product.name + " added to cart")

}

function updateQuantity(id,delta){

const item = cart.find(i=>i.id===id)

if(!item) return

item.qty+=delta

if(item.qty<=0){
cart = cart.filter(i=>i.id!==id)
}

saveCart()

}

function removeFromCart(id){

cart = cart.filter(i=>i.id!==id)

saveCart()

}

function updateCartCount(){

const count = cart.reduce((sum,i)=>sum+i.qty,0)

document.querySelectorAll(".cart-count").forEach(el=>{
el.innerText = count
})

}

updateCartCount()
