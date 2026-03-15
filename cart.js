let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(product){

const existing = cart.find(i=>i.id===product.id)

if(existing){

existing.qty++

}else{

cart.push({...product,qty:1})

}

localStorage.setItem("cart",JSON.stringify(cart))

}
