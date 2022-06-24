import React, {useState} from 'react'

// redux
import {useSelector} from "react-redux"

// components
import UpdateProductsForm from "./UpdateProductsForm"

function ProductCard({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {

  // alternate states:
  const [isFavorite, setIsFavorite] = useState(favorite)
  const [isUpdateRendered, setIsUpdateRendered] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(isFavorite => !isFavorite)
  }

  const user = useSelector(state => state.user.value)

  // console.log(user)


  const isAdmin = user.admin === true ? (
  <button onClick={e => handleUpdateFormClick(e)}>Update {name} info</button>
  ) : null

  const handleUpdateFormClick = (e) => setIsUpdateRendered(current => !current)


  return (
    <div>ProductCard
      <img src={image_url} alt={name} className="product-card"></img>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>Category: {category.name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Amount in stock: {stock}</h3>
      <button onClick ={e => handleFavoriteClick(e)}>
        {isFavorite? "★": "☆"}
      </button>
      {isAdmin}
      {isUpdateRendered && (
        <UpdateProductsForm product={product}/>
      )}
    </div>
  )
}

export default ProductCard