import React, {useState, useEffect} from 'react'
import ProductCard from "./ProductCard"

function Products({products}) {
  
  console.log(products)

  const productsToRender = products.map(product => <ProductCard product={product} key={product.id}/>)
  
  return (
    <div>Products
      {productsToRender}
    </div>
  )
}

export default Products