import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
