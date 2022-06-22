import React from 'react'
import {useSelector} from 'react-redux';
import OrderCart from './OrderCart';


function Orders({}) {

  const user = useSelector((state) => state.user.value)
  return (
    
    <>
      {user.id ? <>
    (<h1>Orders</h1>

    <h3>Welcome {user.first_name} </h3>

    <button>Create a new order</button>

    <div>Your Orders {user.orders.map(order => <OrderCart key={order.id} order={order}/>)} </div> </>
    :  <h1>Please log-in to see orders</h1>} 
    </>
  )
}

export default Orders