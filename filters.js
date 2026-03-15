function filterProducts(products){

const category =
document.getElementById("categoryFilter").value

return products.filter(p=>{

if(category && p.category!==category)
return false

return true

})

}
