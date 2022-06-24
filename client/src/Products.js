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

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map(product => product.id === updatedProduct.id ? updatedProduct : product )
    setProducts(updatedProducts)
  }

  const productsToRender = products.map(product => <ProductCard product={product} key={product.id} updateProduct={updateProduct}/>)

  return (
    <div>
      {productsToRender}
    </div>
  )
}

export default Products
