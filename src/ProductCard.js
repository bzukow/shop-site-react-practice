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
                <h3 className={styles['title']}>{product.name}</h3>
                <p className={styles["price"]}>{product.price}€</p>
                <button className={`${styles['button']} ${styles['button--small']}`} onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        </Link>
     
    );
  }
  
  export default ProductCard;