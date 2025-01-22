
import { useState, useEffect } from "react";
import products from "./db.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {
    setTimeout(() => {  
      setProductsList(products);
      setLoading(false);  
    }, 1000);  
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={loading ? <h2>Loading...</h2> : <Home productsList={productsList} addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={loading ? <h2>Loading...</h2> : <ProductDetails productsList={productsList} addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
