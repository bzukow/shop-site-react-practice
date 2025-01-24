
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
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      if (savedCart) {
        setCart(savedCart);
      }
      setLoading(false);  
    }, 1000);  
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    
    <BrowserRouter>
    {!loading && (
    <header>
      <Link to="/cart">Cart ({cart.length})</Link>
    </header>
  )}
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
