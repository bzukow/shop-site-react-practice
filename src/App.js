
import { useState, useEffect } from "react";
import products from "./db.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [productsList, setProductsList] = useState([""]);

  useEffect(() => {
    setProductsList(products);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home productsList={productsList}/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
