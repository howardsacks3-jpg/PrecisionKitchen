console.log("Store loaded");
let cart = [];

function addToCart(product, price) {
  cart.push({product, price});
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.product + " - $" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("cart-total").innerText = total.toFixed(2);
}
