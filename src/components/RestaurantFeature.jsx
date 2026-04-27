import { FaWifi, FaParking } from "react-icons/fa";
import { BsPhoneVibrate } from "react-icons/bs";
import Overview from "./Overview";
const RestaurantFeature = () => {
  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/HkgMJWVV/luxury-dinner-table-hotel-1150-11071.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative z-10">
        <div className="w-11/12 lg:w-[77%] mx-auto py-8 md:py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-7">
            <h1 className="text-5xl md:text-6xl text-white font-elsie text-center lg:text-left md:flex-1">
              Dining With Modern Cusine & Deliver the Effective Facilities to
              You.
            </h1>
            <div className="flex flex-col md:flex-row gap-8 md:flex-1">
              <div className="flex flex-col justify-center items-center">
                <FaWifi className="text-[#FFDE9F] text-6xl" />
                <p className="text-white font-semibold text-lg mt-3 text-center">
                  HI - SPEED WIFI
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FaParking className="text-[#FFDE9F] text-6xl" />
                <p className="text-white font-semibold text-lg mt-3 text-center">
                  CAR PARKING
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <BsPhoneVibrate className="text-[#FFDE9F] text-6xl" />
                <p className="text-white font-semibold text-lg mt-3 text-center">
                  MOB CHARGE
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
