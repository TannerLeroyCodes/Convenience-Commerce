__todos__

PRODUCTS/PRODUCTCARD: 
- create an update button for products that only renders if the logged-in user is an admin

    __action list:__
        - create state for update form inputs
        - create patch request for products

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



