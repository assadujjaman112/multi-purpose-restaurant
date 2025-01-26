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
    <div className="w-11/12 lg:w-[77%] mx-auto">
      <SectionHeader
        title="TESTIMONIALS"
        header="The Reviews Of Customers When Coming To Our Restaurant!"
        description=" "
      />
    </div>
    // <div className="relative flex flex-col items-center text-center bg-black text-white p-10 rounded-2xl max-w-3xl mx-auto">
    //   <h2 className="text-yellow-400 text-lg font-semibold mb-4">
    //     TESTIMONIALS
    //   </h2>
    //   <p className="text-xl mb-4 max-w-xl transition-opacity duration-500 ease-in-out">
    //     {testimonials[currentIndex].text}
    //   </p>
    //   <p className="text-yellow-500 font-bold">
    //     {testimonials[currentIndex].author}
    //   </p>
    //   <div className="flex justify-between w-full max-w-xs mt-6">
    //     <button onClick={prevTestimonial} className="text-yellow-400 text-2xl">
    //       <FaChevronLeft />
    //     </button>
    //     <button onClick={nextTestimonial} className="text-yellow-400 text-2xl">
    //       <FaChevronRight />
    //     </button>
    //   </div>
    // </div>
  );
}
