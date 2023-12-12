import React, { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"


function App() {
  const [products, setProducts] = useState(`allProducts`)

  return (
    <>
      <Navbar products={products} setProducts={setProducts}/>
      <Main products={products} setProducts={setProducts}/>
    </>      
  )
}

export default App
