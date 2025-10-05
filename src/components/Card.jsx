import useProducts from "../hooks/useProducts";
import beansBag from "../assets/images/beansBag.png";
import Button from "./Button";

const Card = () => {
  const { data: products, loading, error } = useProducts();

  if (loading) return <div>loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="card">
        <img src={beansBag} alt="Coffee image"></img>
        <div className="product-info">
          <div className="product-name">{products[0].name}</div>
          <div className="product-price">${products[0].price}</div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Card;
