__todos__

PRODUCTS/PRODUCTCARD: 
- create an update button for products that only renders if the logged-in user is an admin

    __action list:__
        - create state for update form inputs
        - create patch request for products
        - convert price string type to integer compatible with float ruby type 
        - convert stock string type to integer (without decimals)

// admin 
handleUpdate(){

const = product_obj

fetch request 
method: PATCH
body: {product_obj}

//add product to shopping cart

handleAddToCart(){
    const = order_item {
        product_id: product.id 
        user_id: user.id
    }

    fetch request to "/order_items"
    method: POST
    body: {order_item}
}



