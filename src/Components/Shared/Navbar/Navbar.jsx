import { SlHandbag } from "react-icons/sl";
const Navbar = () => {
  return (
    <div>
      <div className="bg-[#0b1315] py-5">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <img src="/src/assets/logo.png" alt="" />
          </div>
          <div>
            <ul className="flex gap-8 text-white items-center">
              <li>Home</li>
              <li>Menu</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="rounded-full h-14 w-14 bg-[#FFDE9F] flex justify-center items-center relative">
            <SlHandbag className="text-black  text-3xl"></SlHandbag>
          </div>
        </div>
      </div>
      <div className="bg-[#99A9AD1A] h-[1px]"></div>
    </div>
  );
};

export default Navbar;
