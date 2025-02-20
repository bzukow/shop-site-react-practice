import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom";

function ProductCard({product, addToCart}) {
    return (
        <Link to={`/product/${product.id}`}>
          <div className={styles['product-card']}>
            <div className={styles['card-image-container']}>
                <img src={product.fotoSrc} alt={product.name} />
            </div>
            <div className={styles['card-text-container']}>
                <h3 className={styles['product-card-title']}>{product.name}</h3> 
            </div>
            <div className={styles['card-button-container']}>
            <p className={styles["product-card-price"]}>{product.price}€</p>
              <button className={`${styles['product-card-button']} ${styles['product-card-button--small']}`} onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        </Link>
     
    );
  }
  
  export default ProductCard;