import coffeeBeans from "../assets/images/coffeeBeans.png";
import Button from "./Button";
import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { data } = useProducts();
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className={styles.heroSection}>
        <img
          src={coffeeBeans}
          alt="Coffee Beans"
          className={styles.coffeeBeansImg2}
        />
        <img
          src={coffeeBeans}
          alt="Coffee Beans"
          className={styles.coffeeBeansImg1}
        />
        <div className="container section">
          <div className={styles.shopTitle}>Northwind Coffee Co.</div>
          <div className={styles.heroText}>
            From mountain farms to your cup — discover the journey of our beans.
          </div>
          <Button
            type={"general"}
            text={"Shop Now"}
            onClick={handleShopClick}
          />
        </div>
        <div className={`${styles.featuredContainer} section`}>
          <div className={styles.featuredProduct}>
            <div className={styles.monthFeaturedTitle}>
              This month's featured blend
            </div>
            <div className={styles.productBg}>
              {data && data.length > 1 && (
                <>
                  <img src={data[1].imageUrl} alt="Coffee Beans"></img>
                  <div>{data[1].name}</div>
                  <div>{data[1].price}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
