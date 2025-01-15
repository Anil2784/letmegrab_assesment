import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Product from "./Home/Product";
import Hero from "./Home/Hero"
import ProductView from "./Home/ProductView";
import UpdateProduct from "./Home/UpdateProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductView />} /> 
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Uncomment these routes if needed */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product_Deatails />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
