import React from 'react'
import {useSelector} from 'react-redux';


function Orders() {

  const user = useSelector((state) => state.user.value)
  return (
    <>
    <h1>Orders</h1>

    <h3>Welcome {user.first_name} </h3>
    </>
  )
}

export default Orders