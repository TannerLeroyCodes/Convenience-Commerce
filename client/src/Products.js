import React, {useState, useEffect} from 'react'

// redux
import {useSelector} from "react-redux"

// components
import ProductCard from "./ProductCard"
import NewProductForm from './NewProductForm'

function Products() {
  // redux states:
  const user = useSelector(state => state.user.value)
  
  // alternate states:
  const [products, setProducts] = useState([])
  const [isNewFormRendered, setIsNewFormRendered] = useState(false)
 

  useEffect(() => {
    fetch("/products")
      .then(r => r.json())
      .then(productData => setProducts(productData))
  },[])

  const isAdminIfSoCreate = user.admin === true? (
    <button onClick={e => handleNewFormClick(e)}>Create New Product</button>
  ) : null

  const handleNewFormClick = (e) => setIsNewFormRendered(current => !current)

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map(product => product.id === updatedProduct.id ? updatedProduct : product )
    setProducts(updatedProducts)
  }

  const productsToRender = products.map(product => <ProductCard product={product} key={product.id} updateProduct={updateProduct}/>)

  return (
    <div>
      {isNewFormRendered && (
        <NewProductForm />
      )}
      {productsToRender}
    </div>
  )
}

export default Products
