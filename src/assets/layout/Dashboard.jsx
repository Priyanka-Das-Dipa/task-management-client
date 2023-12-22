import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdLogOut } from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire({
      position: "top-center",
      icon: "successfully!!",
      title: "You are Log Out from this side!!!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="flex gap-3">
      <div className="w-72 min-h-screen bg-blue-500 text-white">
        <div className="flex justify-center items-center my-7">
          <div className="w-24  rounded-full space-y-2">
            <img src={user?.photoURL} />
            <p className="font-medium uppercase text-center">
              {user?.displayName}
            </p>
          </div>
        </div>
        <ul className="menu p-10">
          <li>
            <NavLink to="createTask" className="flex items-center gap-2 text-xl">
              <IoCreate />
              Create Task
            </NavLink>
          </li>
          <li>
            <NavLink to="alltasks" className="flex items-center gap-2 text-xl">
              <FaTasks />
              All Task
            </NavLink>
          </li>
          <li>
            <NavLink to="todo" className="flex items-center gap-2 text-xl">
              <MdAddTask />
              To-Do Task
            </NavLink>
          </li>
        </ul>
        <div className="divider text-white"></div>
        <ul className="menu p-10">
          <li>
            <NavLink to="/" className="flex items-center gap-2 text-xl">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleLogOut}
              className="flex items-center gap-2 text-xl "
              to="/register"
            >
              <IoMdLogOut />
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
