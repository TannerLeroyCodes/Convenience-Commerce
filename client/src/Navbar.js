import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {logout} from './features/user'
import {leaveCurrentOrder} from './features/currentOrder'


function Navbar() {

  const user = useSelector((state) => state.user.value)
  const currentOrder = useSelector((state) => state.currentOrder.value)
  const dispatch = useDispatch();

  function handleLogOut(){
    fetch("/logout", {"method": "DELETE"})
    .then(dispatch(logout(user)))
    .then(dispatch(leaveCurrentOrder()))
  }

  return (
    <div>
        <NavLink className={'navBarLink'} to="/"> HomePage</NavLink>
        <NavLink className={'navBarLink'} to="/orders"> Orders </NavLink>
        <NavLink className={'navBarLink'} to={`/orders/${currentOrder.id}`} >Shopping Cart</NavLink>     
         <NavLink className={'navBarLink'} to="/products"> Products </NavLink>
         {user.id ? <button onClick={handleLogOut}>Log-out</button>: null}
    </div>
  )
}

export default Navbar