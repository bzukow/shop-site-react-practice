import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css"
function ProductDetails({productsList, addToCart}) {
  const { id } = useParams();
  
  const product = productsList.find(product => product.id === id);
  if (!product) {
    return <p>Product not found. 😢</p>; // Jeśli brak produktu
  }
  return (
    <div className={styles["product-details-page"]}>
      <h1>Product Details</h1>
      <p>This is the page for product ID: {id}</p>
      <div className={styles["site-image-container"]}>
        <img src={product.fotoSrc} alt={product.name} />
      </div>
      <div className={styles["site-text-container"]}>
        <h3 className={styles["title"]}>{product.name}</h3>
        <p className={styles["price"]}>{product.price}€</p>
        <button className={styles["button"]} onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
