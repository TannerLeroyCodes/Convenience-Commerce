import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {authenticate} from './features/authenticated'



function Auth() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.value)
    // const isAuthenticated = useSelector((state) => state.authenticate.value)

    function onSubmit(e){
        e.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
     fetch('/signup', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(user),
     })
     .then(res => {
        if (res.ok) {
            res.json()
            .then(user=>{
                dispatch(login(user))
                dispatch(authenticate(true))
            })
     } else {
        res.json()
        .then(json => setErrors(json.errors))
     }
    })
    }

  return (
    <div>
    <h1>Sign-up</h1>
    <form onSubmit={onSubmit}>
    <label> First Name</label>
    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}></input>
    <label> Last Name</label>
    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}></input>
    <label> Email</label>
    <input type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
    <label> Password</label>
    <input type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
    <button type="submit">Sign</button>
    </form>
    { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div>{key+': ' + Object.values(errors)[index]}</div>) : null }
    </div>
  )
}

export default Auth