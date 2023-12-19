import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

function App() {
  const [category, setCategory] = useState('allProducts');

  

  return (
    <Routes>
      <Route
        path="/"
        element={<Home category={category} setCategory={setCategory} />}
      />
      <Route path="/product/:id" element={<Products />}/>
    </Routes>
  );
}

export default App;
