import { FaStarOfLife } from "react-icons/fa6";
import {
  IoPersonOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
const BookTable = () => {
  return (
    <div className="w-11/12 lg:w-[77%] mx-auto">
      <div className="my-8 md:my-11 lg:my-16">
        <p
          className="text-xl text-center  text-[#FFDE9F] flex gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <FaStarOfLife className="text-lg"></FaStarOfLife>RESERVATION
          <FaStarOfLife className="text-lg"></FaStarOfLife>
        </p>
        <h2
          className="text-3xl text-center md:text-5xl lg:text-7xl font-elsie text-white mt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Book A Table
        </h2>
        <p
          className="text-sm text-center md:text-lg lg:text-xl w-full md:w-[70%] mx-auto mt-6 lg:mt-10 text-[#99A9AD]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          You can Call Us directly at{" "}
          <span className="text-[#FFDE9F]"> +01 (234) 567 8899</span>
        </p>
      </div>
      <div className="my-8 md:my-11 lg:my-16 ">
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div className="w-full flex items-center">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              className="text-white placeholder:text-white bg-transparent border-2 border-[#FFDE9F] outline-none  w-full py-3 pl-3"
            />
            <IoPersonOutline className="text-[#FFDE9F] text-2xl -ml-10" />
          </div>
          <div className="w-full flex items-center">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              className="text-white placeholder:text-white bg-transparent border-2 border-[#FFDE9F] outline-none  w-full py-3 pl-3"
            />
            <IoMailOutline className="text-[#FFDE9F] text-2xl -ml-10" />
          </div>
          <div className="w-full flex items-center">
            <input
              type="text"
              name="phone"
              id=""
              placeholder="Phone No"
              className="text-white placeholder:text-white bg-transparent border-2 border-[#FFDE9F] outline-none  w-full py-3 pl-3"
            />
            <IoPhonePortraitOutline className="text-[#FFDE9F] text-2xl -ml-10" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
