import React, {useState} from 'react'

function UpdateProductsForm() {
  

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
            <input type='submit'></input>
            
        </form>
    </div>
  )
}

export default UpdateProductsForm