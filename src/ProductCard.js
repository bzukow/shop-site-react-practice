import styles from "./ProductCard.module.css"
function ProductCard({product}) {

    return (
      <div className={styles['product-card']}>
        <div className={styles['card-image-container']}>
            <img src={product.fotoSrc} alt={product.name} />
        </div>
        <div className={styles['card-text-container']}>
            <h3 className={styles['title']}>{product.name}</h3>
            <p className={styles['price']}>{product.price}€</p>
            <button  className={styles['button']}>
                Show more
            </button>
            <button  className={styles['button']}>
                Add to cart
            </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;