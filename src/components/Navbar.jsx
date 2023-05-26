import { Link, NavLink } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import logo from '../img/logo.webp'
import { useAuth } from "../Providers/AuthProviders";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <nav className=" mx-auto md:w-[1250px]">
      <div className="ui-container flex justify-between items-center py-4">
        <div className="flex items-center">
          <img className="w-20 h-20" src={logo} alt="" />
          <Link to="/">
            <h2 className="text-4xl font-bold">
            COLLECTON <span className="text-blue-600 font-bold">MART</span>
            </h2>
          </Link>
        </div>
        <span className="md:hidden">
          {toggle ? (
            <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} />
          ) : (
            <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
          )}
        </span>

        <ul
          className={`flex gap-6 items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black font-semibold top-[14%] bg-black md:bg-transparent w-full md:w-auto md:flex-row absolute md:static ${
            toggle ? "left-0" : "-left-full"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All Toys
            </NavLink>
          </li>

         

          {user ? (
            <>
              <li>
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/myToy"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setToggle(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/addToy"
                >
                  Add Toys
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
           <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            {user?.photoURL ? (
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={user?.photoURL}
                title={user.displayName}
                alt=""
              />
            ) : (
              ""
            )}
          </li>
              
          <li>
            {user ? (
              <button  className="border-2 border-[#4025a1] px-4 py-2 rounded text-[#18169c]"
                onClick={logOut}
                
              >
                LogOut
              </button>
            ) : (
              <button className="border-2 border-[#4025a1] px-4 py-2 rounded text-[#18169c]">
                <Link to="/login">Login</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
