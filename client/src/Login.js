import React from 'react'

function Login() {
  return (
    <div>
        <h1>Log-in</h1>
        <h2>A convenient stop for all your shopping needs</h2>
        <form>
         <label>Email:</label>   
         <input type="text" placeholder='Email'></input>
         <label>Password:</label>
         <input type="text" placeholder='Password'></input>
         <button>Log-in</button>
        </form>


    </div>
  )
}

export default Login