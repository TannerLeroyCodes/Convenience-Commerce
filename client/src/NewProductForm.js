import React, {useState} from 'react'

function NewProductForm({addNewProduct}) {

    const [categoryValue, setCategoryValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [favoriteValue, setFavoriteValue] = useState("")
    const [imageUrlValue, setImageUrlValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [stockValue, setStockValue] = useState("")
    const [priceValue, setPriceValue] = useState("")


    // const handleNewProductFormSubmit = (e) => {
    //     e.preventDefault();

    //     const newProduct = {
    //         name: nameValue, 
    //     description: descriptionValue, 
    //     stock: stockValue, 
    //     price: priceValue, 
    //     favorite: favoriteValue, 
    //     image_url: imageUrlValue, 
    //     category: {
    //         name: categoryValue
    //     }
    //     }
        
    //     fetch("/products", {
    //         method: "POST", 
    //         headers: {
    //             "Content-Type": "application/json",
    //         }, 
    //         body: JSON.stringify(newProduct)
    //     })
    //         .then(r => r.json())
    //         .then(newProduct => addNewProduct(newProduct))
    // }

    

    // value type conversions:
     const stringToBoolean = (e) => e.target.value === "false" ? setFavoriteValue(false) : setFavoriteValue(true)
     const stringToInteger = (e) => setStockValue(parseInt(e.target.value)) 
     const stringToFloat = (e) => setPriceValue(parseFloat(e.target.value))

  return (
    <div>NewProductForm
        <form onSubmit ={e => handleNewProductFormSubmit(e)}>
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
                <option value="true">favorite {nameValue}</option>
                <option value="false">un-favorite {nameValue}</option>
            </select>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default NewProductForm