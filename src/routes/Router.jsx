import { createBrowserRouter } from "react-router-dom";
import Main from "../assets/layout/Main";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login";
import Registar from "../components/pages/Registar";
import Dashboard from "../assets/layout/Dashboard";
import CreateTask from "../Users/CreateTask";
import AllTasks from "../Users/AllTasks";
import ToDo from "../Users/ToDo";
import UpdateTask from "../Users/UpdateTask";

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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "alltasks",
        element: <AllTasks></AllTasks>,
        loader: () => fetch('http://localhost:5000/createTask')
      },
      {
        path: "update/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({params}) => fetch(`http://localhost:5000/createTask/${params.id}`)
      },
      {
        path: "todo",
        element: <ToDo></ToDo>
      },
      

    ],
  },
]);
