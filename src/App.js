import { useState, useEffect } from "react";
import products from "./db.json";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import styles from "./App.module.css"
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
    // setCart((prevCart) => {
    //   const updatedCart = prevCart.filter((item) => item.id !== productId);
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    //   return updatedCart;
    // });
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === productId);
  
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
        return updatedCart;
      }
      return prevCart; 
    });
  };

  const Header = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
    
    if(loading) return null;

    if(isHome) return (
      <header className={styles["App-header-style-homepage"]} >
        <div className={styles['App-header-cart']}>
          <Link to="/cart" >🛒✨ ({cart.length})</Link>
        </div>
        
      </header>
    );
    
    return (
        <header className={styles["App-header-style"]} >
          {!isHome && (
            <span className={styles["App-header-back-button"]} onClick={() => navigate(-1)}>
              ← Back
            </span>
          )}
          <div className={styles['App-header-cart']}>
            <Link to="/cart" >🛒✨ ({cart.length})</Link>
          </div>
          
        </header>
      )
  };
  return (
    <div className={styles['App-container']}>
      <BrowserRouter basename="/shop-site-react-practice">
        <Header />
        <Routes>
          <Route path="/" element={loading ? <div className={styles['App-container-loading']}><h2>Loading...</h2></div> : <Home productsList={productsList} addToCart={addToCart} />}/>
          <Route path="/product/:id" element={loading ? <div className={styles['App-container-loading']}><h2>Loading...</h2></div> : <ProductDetails productsList={productsList} addToCart={addToCart} />}/>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        
      </BrowserRouter>
  </div>
    
    
  );
}

export default App;
