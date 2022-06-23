import { useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Products from "./Products";
// import CheckOut from "./CheckOut";
import {useSelector} from 'react-redux';
import ShoppingCart from './ShoppingCart';

function App() {



  const user = useSelector((state) => state.user.value)
 


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path={"/"} element={<HomePage />}/>
        <Route exact path={"/orders"} element={<Orders orders={user.orders} />}/>
        <Route exact path={"/orders/:id"} element={<ShoppingCart />}/>
        <Route exact path={"/products"} element={<Products/>}/>

        <Route exact path={"*"} element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
