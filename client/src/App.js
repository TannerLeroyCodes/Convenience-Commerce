import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Products from "./Products";
// import CheckOut from "./CheckOut";
import {useSelector} from 'react-redux';
import Auth from "./Auth";
import ShoppingCart from './ShoppingCart';

function App() {

  const [orders, setOrders] = useState([])

  const user = useSelector((state) => state.user.value)
 

  // const isAuthenticated = useSelector((state) => state.authenticated.value)

  // useEffect(() => {
  //   fetch(`/orders`)
  //   .then((res) => res.json())
  //   .then((data) => setOrders(data))
  // },[])

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<HomePage/>}/>
        <Route exact path={"/orders"} element={<Orders orders={user.orders}/>}/>
        <Route exact path={"/orders/:id"} element={<ShoppingCart/>}/>
        <Route exact path={"/products"} element={<Products/>}/>

        <Route exact path={"*"} element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
