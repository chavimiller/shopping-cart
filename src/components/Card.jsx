import useProducts from "../hooks/useProducts";
import beansBag from "../assets/images/beansBag.png";
import Button from "./Button";
import { useCart } from "../hooks/CartContext";

const Card = () => {
  const { data, loading, error } = useProducts();

  const { cart, setCart } = useCart();

  // function addToCart() {
  //   if (cart.find((item) => item.id === ))
  //   setCart({})
  // }
  if (loading) return <div className="loading">loading...</div>;

  if (error) return <div>{error.message}</div>;
  console.log(data);

  return (
    <>
      <div className="card">
        <img src={beansBag} alt="Coffee image"></img>
        <div className="product-info">
          <div className="product-name">{data[0].name}</div>
          <div className="product-price">${data[0].price}</div>
        </div>
        <Button type={"addToCart"} />
      </div>
    </>
  );
};

export default Card;
