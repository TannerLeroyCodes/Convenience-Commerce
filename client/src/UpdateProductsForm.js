import React, {useState} from 'react'

function UpdateProductsForm({product, product: {category, description, favorite, id, image_url, name, stock, price}}) {
  const [categoryValue, setCategoryValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")
  const [favoriteValue, setFavoriteValue] = useState("")
  const [imageUrlValue, setImageUrlValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [stockValue, setStockValue] = useState("")
  const [priceValue, setPriceValue] = useState("")



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
            name: categoryValue
        }
      }

      console.log(updatedProduct)

    //   fetch("/products", {
    //       method: "POST", 
    //       headers: {
    //           "Content-Type": "application/json",
    //         }, 
    //         body: JSON.stringify(updatedProduct)
    //   })
    //     .then(r => r.json())
    //     .then(updatedProduct => console.log(updatedProduct))
    }



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
                <input type='text' value={stockValue} onChange={e => setStockValue(e.target.value)}></input>
            </label>
            <label>Price
                <input type='text' value={priceValue} onChange={e => setPriceValue(e.target.value)}></input>
            </label>
            <label>Image Url
                <input type='text' value={imageUrlValue} onChange={e => setImageUrlValue(e.target.value)}></input>
            </label>
            <label>Category Name
                <input type='text' value={categoryValue} onChange={e => setCategoryValue(e.target.value)}></input>
            </label>
            <select onChange={e => setFavoriteValue(e.target.value)}>
                <option value={true}>favorite {name}</option>
                <option value={false}>un-favorite {name}</option>
            </select>

            <input type='submit'></input>
            
        </form>
    </div>
  )
}

export default UpdateProductsForm