import Button from "./Button";
import { useCart } from "../hooks/CartContext";

const Card = ({ id, image, name, price }) => {
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
    console.log(cart);
  }

  return (
    <>
      <div className="card">
        <img src={image} alt="Coffee image"></img>
        <div className="product-info">
          <div className="product-name">{name}</div>
          <div className="product-price">${price}</div>
        </div>
        <Button type={"addToCart"} onClick={addToCart} />
      </div>
    </>
  );
};

export default Card;
