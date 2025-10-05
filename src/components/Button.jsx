import { useState } from "react";

const Button = ({ type, onClick }) => {
  const [amount, setAmount] = useState(0);
  if (amount < 0) {
    setAmount(0);
  }
  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    setAmount(amount - 1);
  };

  if (type === "addToCart")
    return (
      <button className="add-to-cart" onClick={onClick}>
        Add to Cart
      </button>
    );
  if (type === "increment")
    return (
      <div className="amount-btn">
        <button onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#8C6340"
          >
            <path d="M180.78-427v-106h598.44v106H180.78Z" />
          </svg>
        </button>
        <div>{amount}</div>
        <button onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#8C6340"
          >
            <path d="M427-427H180.78v-106H427v-246.22h106V-533h246.22v106H533v246.22H427V-427Z" />
          </svg>
        </button>
      </div>
    );

  return null;
};

export default Button;
