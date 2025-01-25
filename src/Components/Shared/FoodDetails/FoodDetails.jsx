import { Link, useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuBanner from "../Banner/MenuBanner";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import SuggestionCard from "../SuggestionCard/SuggestionCard";

const FoodDetails = () => {
  const menu = useMenu();
  const { id } = useParams();
  const food = menu?.find((item) => item._id === id);
  const [quantity, setQuantity] = useState(1);
  const suggestions = menu?.filter((item) => item._id != id);

  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/X7BjPhxT/855a126a-8836-4241-917c-e54ed65f1071-pancakes-lead3.jpg"
        title="Single Dish"
      />
      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]"></span>
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]"></span>
        <div className="w-11/12 lg:w-[77%] mx-auto pt-8 md:pt-16 lg:pt-24 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={food?.image}
            alt=""
            className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] object-cover"
          />
          <div className="py-5 md:py-7">
            <h1
              className="text-white text-3xl md:text-6xl font-elsie font-medium"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {food?.name}
            </h1>
            <div
              className=" flex gap-10 items-center  text-[#FFDE9F] my-3 md:my-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="text-4xl md:text-8xl font-elsie">${food?.price}</p>
              <p className="flex items-center gap-1 text-2xl md:text-4xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-sm text-[#99A9AD] ml-2">
                  (10 Reviews)
                </span>
              </p>
            </div>
            <p
              className="text-sm  md:text-left md:text-xl mt-6 lg:mt-10 text-[#99A9AD]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {food?.description}
            </p>
            <div className="my-6 md:my-14 flex flex-col md:flex-row md:items-center gap-14">
              <div className="flex items-center ">
                <p className="text-white text-lg md:text-xl mr-3">Quantity :</p>
                <div className="flex items-center">
                  <button
                    className="px-[14px] py-5 border text-white"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <p className="p-5 border text-white">{quantity}</p>
                  <button
                    className="px-3 py-5 border text-white"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="bg-[#FFDE9F] px-5 py-2 lg:px-10 lg:py-5 text-lg lg:text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <h1
          className="text-white text-center text-3xl md:text-6xl font-elsie font-medium my-5 md:my-10 lg:my-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          You may also like
        </h1>
        <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suggestions?.slice(0, 3).map((food) => (
            <Link key={food._id} to={`/menu/${food._id}`} onClick={()=> window.location.replace(`/menu/${food._id}`)}>
              <SuggestionCard food={food} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
