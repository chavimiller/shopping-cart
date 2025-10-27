import Button from "./Button";
import { useCart } from "../hooks/CartContext";
import styles from "./Card.module.css";

const Card = ({ id, image, name, price, type, quantity }) => {
  const { cart, setCart } = useCart();

  function addToCart() {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, image, name, price, quantity: 1 }]);
    }
  }

  function removeFromCart() {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCart(cart.filter((item) => item.id !== id));
      } else {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      }
    }
  }

  function deleteItem() {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(cart.filter((item) => item.id !== id));
    }
  }

  if (type === "cartCard")
    return (
      <>
        <div className={styles.cartCard}>
          <img src={image} alt="Coffee image"></img>
          <div className={styles.productInfoCart}>
            <div className={styles.productNameCart}>{name}</div>
            <div className={styles.productPriceCart}>
              ${Math.round(price * quantity * 100) / 100}
            </div>
            <div className={styles.quantityCart}>{quantity}</div>
          </div>
          <div className={styles.checkoutButtons}>
            <Button
              quantity={quantity}
              type={"increment"}
              onIncrement={addToCart}
              onDecrement={removeFromCart}
            />
            <Button type={"delete"} onClick={deleteItem} />
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt="Coffee image"></img>
        <div className={styles.productInfo}>
          <div className={styles.productName}>{name}</div>
          <div className={styles.productPrice}>${price}</div>
        </div>
        <Button type={"general"} onClick={addToCart} text={"Add to cart"} />
      </div>
    </>
  );
};

export default Card;
