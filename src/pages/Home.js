import ProductsList from "../ProductsList.js"

function Home({productsList}) {
    return (
      <div>
        <h1>Welcome to the Store</h1>
        <p>Choose a product above!</p>
        <ProductsList productsList={productsList}/>
      </div>
    );
  }
  
  export default Home;