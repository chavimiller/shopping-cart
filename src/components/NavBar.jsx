import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav>
        <div>Logo</div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </>
  );
};

export default NavBar;
