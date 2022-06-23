import React, {useState} from 'react'

function ProductCard({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [isFavorite, setIsFavorite] = useState(favorite)

  const handleClick = () => {
    setIsFavorite(isFavorite => !isFavorite)
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
    </div>
  )
}

export default ProductCard