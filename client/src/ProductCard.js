import React, {useState} from 'react'

// redux
import {useSelector} from "react-redux"

// components
import UpdateProductsForm from "./UpdateProductsForm"

function ProductCard({product, updateProduct, removeProduct, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  // redux states:
  const user = useSelector(state => state.user.value)

  // alternate states:
  const [isFavorite, setIsFavorite] = useState(favorite)
  const [isUpdateRendered, setIsUpdateRendered] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(current => !current)
  }

  const handleDeleteClick = (e) => {
    fetch(`/products/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(deletedProduct => removeProduct(product))
  }


  // console.log(user)


  const isAdminIfSoUpdateAndDelete = user.admin === true ? (
    <>
      <button onClick={e => handleUpdateFormClick(e)}>Update {name} info</button>
      <button onClick={e => handleDeleteClick(e)}>Delete {name}</button>
    </>
  
  ) : null

  const handleUpdateFormClick = (e) => setIsUpdateRendered(current => !current)


  return (
    <div>
      <img src={image_url} alt={name} className="product-card"></img>
      <h2>{name}</h2>
      <h3>Description: {description}</h3>
      <h3>Category: {category.name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Amount in stock: {stock}</h3>
      <button onClick ={e => handleFavoriteClick(e)}>
        {isFavorite? "★": "☆"}
      </button>
      {isAdminIfSoUpdateAndDelete}
      {isUpdateRendered && (
        <UpdateProductsForm product={product} updateProduct={updateProduct}/>
      )}
    </div>
  )
}

export default ProductCard