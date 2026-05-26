import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import useMenu from "../hooks/useMenu";
import MenuCard from "./shared/menu-card/MenuCard";
import Spinner from "./shared/spinner/Spinner";
import Button from "./buttons/Button";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const { menu, loading, error, refetch } = useMenu();
  const [isActive, setIsActive] = useState(1);
  const [showMenu, setShowMenu] = useState([]);
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
    <div className="w-11/12 lg:w-[77%] mx-auto pb-8 md:pb-10 lg:pb-16">
      <p
        className="text-xl text-center  text-[#FFDE9F] flex gap-4 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaStarOfLife className="text-lg" /> OUR MENU
        <FaStarOfLife className="text-lg" />
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
      <div className="overflow-x-auto no-scrollbar mt-8 md:mt-10 lg:mt-12">
        <div className="flex gap-3 justify-start md:justify-center min-w-max md:min-w-0 mx-auto px-1 pb-1">
          {[
            { category: "all",       id: 1, label: "All",       img: "https://i.postimg.cc/L8mZKPPh/Artboard-13.png" },
            { category: "breakfast", id: 2, label: "Breakfast", img: "https://i.postimg.cc/8kH7d59S/Artboard-12.png" },
            { category: "lunch",     id: 3, label: "Lunch",     img: "https://i.postimg.cc/ZKn5rL68/Artboard-10.png" },
            { category: "dinner",    id: 4, label: "Dinner",    img: "https://i.postimg.cc/8c5Nm1fp/Artboard-11.png" },
            { category: "dessert",   id: 5, label: "Dessert",   img: "https://i.postimg.cc/x8n9xpqp/Artboard-14.png" },
            { category: "drink",     id: 6, label: "Drink",     img: "https://i.postimg.cc/8k4GkH7D/Artboard-1.png" },
          ].map(({ category, id, label, img }) => (
            <button
              key={id}
              onClick={() => handleMenu(category, id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive === id
                  ? "border-[#FFDE9F] bg-[#FFDE9F]/10 text-[#FFDE9F]"
                  : "border-[#99A9AD]/30 bg-white/5 text-[#99A9AD] hover:border-[#FFDE9F]/50 hover:text-white"
              }`}
            >
              <img src={img} alt={label} className="w-6 h-6 object-contain" />
              <span className="font-elsie text-base">{label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="my-8 md:mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-2 flex justify-center py-16">
            <Spinner />
          </div>
        ) : error ? (
          <div className="col-span-2 flex flex-col items-center gap-3 py-16">
            <p className="text-red-400 text-center">{error}</p>
            <button
              onClick={refetch}
              className="border border-[#FFDE9F] px-5 py-2 text-sm text-[#FFDE9F] hover:bg-[#FFDE9F] hover:text-black transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          showMenu?.slice(0, 8).map((item) => (
            <MenuCard key={item._id} item={item} />
          ))
        )}
      </div>
      <Link to="/menu" className="flex justify-center mt-8 md:mt-14 lg:mt-20">
        <Button text="View all" />
      </Link>
    </div>
  );
};

export default OurMenu;
