import { FaStarOfLife } from "react-icons/fa6";
import { PHONE } from "../lib/env";

const MakeReservation = () => {
  return (
    <section className="max-w-[90%] md:max-w-[80%] mx-auto mb-8 md:mb-12 lg:mb-20">
      <h1
        className="text-center font-elsie text-white text-3xl md:text-5xl lg:text-7xl my-5 md:my-8 lg:my-20 mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Various Quality Specialities Made With A Personal Touch
      </h1>
      {/* chefs secret section */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col lg:flex-row relative lg:ml-10">
          <div>
            <img
              className="w-full"
              src="https://i.ibb.co/M9Q8w1h/chefs-1.png"
              alt=""
            />
          </div>
          <div className="absolute hidden lg:block right-3 top-20">
            <img
              className="w-1/2 lg:w-full"
              src="https://i.ibb.co/y0rp2nw/chefs-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 pl-5 pr-3 mt-5 lg:mt-0">
          <p className="text-xl text-[#FFDE9F] flex gap-4 items-center">
            <FaStarOfLife className="text-lg"></FaStarOfLife> CHEFS SECRETS
            <FaStarOfLife className="text-lg"></FaStarOfLife>
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-elsie text-white mt-5"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Truly Exotic & Appetizing Cuisine For Those Special Moments In Life
          </h1>
          <p
            className="text-lg mt-5 lg:mt-7 text-[#99A9AD]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Our chefs blend time-honored recipes with seasonal ingredients to
            create dishes that feel both familiar and unforgettable. Reserve
            your table and let us take care of the rest.
          </p>
          <h4
            className="mt-2 md:mt-3 lg:mt-5 text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Booking Request
          </h4>
          {PHONE && (
            <div
              className="mt-2 md:mt-4 lg:mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                className="text-xl text-[#FFDE9F] font-bold"
                href={`tel:${PHONE}`}
              >
                Tel: {PHONE}
              </a>
            </div>
          )}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <a
              href="#bookTable"
              className="bg-[#FFDE9F] px-5 py-2 lg:px-10 lg:py-5 text-lg lg:text-xl font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]"
            >
              Make A Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeReservation;
