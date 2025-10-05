import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart} />
      <Outlet />
    </>
  );
}

export default App;
