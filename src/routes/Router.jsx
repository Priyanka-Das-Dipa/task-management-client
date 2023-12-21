import { createBrowserRouter } from "react-router-dom";
import Main from "../assets/layout/Main";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login";
import Registar from "../components/pages/Registar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registar></Registar>,
      },
    ],
  },
]);
