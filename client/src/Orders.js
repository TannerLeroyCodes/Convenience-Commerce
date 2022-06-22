import React from 'react'
import {useSelector} from 'react-redux';
import OrderCart from './OrderCart';


function Orders({orders}) {

  const user = useSelector((state) => state.user.value)
  return (
    <>
    <h1>Orders</h1>

    <h3>Welcome {user.first_name} </h3>

    <button>Create a new order</button>

    <div>Your Orders {orders.map(order => <OrderCart key={order.id} order={order}/>)} </div>
    </>
  )
}

export default Orders