function searchProducts(products,term){

term = term.toLowerCase()

return products.filter(p =>
p.name.toLowerCase().includes(term)
)

}
