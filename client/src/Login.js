import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {authenticate} from './features/authenticated'
import Auth from './Auth'


function Login() {

const dispatch = useDispatch();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState([])


function handleLogin(e){
    e.preventDefault();

    const user = {
        email: email,
        password: password
    }
fetch("/login",  {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(user)
})
.then(res=> {
//    debugger 
   if (res.ok){
        res.json()
        .then(user =>{
            dispatch(login(user))
            dispatch(authenticate(true))
        })
    } else {
        res.json()
        .then(json => setError(json.eror))
    }
})

     
    // dispatch(login(fetch_obj))
}

  return (
    <div>
        <h1>Log-in</h1>
        <h2>A convenient stop for all your shopping needs</h2>
        <form onSubmit={handleLogin}>
         <label>Email:</label>   
         <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
         <label>Password:</label>
         <input type="text" placeholder='Password' value={[password]} onChange={(e) => setPassword(e.target.value)}></input>
         <button type={"submit"}>Log-in</button>
        </form>

{error?<div>{error}</div>:null}
<Auth />

    </div>
  )
}

export default Login