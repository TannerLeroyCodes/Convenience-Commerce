import React, {useState} from 'react'

function UpdateProductsForm({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [categoryValue, setCategoryValue] = useState(category)
  const [descriptionValue, setDescriptionValue] = useState(description)
  const [favoriteValue, setFavoriteValue] = useState(favorite)
  const [imageUrlValue, setImageUrlValue] = useState(image_url)
  const [nameValue, setNameValue] = useState(name)
  const [stockValue, setStockValue] = useState(stock)
  const [priceValue, setPriceValue] = useState(price)

    return (
    <div>UpdateProductsForm
        <form>
            <label>Name
                <input type='text'></input>
            </label>
            <label>Description
                <input type='text'></input>
            </label>
            <label>Stock
                <input type='text'></input>
            </label>
            <label>Price
                <input type='text'></input>
            </label>
            <label>Image Url
                <input type='text'></input>
            </label>
            <label>Category Name
                <input type='text'></input>
            </label>
            <select>
                <option value="false">favorite (true)</option>
                <option value="true">un-favorite (false)</option>
            </select>

            <input type='submit'></input>
            
        </form>
    </div>
  )
}

export default UpdateProductsForm