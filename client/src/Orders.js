import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import OrderCart from './OrderCart';


function Orders({}) {

  const user = useSelector((state) => state.user.value)
  //need to cause a re-render on creating a new order 
  // const [currentOrder, setCurrentOrder] = useState({})

function handleClick(){

  const newOrder = {
    ordered: false, 
    user_id: user.id
  }


  fetch('/orders', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newOrder)
  },[])
  // setCurrentOrder(newOrder)
}

  return (
    
    <>
      {user.id ? <>
    <h1>Orders</h1>

    <h3>Welcome {user.first_name} </h3>

    <button onClick={handleClick}>Create a new order</button>

    <div>Your Orders: {user.orders.map(order => <OrderCart key={order.id} order={order}/>)} </div> </>
    :  <h1>Please log-in to see orders</h1>} 
    </>
  )
}

export default Orders