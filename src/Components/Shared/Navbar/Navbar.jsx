import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navNavLinks = (
    <ul className="flex flex-col lg:flex-row gap-8 text-black lg:text-white  items-center px-5 py-10 lg:px-0 lg:py-0">
      <li className=" hover:text-[#FFDE9F] rounded-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "lg:text-[#FFDE9F] text-white bg-slate-400 lg:bg-transparent px-5 py-2 lg:px-0 lg:py-0 rounded-md"
                : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="px-5 py-1 lg:px-0 lg:py-0 hover:text-[#FFDE9F] rounded-lg">
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFDE9F]" : ""
          }
        >
          Menu
        </NavLink>
      </li>
      <li className="px-5 py-1 lg:px-0 lg:py-0 hover:text-[#FFDE9F] rounded-lg">
        <NavLink
          to="/addItem"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "lg:text-[#FFDE9F] text-white bg-slate-400 lg:bg-transparent px-5 py-2 lg:px-0 lg:py-0 rounded-md"
                : ""
          }
        >
          Add Item
        </NavLink>
      </li>
      <li className="px-5 py-1 lg:px-0 lg:py-0 hover:text-[#FFDE9F] rounded-lg">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFDE9F]" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="px-5 py-1 lg:px-0 lg:py-0 hover:text-[#FFDE9F] rounded-lg">
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FFDE9F]" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
  return (
    <div>
      <div className="bg-[#0b1315] py-[15px]">
        <div className="w-[95%] mx-auto flex  justify-between items-center">
          <div className="flex items-center gap-5">
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoReorderThreeSharp className="block lg:hidden text-3xl text-[#FFDE9F]" />
            </button>
            <Link to="/">
              <img
                className="w-24 md:w-32 lg:w-40"
                src="https://i.postimg.cc/zvdD8PC3/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="hidden lg:block">{navNavLinks}</div>
          <div className="flex items-center justify-between gap-5">
            <div>
              {user ? (
                <div className="flex items-center gap-5">
                  <p className="hidden lg:block text-white font-elsie text-lg ">
                    Hello, {user.displayName}
                  </p>
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="text-[#FFDE9F] text-2xl md:text-3xl"
                  >
                    {user.photoURL ? (
                      <img
                        className="w-8 h-8 rounded-full"
                        src={user.photoURL}
                        alt="Profile"
                      />
                    ) : (
                      <CgProfile />
                    )}
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-[#FFDE9F] hover:text-black border border-[#FFDE9F] font-elsie text-lg hover:bg-[#f0c981] rounded-md px-2 py-1"
                >
                  Sign In
                </Link>
              )}
            </div>

            <Link
              to="/cart"
              className="text-[#FFDE9F] text-2xl md:text-3xl relative"
            >
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-[#99A9AD1A] h-[1px]"></div>
      {isOpen && (
        <div className="absolute bg-[#FFDE9F] z-10">{navNavLinks}</div>
      )}
      {isProfileMenuOpen && (
        <div className="flex flex-col gap-2 bg-[#FFDE9F] py-5  absolute right-5 top-20 z-10 rounded-md px-5">
          <Link
            onClick={() => setIsProfileMenuOpen(false)}
            to="/profile"
            className="text-black font-elsie text-lg hover:border border-black hover:bg-[#f0c981] rounded-md px-2 py-0.5"
          >
            Profile
          </Link>
          <Link
            onClick={() => setIsProfileMenuOpen(false)}
            to="/myOrders"
            className="text-black font-elsie text-lg hover:border border-black hover:bg-[#f0c981] rounded-md px-2 py-0.5"
          >
            My Orders
          </Link>
          <button
            onClick={() => {
              logOut();
              setIsProfileMenuOpen(false);
            }}
            className="text-black font-elsie text-lg hover:border border-black hover:bg-[#f0c981] rounded-md px-2 py-0.5"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
