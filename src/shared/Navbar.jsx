import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { SiTask } from "react-icons/si";

const Navbar = () => {
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

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/dashboard/alltasks">
          Dashboard
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" text-xl flex items-center gap-2">
            {" "}
            <SiTask className="text-2xl" /> Task Management
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-sm font-semibold">
                  {user.displayName}
                </span>
              </div>
              <Link
                onClick={handleLogOut}
                className=" select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase ml-5"
                to="/register"
              >
                LogOut
              </Link>
            </>
          ) : (
            <Link
              className=" select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase ml-5"
              to="/register"
            >
              SignUp
            </Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
