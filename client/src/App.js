
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";

function App() {


 
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<HomePage/>}/>
        <Route exact path={"*"} element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default App;
