import React, {useState} from 'react'

function UpdateProductsForm({product, updateProduct, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [categoryValue, setCategoryValue] = useState(category.name)
  const [descriptionValue, setDescriptionValue] = useState(description)
  const [favoriteValue, setFavoriteValue] = useState(favorite)
  const [imageUrlValue, setImageUrlValue] = useState(image_url)
  const [nameValue, setNameValue] = useState(name)
  const [stockValue, setStockValue] = useState(stock)
  const [priceValue, setPriceValue] = useState(price)



  const handleUpdateProductFormSubmit = (e) => {
      e.preventDefault(); 
    
      const updatedProduct = {
        name: nameValue, 
        description: descriptionValue, 
        stock: stockValue, 
        price: priceValue, 
        favorite: favoriteValue, 
        image_url: imageUrlValue, 
        category: {
            id: category.id,
            name: categoryValue
        }
      }

    //   console.log("updated product: ", updatedProduct)

    //   console.log("original product:", product)

      fetch(`/products/${id}`, {
          method: "PATCH", 
          headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify(updatedProduct)
      })
        .then(r => r.json())
        .then(updatedProduct => updateProduct(updatedProduct))
    }

    // value type conversions:
    const stringToBoolean = (e) => e.target.value === "false" ? setFavoriteValue(false) : setFavoriteValue(true)
    const stringToInteger = (e) => setStockValue(parseInt(e.target.value)) 
    const stringToFloat = (e) => setPriceValue(parseFloat(e.target.value))

    return (
    <div>UpdateProductsForm
        <form onSubmit={e => handleUpdateProductFormSubmit(e)}>
            <label>Name
                <input type='text' value={nameValue}  onChange={e => setNameValue(e.target.value)}></input>
            </label>
            <label>Description
                <input type='text' value={descriptionValue} onChange={e => setDescriptionValue(e.target.value)}></input>
            </label>
            <label>Stock
                <input type='number' value={stockValue} onChange={e => stringToInteger(e)}></input>
            </label>
            <label>Price
                <input type='number' value={priceValue} onChange={e => stringToFloat(e)}></input>
            </label>
            <label>Image Url
                <input type='text' value={imageUrlValue} onChange={e => setImageUrlValue(e.target.value)}></input>
            </label>
            <label>Category Name
                <input type='text' value={categoryValue} onChange={e => setCategoryValue(e.target.value)}></input>
            </label>
            <select onChange={e => stringToBoolean(e)}>
                <option value="true">favorite {name}</option>
                <option value="false">un-favorite {name}</option>
            </select>

            <input type='submit'></input>
            
        </form>
    </div>
  )
}

export default UpdateProductsForm