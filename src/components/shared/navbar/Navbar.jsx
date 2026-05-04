import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeSharp, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
import {
  MdOutlineHome,
  MdOutlineRestaurantMenu,
  MdOutlineAddBox,
  MdOutlineInfo,
  MdOutlineContactMail,
} from "react-icons/md";
import useCart from "../../../hooks/useCart";

const navItems = [
  { to: "/", label: "Home", icon: MdOutlineHome },
  { to: "/menu", label: "Menu", icon: MdOutlineRestaurantMenu },
  { to: "/add-item", label: "Add Item", icon: MdOutlineAddBox },
  { to: "/about", label: "About Us", icon: MdOutlineInfo },
  { to: "/contact-us", label: "Contact Us", icon: MdOutlineContactMail },
];

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cartItems] = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const cartItemCount = cartItems.length;

  const close = () => setIsOpen(false);

  const desktopLinks = (
    <ul className="flex flex-row gap-8 text-white items-center">
      {navItems.map(({ to, label }) => (
        <li key={to} className="hover:text-[#FFDE9F]">
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "text-[#FFDE9F]" : "")}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative z-50">
      {/* ── Main bar ── */}
      <div className="bg-[#0b1315] py-[15px]">
        <div className="w-[95%] mx-auto flex justify-between items-center">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="lg:hidden text-[#FFDE9F]"
            >
              <IoReorderThreeSharp className="text-3xl" />
            </button>
            <Link to="/">
              <img
                className="w-24 md:w-32 lg:w-40"
                src="https://i.postimg.cc/zvdD8PC3/logo.png"
                alt="Bermiz"
              />
            </Link>
          </div>

          {/* Center: desktop links */}
          <div className="hidden lg:block">{desktopLinks}</div>

          {/* Right: profile + cart */}
          <div className="flex items-center gap-5">
            {user ? (
              <div className="flex items-center gap-4">
                <p className="hidden lg:block text-white font-elsie text-lg">
                  Hello, {user.displayName}
                </p>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="text-[#FFDE9F] text-2xl md:text-3xl"
                >
                  {user.photoURL ? (
                    <img
                      className="w-8 h-8 rounded-full object-cover"
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
            <Link to="/cart" className="relative text-[#FFDE9F] text-2xl md:text-3xl">
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FFDE9F] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#99A9AD1A] h-[1px]" />

      {/* ── Profile dropdown ── */}
      {isProfileMenuOpen && (
        <div className="flex flex-col gap-2 bg-[#FFDE9F] py-5 absolute right-5 top-20 z-50 rounded-md px-5 shadow-xl">
          <Link
            onClick={() => setIsProfileMenuOpen(false)}
            to="/profile"
            className="text-black font-elsie text-lg hover:bg-[#f0c981] rounded-md px-2 py-0.5"
          >
            Profile
          </Link>
          <Link
            onClick={() => setIsProfileMenuOpen(false)}
            to="/myOrders"
            className="text-black font-elsie text-lg hover:bg-[#f0c981] rounded-md px-2 py-0.5"
          >
            My Orders
          </Link>
          <button
            onClick={() => {
              logOut();
              setIsProfileMenuOpen(false);
            }}
            className="text-black font-elsie text-lg hover:bg-[#f0c981] rounded-md px-2 py-0.5 text-left"
          >
            Log out
          </button>
        </div>
      )}

      {/* ── Mobile drawer backdrop ── */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Mobile drawer panel ── */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#0b1315] z-50 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#99A9AD1A]">
          <Link to="/" onClick={close}>
            <img
              src="https://i.postimg.cc/zvdD8PC3/logo.png"
              alt="Bermiz"
              className="w-28"
            />
          </Link>
          <button
            onClick={close}
            className="text-[#FFDE9F] text-2xl"
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        {/* User info (if logged in) */}
        {user && (
          <div className="flex items-center gap-4 px-6 py-5 border-b border-[#99A9AD1A]">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#FFDE9F]"
              />
            ) : (
              <div className="w-12 h-12 rounded-full border-2 border-[#FFDE9F] flex items-center justify-center text-[#FFDE9F] text-2xl">
                <CgProfile />
              </div>
            )}
            <div>
              <p className="text-white font-elsie text-lg leading-tight">
                {user.displayName || "User"}
              </p>
              <p className="text-[#99A9AD] text-xs truncate max-w-[160px]">
                {user.email}
              </p>
            </div>
          </div>
        )}

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#FFDE9F]/10 text-[#FFDE9F] border-l-2 border-[#FFDE9F]"
                        : "text-[#99A9AD] hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <Icon className="text-xl flex-shrink-0" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: auth actions */}
        <div className="px-4 py-5 border-t border-[#99A9AD1A] flex flex-col gap-2">
          {user ? (
            <>
              <Link
                to="/profile"
                onClick={close}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#99A9AD] hover:bg-white/5 hover:text-white transition-colors"
              >
                <CgProfile className="text-xl" />
                Profile
              </Link>
              <button
                onClick={() => {
                  logOut();
                  close();
                }}
                className="w-full mt-1 py-2.5 border border-[#FFDE9F] text-[#FFDE9F] font-elsie text-base rounded-lg hover:bg-[#FFDE9F] hover:text-black transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={close}
              className="w-full text-center py-2.5 border border-[#FFDE9F] text-[#FFDE9F] font-elsie text-base rounded-lg hover:bg-[#FFDE9F] hover:text-black transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
