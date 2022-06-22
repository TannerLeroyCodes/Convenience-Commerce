import React from 'react'




function OrderCart({order}) {
   console.log(order) 
  return (
    <div className="order-card">

    <div>Order Number: {order.id}</div>
    <div>Order placed: {order.ordered ? "Submitted" : "Not placed"} </div>
    <div>Quantity of items: {order.order_items.length}</div>
    </div>
  )
}

export default OrderCart