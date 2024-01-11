import React, { useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"


function App() {
  const [category, setCategory] = useState(`all`)

  return (
    <>
      <Navbar category={category} setCategory={setCategory}/>
      <Main category={category} setCategory={setCategory}/>
    </>      
  )
}

export default App
