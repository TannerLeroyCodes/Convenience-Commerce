import React, {useState, useEffect} from 'react'
import ProductCard from "./ProductCard"

function Products({}) {
  
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    fetch("/products")
      .then(r => r.json())
      .then(productsData => setProducts(productsData))
  }, [])

  const productsToRender = products.map(product => <ProductCard product={product} key={product.id}/>)
  
  return (
    <div>Products
      {productsToRender}
    </div>
  )
}

export default Products