import ProductCard from "./ProductCard.js"
import styles from "./ProductsList.module.css"
function ProductsList({productsList}) {


  return (
      <div className={styles['products-list']}>
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
  );
}

export default ProductsList;