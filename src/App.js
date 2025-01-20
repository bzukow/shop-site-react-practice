import "./App.css";
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/product/123">Product 123</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home productsList={productsList}/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      {/* <div className="App">
        <header className="App-header">
        
        </header>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
