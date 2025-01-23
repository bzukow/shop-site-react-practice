
import { useState, useEffect } from "react";
import products from "./db.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
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
    <header>
        <Link to="/cart">Cart ({cart.length})</Link>
      </header>
      <Routes>
        <Route
          path="/"
          element={loading ? <h2>Loading...</h2> : <Home productsList={productsList} addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={loading ? <h2>Loading...</h2> : <ProductDetails productsList={productsList} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
