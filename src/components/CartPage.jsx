import { useCart } from "../hooks/CartContext";
import Card from "./Card";

const CartPage = () => {
  const { cart, setCart } = useCart();
  if (cart.length === 0)
    return (
      <>
        <div className="empty-cart">
          Looks like your cart is empty! Check out our coffee selection{" "}
        </div>
      </>
    );
  return (
    <>
      <div className="cart-grid">
        {cart &&
          cart.map((product) => (
            <Card
              type={"cartCard"}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
      </div>

      <div className="total">
        Total: $
        {cart
          .reduce((acc, product) => acc + product.price * product.quantity, 0)
          .toFixed(2)}
      </div>
    </>
  );
};

export default CartPage;
