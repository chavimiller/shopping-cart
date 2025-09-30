import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: null,
      },
      {
        path: "/shop",
        element: null,
      },
      {
        path: "/cart",
        element: null,
      },
    ],
  },
];

export default routes;
