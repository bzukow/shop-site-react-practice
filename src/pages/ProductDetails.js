import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
function ProductDetails({ productsList, addToCart }) {
  const { id } = useParams();

  const product = productsList.find((product) => product.id === id);
  if (!product) {
    return (
      <div className={styles["product-details-page"]}>
        <p>Product not found. 😢</p>;
        <button className={styles["button"]} onClick={() => addToCart(product)}>
          Back to the list
        </button>
      </div>
    );
  }
  return (
    <div className={styles["product-details-page-container"]}>
      <div className={styles["product-details-page"]}>
        <div className={styles["site-image-container"]}>
          <img src={product.fotoSrc} alt={product.name} />
        </div>
        <div className={styles["site-text-container"]}>
          <h2 className={styles["site-text-container-title"]}>{product.name}</h2>
          <p className={styles["site-text-container-price"]}>{product.price}€</p>
          <div className={styles["site-text-container-separator"]}></div>
          <p className={styles["site-text-container-description"]}>{product.description}</p>
          <button
            className={styles["button"]}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
