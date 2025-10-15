import { useState } from "react";

const Button = ({
  type,
  onClick,
  quantity = 0,
  onIncrement,
  onDecrement,
  text,
}) => {
  if (type === "general")
    return (
      <button className="general-button" onClick={onClick} text={text}>
        {text}
      </button>
    );
  if (type === "increment")
    return (
      <div className="amount-btn">
        <button onClick={onDecrement}>
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
        <div>{quantity}</div>
        <button onClick={onIncrement}>
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
  if (type === "delete")
    return (
      <button className="delete-button" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#E5D5C7"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    );
};

export default Button;
