import React, {useState, useEffect} from 'react'

// components
import ProductCard from "./ProductCard"



function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/products")
      .then(r => r.json())
      .then(productData => setProducts(productData))
  },[])

  const productsToRender = products.map(product => <ProductCard product={product} key={product.id}/>)
  
  return (
    <div>Products
      {productsToRender}
    </div>
  )
}

export default Products
