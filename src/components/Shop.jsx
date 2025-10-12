import { useCart } from "../hooks/CartContext";
import Card from "./Card";
import useProducts from "../hooks/useProducts";

const Shop = () => {
  const { data, loading } = useProducts();
  const { cart, setCart } = useCart();
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <>
      <div className="card-grid">
        {data &&
          data.map((product) => (
            <Card
              id={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
};

export default Shop;
