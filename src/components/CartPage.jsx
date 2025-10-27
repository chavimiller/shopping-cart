import { useCart } from "../hooks/CartContext";
import Card from "./Card";
import Button from "./Button";
import { useNavigate } from "react-router";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };
  if (cart.length === 0)
    return (
      <>
        <div className={`${styles.emptyCart} container section`}>
          <div>Looks like your cart is empty! </div>
          <Button type={"general"} text="Shop Now" onClick={handleShopClick} />
        </div>
      </>
    );
  return (
    <>
      <div className="container section">
        <div className={styles.cartGrid}>
          {cart &&
            cart.map((product) => (
              <Card
                type={"cartCard"}
                id={product.id}
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
        </div>
        <div className={styles.total}>
          Total: $
          {cart
            .reduce((acc, product) => acc + product.price * product.quantity, 0)
            .toFixed(2)}
        </div>
      </div>
    </>
  );
};

export default CartPage;
