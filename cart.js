let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(product){

const existing = cart.find(i => i.id === product.id)

if(existing){
existing.qty++
}else{
cart.push({...product, qty:1})
}

saveCart()

alert("Added to cart")

}
