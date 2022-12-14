import React from "react";
import Cart from "../../components/Cart/Cart";
import ShoppingCartIcon from "../../components/Cart/ShoppingCartIcon";
import Profile from "../../components/Profile/Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sticky top-0 z-50 ">
      <div className="secodnavbar shadow-lg py-2 ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>

            <Link to="/">
              {" "}
              <img src="https://i.ibb.co/8Xqz7ng/techotheme2-logo-15275590612.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              {user?.user?.email ? (
                <div className="dropdown dropdown-end">
                  <Profile></Profile>
                </div>
              ) : (
                <div>
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
            <div className="">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <Cart></Cart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
