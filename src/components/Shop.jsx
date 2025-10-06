import { useCart } from "../hooks/CartContext";
import Card from "./Card";

const Shop = () => {
  const { cart, setCart } = useCart();
  return (
    <>
      <div className="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Shop;
