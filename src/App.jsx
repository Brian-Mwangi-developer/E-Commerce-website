import React from "react"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
 import Home from "./components/Home";
import { Routes,Route } from "react-router-dom"
import  Product from "./components/Product";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/products/:id" element={<Product />}/>
    </Routes>
    </>
  )
}

export default App
