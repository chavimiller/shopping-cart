import { useCart } from "../hooks/CartContext";

const CartPage = () => {
  const { cart, setCart } = useCart();

  return (
    <>
      <div className="cart-container"></div>
    </>
  );
};

export default CartPage;
