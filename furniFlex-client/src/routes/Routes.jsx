import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <h1>Hello world</h1>,
      },
      {
        path: "/products/:category",
        element: <Products />,
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
