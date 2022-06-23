import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <NavLink className={'navBarLink'} to="/"> HomePage</NavLink>
        <NavLink className={'navBarLink'} to="/orders"> Orders </NavLink>
        <NavLink className={'navBarLink'} to="/products"> Products </NavLink>
    </div>
  )
}

export default Navbar