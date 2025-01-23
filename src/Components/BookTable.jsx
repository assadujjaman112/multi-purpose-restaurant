import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaStarOfLife } from "react-icons/fa6";
import {
  IoPersonOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
const BookTable = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const handleBooking = () => {
    Swal.fire({
      title: "Good job!",
      text: "Thanks For The Reservation",
      icon: "success",
    });
  };
  return (
    <div className="w-full h-full " id="bookTable">
      <div className="absolute w-full h-[720px] md:h-[600px] opacity-20">
        <img
          src="https://i.postimg.cc/FRJvGq9p/dining-table-with-dishes-europe-museum-266732-14357.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="relative top-[60px] w-11/12 lg:w-[77%] mx-auto h-full pb-16">
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
            onSubmit={handleBooking}
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
            <div className="w-full flex items-center">
              <select
                id="dropdown"
                // value={selectedOption}
                // onChange={handleChange}
                className="bg-transparent w-full py-3 pl-3 text-white border-2 border-[#FFDE9F]"
              >
                <option value="" disabled className="bg-black text-white">
                  Select an option
                </option>
                <option value="1" className="bg-black">
                  1 Person
                </option>
                <option value="2" className="bg-black">
                  2 Person
                </option>
                <option value="3" className="bg-black">
                  3 Person
                </option>
                <option value="4" className="bg-black">
                  4 Person
                </option>
              </select>
            </div>
            <div className="w-full flex items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                customInput={
                  <input className="appearance-none block w-full pl-3 py-3 bg-transparent border-2 border-[#FFDE9F] rounded-md text-white placeholder:text-white outline-none" />
                }
                placeholderText="Select a date"
                wrapperClassName="w-full"
              />
              <IoCalendarOutline className="text-[#FFDE9F] text-2xl -ml-10" />
            </div>
            <div className="w-full flex items-center">
              <select
                id="dropdown"
                // value={selectedOption}
                // onChange={handleChange}
                className="bg-transparent w-full py-3 pl-3 text-white border-2 border-[#FFDE9F]"
              >
                <option value="" disabled className="bg-black text-white">
                  Select Time
                </option>
                <option value="1" className="bg-black">
                  8 : AM
                </option>
                <option value="2" className="bg-black">
                  9 : AM
                </option>
                <option value="3" className="bg-black">
                  10 : AM
                </option>
                <option value="4" className="bg-black">
                  11 : AM
                </option>
              </select>
            </div>
            <div className="flex justify-center mt-5 md:mt-7 lg:mt-10 md:col-span-3">
              <input
                type="submit"
                value="Book Now"
                className="bg-[#FFDE9F] px-2 py-2 lg:px-10 lg:py-5 text-lg lg:text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F] text-center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
