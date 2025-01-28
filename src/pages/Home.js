import ProductsList from "../ProductsList.js"
import styles from "./Home.module.css";

function Home({productsList, addToCart}) {
    return (
      <div className={styles["App"]}>
        <div className={styles["App-header"]}>
          <h1 className={styles["App-header-h1"]}>Welcome to the Store</h1>
          <p className={styles["App-header-p"]}>Choose a product above!</p>
          <ProductsList productsList={productsList} addToCart={addToCart}/>
        </div>
      </div>
    );
  }
  
  export default Home;