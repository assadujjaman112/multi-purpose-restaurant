import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import useMenu from "../hooks/useMenu";
import MenuCard from "./shared/MenuCard/MenuCard";
import Button from "./buttons/Button";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const menu = useMenu();
  const [isActive, setIsActive] = useState(1);
  const [showMenu, setShowMenu] = useState();
  useEffect(() => {
    setShowMenu(menu);
    setIsActive(1);
  }, [menu]);

  const handleMenu = (category, categoryNumber) => {
    setIsActive(categoryNumber);
    if (category === "all") {
      setShowMenu(menu);
      return;
    }
    const newMenu = menu?.filter((item) => item.category === `${category}`);
    setShowMenu(newMenu);
  };

  return (
    <div className="w-11/12 lg:w-[77%] mx-auto">
      <p
        className="text-xl text-center  text-[#FFDE9F] flex gap-4 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaStarOfLife className="text-lg"></FaStarOfLife> OUR MENU
        <FaStarOfLife className="text-lg"></FaStarOfLife>
      </p>
      <h2
        className="text-3xl text-center md:text-5xl lg:text-7xl font-elsie text-white mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tasty With Good Price
      </h2>
      <p
        className="text-sm text-center md:text-lg lg:text-xl w-full md:w-[70%] mx-auto mt-6 lg:mt-10 text-[#99A9AD]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Diam leo massa pellentesque a neque turpis cum mi gravida. Amet massa
        adipiscing mi dictum urna commodo. Fringilla ipsum etiam habitasse dolor
        lacus viverra.
      </p>
      <div className="overflow-x-auto no-scrollbar flex gap-6 md:gap-0 justify-evenly items-center  h-40 mt-5 md:mt-8 lg:mt-10 lg:w-[70%] mx-auto">
        <div
          onClick={() => handleMenu("all", 1)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 1 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/L8mZKPPh/Artboard-13.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            All
          </h4>
        </div>
        <div
          onClick={() => handleMenu("breakfast", 2)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 2 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/8kH7d59S/Artboard-12.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            Breakfast
          </h4>
        </div>
        <div
          onClick={() => handleMenu("lunch", 3)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 3 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/ZKn5rL68/Artboard-10.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            Lunch
          </h4>
        </div>
        <div
          onClick={() => handleMenu("dinner", 4)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 4 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/8c5Nm1fp/Artboard-11.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            Dinner
          </h4>
        </div>
        <div
          onClick={() => handleMenu("dessert", 5)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 5 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/x8n9xpqp/Artboard-14.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            Dessert
          </h4>
        </div>
        <div
          onClick={() => handleMenu("drink", 6)}
          className={`w-24 h-full flex flex-col justify-center items-center hover:cursor-pointer ${
            isActive === 6 && "bg-slate-600 rounded-lg px-2"
          }`}
        >
          <div className="w-20 h-20 flex justify-center items-center ">
            <img
              src="https://i.postimg.cc/8k4GkH7D/Artboard-1.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <h4 className="mt-2 text-white text-xl font-medium font-elsie text-center">
            Drink
          </h4>
        </div>
      </div>
      <div className="my-8 md:mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {showMenu?.slice(0, 8).map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <Link to="/menu" className="flex justify-center mt-8 md:mt-14 lg:mt-20">
        <Button text="View all" />
      </Link>
    </div>
  );
};

export default OurMenu;
