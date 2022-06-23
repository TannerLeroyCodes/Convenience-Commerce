import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import { makeCurrentOrder } from './features/currentOrder';

// need to cause a re-render on delete. 


function OrderCard({order}) {

  const history = useNavigate();
  const dispatch = useDispatch();
  // const currentOrder = useSelector((state) => state.currentOrder.value)

    function handleDelete(){
        fetch(`/orders/${order.id}`, {"method": "DELETE"});
    }

    function handleShoppingCart(){
      dispatch(makeCurrentOrder(order))
      history(`/orders/${order.id}`)
    }

  return (
    <div className="order-card">

    <div>Order Id: {order.id}</div>
    <div>Order placed: {order.ordered ? "Submitted" : "Not placed"} </div>
    <div>Quantity of items: {order.order_items.length}</div>
    <button onClick={handleDelete}>Delete Order</button>
    <button onClick={handleShoppingCart}> View your order</button>
    
    </div>
  )
}

export default OrderCard