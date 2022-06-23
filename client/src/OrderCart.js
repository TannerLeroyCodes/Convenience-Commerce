import React from 'react'

// need to cause a re-render on delete. 


function OrderCart({order}) {

    function handleDelete(){
        fetch(`/orders/${order.id}`, {"method": "DELETE"});
    }

  return (
    <div className="order-card">

    <div>Order Id: {order.id}</div>
    <div>Order placed: {order.ordered ? "Submitted" : "Not placed"} </div>
    <div>Quantity of items: {order.order_items.length}</div>
    <button onClick={handleDelete}>Delete Order</button>
    </div>
  )
}

export default OrderCart