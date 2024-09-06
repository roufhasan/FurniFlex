import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/carts",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
