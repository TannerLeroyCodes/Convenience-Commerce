import React, {useState} from 'react'

import "./ProductCard.css"

function ProductCard({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(isFavorite => !isFavorite)
  }


  return (
    <div>
      <img src={image_url} alt={name}></img>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>Category: {category.name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Amount in stock: {stock}</h3>
      <button onClick ={e => handleClick(e)}>
        {isFavorite? "★": "☆"}
      </button>
    </div>
  )
}

export default ProductCard