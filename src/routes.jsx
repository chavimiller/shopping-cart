import App from "./App";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import CartPage from "./components/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
