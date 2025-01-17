import './App.css';
import { useState,useEffect } from 'react';
import MainSite from './MainSite.js';

function App() {
  const [productsList, setProductsList] = useState(['']);

  useEffect(() => {
          fetch("http://localhost:3001/products")
              .then((response) => response.json())
              .then((data) => {
                  setProductsList(data);
              })
              .catch((err) => console.error("Something got wrong 😅", err));
      }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MainSite productsList={productsList}/>
      </header>
    </div>
  );
}

export default App;
