import React from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function ShoppingCart() {

const currentOrder = useSelector((state) => state.currentOrder.value)
const history = useNavigate();
  

function handleSubmit(e){

    const obj = {ordered: true}

    fetch(`/orders/${currentOrder.id}`,  {
     "method": "PATCH",
     "headers": {"Content-Type": "application/json"},
     "body": JSON.stringify(obj) 
    
    });
}

function handleProducts(){
history('/products')
}


  return (
    <>
 {currentOrder.id ? <> 
    <h1>ShoppingCart</h1>
    
    <button onClick={handleProducts}>Add more Items to Cart</button>
    <div>Order ID:{currentOrder.id}</div>
    <div>Order Submitted: {currentOrder.ordered ? "Order has been submitted" : "Order has not been submitted"}</div>
    <button onClick={handleSubmit}>Submit your order</button>
    
    </> : <h1>Please log-in to view shopping cart</h1>}
    </> 
  )
}

export default ShoppingCart