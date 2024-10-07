import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Product from "./components/pages/Product.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Login from "./components/pages/Login.jsx";
import SignUp from "./components/pages/SignUp.jsx";

const App = () => {

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/about-us" element={<About />}/>
          <Route path="/contacts" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;