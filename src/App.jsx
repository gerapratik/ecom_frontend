import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register"
import {useSelector} from "react-redux"

function App() {
  const user =useSelector(state=>state.user.currentUser)  
  // const user =false; //delete later
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="product/:id" element={<Product/>}/>
      <Route path="cart" element={<Cart/>}/>

      {/* <Route path="login" element={user? <Navigate to="/"/>: <Login/>}/> */}
      <Route path="login" element={<Login/>}/>

      {/* <Route path="register" element={user? <Navigate to="/"/>: <Register/>}/> */}
      <Route path="register" element={ <Register/>}/>



      </Routes>
    </Router>
  );
}

export default App;
