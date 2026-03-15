async function loadReviews(productId){

const res = await fetch("data/reviews.json")

const reviews = await res.json()

const filtered = reviews.filter(r=>r.product==productId)

document.getElementById("reviews").innerHTML =
filtered.map(r=>`

<div class="review">

<strong>${r.name}</strong>

<p>${"★".repeat(r.rating)}</p>

<p>${r.text}</p>

</div>

`).join("")

}
