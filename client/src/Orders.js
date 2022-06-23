import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import OrderCard from './OrderCard';
// import {useDispatch} from 'react-redux';
import {makeCurrentOrder} from './features/currentOrder';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";





function Orders({}) {

  const user = useSelector((state) => state.user.value)
  // const currentOrder = useSelector((state) => state.value)
  const dispatch = useDispatch();
  const history = useNavigate();
  const [error, setErrors] = useState([])
  //need to cause a re-render on creating a new order 

function handleClick(){

  const newOrder = {
    ordered: false, 
    user_id: user.id
  }
  fetch('/orders', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newOrder)
  })
  .then(res => {
    if (res.ok){
    res.json()
  .then(order => {
  (dispatch(makeCurrentOrder(order)))
  history(`/orders/${order.id}`)
   
  })
} else {
  res.json()
  .then((json) => setErrors(json.errors))
}
  
  })}


  return (
    
    <>
      {user.id ? <>
    <h1>Orders</h1>

    <h3>Welcome {user.first_name} </h3>
    {error?<div>{error}</div>:null}
    <button onClick={handleClick}>Create a new order</button>
    

    <div>Your Orders: {user.orders.map(order => <OrderCard key={order.id} order={order}/>)} </div> </>
    :  <h1>Please log-in to see orders</h1>} 
    </>
  )
}

export default Orders