import ProductCard from "./ProductCard.js"
import styles from "./ProductsList.module.css"
function ProductsList({productsList, addToCart}) {
  return (
      <div className={styles['products-list']}>
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
  );
}

export default ProductsList;