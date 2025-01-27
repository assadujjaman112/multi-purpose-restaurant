import { useState } from "react";
import { SlHandbag } from "react-icons/sl";
import { IoReorderThreeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          to="/contact"
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
            <img src="https://i.postimg.cc/zvdD8PC3/logo.png" alt="" />
          </div>
          <div className="hidden lg:block">{navNavLinks}</div>
          <button className=" rounded-full h-11 w-11 md:h-14 md:w-14 bg-[#FFDE9F] flex justify-center items-center relative">
            <SlHandbag className="text-black text-xl  md:text-3xl"></SlHandbag>
          </button>
        </div>
      </div>
      <div className=" bg-[#99A9AD1A] h-[1px]"></div>
      {isOpen && (
        <div className="absolute bg-[#FFDE9F] z-10">{navNavLinks}</div>
      )}
    </div>
  );
};

export default Navbar;
