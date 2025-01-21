import ProductsList from "../ProductsList.js"
import styles from "./Home.module.css";

function Home({productsList}) {
    return (
      <div className={styles["App"]}>
        <div className={styles["App-header"]}>
          <h1>Welcome to the Store</h1>
          <p>Choose a product above!</p>
          <ProductsList productsList={productsList}/>
        </div>
      </div>
    );
  }
  
  export default Home;