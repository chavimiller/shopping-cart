import { useCart } from "../hooks/CartContext";
import Card from "./Card";

const CartPage = () => {
  const { cart, setCart } = useCart();

  return (
    <>
      <div className="cart-container">
        {cart.forEach((product) => (
          <Card
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default CartPage;
