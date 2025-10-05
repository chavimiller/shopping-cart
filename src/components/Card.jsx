import useProducts from "../hooks/useProducts";
import beansBag from "../assets/images/beansBag.png";

const Card = () => {
  const { data: products, loading, error } = useProducts();

  if (loading) return <div>loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="card">
        <img src={beansBag} alt="Coffee image"></img>
        <div className="product-info">
          <div>{products[0].name}</div>
          <div>{products[0].description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
