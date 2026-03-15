// Load cart from localStorage or start empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Add product to cart
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  alert(`Added "${product.name}" to cart`);
}

// Update cart item quantity
function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

// Update cart count in header
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
  });
}

// Initialize cart count on page load
updateCartCount();
