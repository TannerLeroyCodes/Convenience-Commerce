import React, {useState} from 'react'

// redux
import {useSelector} from "react-redux"

// components
import UpdateProductsForm from "./UpdateProductsForm"

function ProductCard({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [isFavorite, setIsFavorite] = useState(favorite)
  
  const handleClick = () => {
    setIsFavorite(isFavorite => !isFavorite)
  }

  const user = useSelector(state => state.user.value)

  // console.log(user)


  const isAdmin = user.admin === true ? (
  <button onClick={e => renderProductUpdateForm(e)}>Update {name} info</button>
  ) : null

  const renderProductUpdateForm = () => {
    // console.log("render!")
    (<UpdateProductsForm />)
  }


  return (
    <div>ProductCard
      <img src={image_url} alt={name} className="product-card"></img>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>Category: {category.name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Amount in stock: {stock}</h3>
      <button onClick ={e => handleClick(e)}>
        {isFavorite? "★": "☆"}
      </button>
      {isAdmin}
    </div>
  )
}

export default ProductCard