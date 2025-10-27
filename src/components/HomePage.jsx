import React, { useEffect, useState } from "react";
import coffeeBeans from "../assets/images/coffeeBeans.png";
import Button from "./Button";
import Card from "./Card";
import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router";

const HomePage = () => {
  const { data } = useProducts();
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className="hero-section">
        <img
          src={coffeeBeans}
          alt="Coffee Beans"
          className="coffee-beans-img-2"
        />
        <img
          src={coffeeBeans}
          alt="Coffee Beans"
          className="coffee-beans-img-1"
        />
        <div className="container section">
          <div className="shop-title">Northwind Coffee Co.</div>
          <div className="hero-text">
            From mountain farms to your cup — discover the journey of our beans.
          </div>
          <Button
            type={"general"}
            text={"Shop Now"}
            onClick={handleShopClick}
          />
        </div>
        <div className="featured-container section">
          <div className="featured-product">
            <div className="month-featured-title">
              This month's featured blend
            </div>
            <div className="product-bg">
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
