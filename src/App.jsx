import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import { CartProvider } from "./hooks/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    </>
  );
}

export default App;
