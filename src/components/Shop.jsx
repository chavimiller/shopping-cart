import { useCart } from "../hooks/CartContext";
import Card from "./Card";
import useProducts from "../hooks/useProducts";
import styles from "./Shop.module.css";

const Shop = () => {
  const { data, loading } = useProducts();
  const { cart, setCart } = useCart();

  if (loading) return <div className={styles.loading}>Loading...</div>;
  return (
    <>
      <div className="container">
        <div className={styles.cardGrid}>
          {data &&
            data.map((product) => (
              <Card
                id={product.id}
                key={product.id}
                image={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
