import { FaWifi } from "react-icons/fa";
import Overview from "./Overview";
const RestaurantFeature = () => {
  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/HkgMJWVV/luxury-dinner-table-hotel-1150-11071.jpg"
        alt=""
        className="w-full opacity-25"
      />
      <div className="absolute top-0">
        <div className=" w-11/12 lg:w-[77%] mx-auto py-8 md:py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-7">
            <h1 className="text-6xl text-white font-elsie text-center lg:text-left md:flex-1">
              Dining With Modern Cusine & Deliver the Effective Facilities to
              You.
            </h1>
            <div className="flex flex-col md:flex-row gap-5 md:flex-1 lg:-mt-12">
              <div className="flex flex-col justify-center items-center">
                <FaWifi className="text-[#FFDE9F] text-7xl" />
                <p className="text-white font-semibold text-3xl mt-5">
                  HI - SPEED WIFI
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaWifi className="text-[#FFDE9F] text-7xl" />
                <p className="text-white font-semibold text-3xl mt-5">
                  HI - SPEED WIFI
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaWifi className="text-[#FFDE9F] text-7xl" />
                <p className="text-white font-semibold text-3xl mt-5">
                  HI - SPEED WIFI
                </p>
              </div>
            </div>
          </div>
        </div>
        <Overview background=""/>
      </div>
    </div>
  );
};

export default RestaurantFeature;
