observations: 

PRODUCTS
- matching an image_url to the product is difficult because of the randomized product description/name given by the faker gem
    - beyond that, we only have a description for the products, not a name. is that intentional? 

ORDER_ITEMS
- the quantity key might not be needed? or at the very least the number of the quantity does not need to be intialized in the seed data. 
    -  alternate options: creating a custom serializer for the quantity of items ordered ???

CATEGORIES
- i'm hardcoding the categories.. need to finalize what few categories we want to have. 

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

