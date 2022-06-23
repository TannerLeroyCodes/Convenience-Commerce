import React from 'react'
import Login from './Login'

function HomePage({setCurrentOrder}) {
  return (
    <>
    <h1>Convenience Commerce</h1>
    <Login setCurrentOrder={setCurrentOrder}/>
</>
  )
}

export default HomePage