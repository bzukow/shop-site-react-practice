import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css"
function ProductDetails(product) {
  const { id } = useParams();

  return (
    <div className={styles["product-site"]}>
      <h1>Product Details</h1>
      <p>This is the page for product ID: {id}</p>
      <div className={styles["site-image-container"]}>
        <img src={product.fotoSrc} alt={product.name} />
      </div>
      <div className={styles["site-text-container"]}>
        <h3 className={styles["title"]}>{product.name}</h3>
        <p className={styles["price"]}>{product.price}€</p>
        <button className={styles["button"]}>Show more</button>
        <button className={styles["button"]}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
