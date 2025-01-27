import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";

const testimonials = [
  {
    text: "This Bermiz restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list, and wonderful dessert. I recommend it to everyone! I would like to come back here again and again.",
    author: "PAUL SERGEO",
  },
  {
    text: "Amazing experience! The ambiance, the food, and the service were all top-notch. Definitely coming back soon!",
    author: "LISA ANDERSON",
  },
  {
    text: "A hidden gem! Loved every bit of our dining experience. Highly recommended!",
    author: "JAMES WILSON",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative">
      <img
        src="https://i.postimg.cc/fbFFZxRM/catering-wedding-buffet-events-260nw-1008497035.jpg"
        alt=""
        className="w-full h-[600px] object-cover opacity-25"
      />
      <div className="absolute top-0">
        <div className=" w-11/12 lg:w-[77%] mx-auto">
          <SectionHeader
            title="TESTIMONIALS"
            header="The Reviews Of Customers When Coming To Our Restaurant!"
            description=" "
          />
          <div className="flex flex-col items-center mt-5 md:mt-10 lg:mt-20">
            <p className="text-lg md:text-2xl mb-4 max-w-xl text-[#99A9AD] font-elsie font-medium text-center transition-opacity duration-500 ease-in-out">
              <span className="text-4xl text-[#FFDE9F] font-bold">&quot;</span>
              {testimonials[currentIndex].text}
              <span className="text-4xl text-[#FFDE9F] font-bold">&quot;</span>
            </p>
            <p className="text-[#FFDE9F] font-bold text-xl">
              {testimonials[currentIndex].author}
            </p>
            <div className="flex justify-between w-full max-w-xs mt-6">
              <button
                onClick={prevTestimonial}
                className="text-[#FFDE9F] text-2xl"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="text-[#FFDE9F] text-2xl"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
