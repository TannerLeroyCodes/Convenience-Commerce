
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Products from "./Products";
import CheckOut from "./CheckOut";

function App() {


 
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<HomePage/>}/>
        <Route exact path={"/orders"} element={<Orders/>}/>
        <Route exact path={"/products"} element={<Products/>}/>

        <Route exact path={"*"} element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
