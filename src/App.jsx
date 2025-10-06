import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import { CartProvider } from "./hooks/CartContext.jsx";

function App() {
  return (
    <>
      <NavBar />
      <CartProvider>
        <Outlet />
      </CartProvider>
    </>
  );
}

export default App;
