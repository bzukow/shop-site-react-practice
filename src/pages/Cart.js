import styles from "./Cart.module.css";

function Cart({ cart, removeFromCart }) {
  return (
    <div className={styles["cart-page"]}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your 🛒 is empty 😔</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className={styles["cart-item"]}>
              <img src={item.fotoSrc} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}€</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;