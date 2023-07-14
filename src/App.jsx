import React from "react"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
 import Home from "./components/Home";
import { Routes,Route } from "react-router-dom"
import  Product from "./components/Product";
import Cart from "./components/Cart";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/products/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}

export default App
