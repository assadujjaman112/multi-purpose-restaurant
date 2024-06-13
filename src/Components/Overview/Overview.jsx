import { IoMdHappy } from "react-icons/io";
import { PiChefHatDuotone } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import { RxStarFilled } from "react-icons/rx";

const Overview = () => {
  return (
    <section className="py-8 md:py-14 lg:py-20 background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[77%] mx-auto gap-5">
        <div className="border-[3px] hover:-translate-y-5 hover:shadow-lg hover:shadow-[#FFDE9F] duration-700 border-white flex-col justify-center items-center text-center py-12 px-7 bg-[#0b1315]">
          <div className="flex justify-center mb-7">
            <IoMdHappy className="text-[#FFDE9F] text-9xl font-bold text-center" />
          </div>
          <h1 className="text-[#FFDE9F] text-6xl font-semibold italic mb-8">
            7.5K
          </h1>
          <p className="font-lexend text-white text-2xl">Happy Customer</p>
        </div>
        <div className="border-[3px] hover:-translate-y-5 hover:shadow-lg hover:shadow-[#FFDE9F] duration-700  border-white flex-col justify-center items-center text-center py-12 px-7 bg-[#0b1315]">
          <div className="flex justify-center mb-7">
            <PiChefHatDuotone className="text-[#FFDE9F] text-9xl font-bold text-center" />
          </div>
          <h1 className="text-[#FFDE9F] text-6xl font-semibold italic mb-8">
            36
          </h1>
          <p className="font-lexend text-white text-2xl">Passionate Chef’s</p>
        </div>
        <div className="border-[3px] hover:-translate-y-5 hover:shadow-lg hover:shadow-[#FFDE9F] duration-700  border-white flex-col justify-center items-center text-center py-12 px-7 bg-[#0b1315]">
          <div className="flex justify-center mb-7">
            <BiSolidDish className="text-[#FFDE9F] text-9xl font-bold text-center" />
          </div>
          <h1 className="text-[#FFDE9F] text-6xl font-semibold italic mb-8">
            250+
          </h1>
          <p className="font-lexend text-white text-2xl">Favourite Dishes</p>
        </div>
        <div className="border-[3px] hover:-translate-y-5 hover:shadow-md hover:shadow-[#FFDE9F] duration-700  border-white flex-col justify-center items-center text-center py-12 px-7 bg-[#0b1315]">
          <div className="flex justify-center mb-7">
            <RxStarFilled className="text-[#FFDE9F] text-9xl font-bold text-center" />
          </div>
          <h1 className="text-[#FFDE9F] text-6xl font-semibold italic mb-8">
            4.8
          </h1>
          <p className="font-lexend text-white text-2xl">Customer Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
