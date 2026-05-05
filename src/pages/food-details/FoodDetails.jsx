import { Link, useParams, useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import MenuBanner from "../../components/shared/banner/MenuBanner";
import { FaStar } from "react-icons/fa6";
import { useState, useContext } from "react";
import SuggestionCard from "../../components/shared/suggestion-card/SuggestionCard";
import Testimonials from "../../components/shared/testimonials/Testimonials";
import { addToCart } from "../../lib/helper";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const { menu, loading, error } = useMenu();
  const { id } = useParams();
  const food = menu?.find((item) => item._id === id);
  const [quantity, setQuantity] = useState(1);
  const suggestions = menu?.filter((item) => item._id !== id);
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-500"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-red-400 text-lg">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="border border-[#FFDE9F] px-6 py-2 text-[#FFDE9F] hover:bg-[#FFDE9F] hover:text-black transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-[#99A9AD] text-lg">Item not found.</p>
        <button
          onClick={() => navigate("/menu")}
          className="border border-[#FFDE9F] px-6 py-2 text-[#FFDE9F] hover:bg-[#FFDE9F] hover:text-black transition-colors"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    const result = await addToCart(food, quantity, customerEmail);
    if (result.success) {
      Swal.fire({
        title: result.type === "updated" ? "Cart updated" : "Added to cart",
        text:
          result.type === "updated"
            ? "Quantity updated in your cart"
            : "Item added to cart successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: result.error || "Failed to add item to cart",
        icon: "error",
        confirmButtonColor: "#FFDE9F",
        confirmButtonText: "OK",
      });
    }
  };

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
              <button
                onClick={handleAddToCart}
                className="bg-[#FFDE9F] px-5 py-2 lg:px-10 lg:py-5 text-lg lg:text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]"
              >
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
        <div className="w-11/12 lg:w-[77%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5 md:pb-10 lg:pb-16">
          {suggestions?.slice(0, 3).map((food) => (
            <Link key={food._id} to={`/menu/${food._id}`}>
              <SuggestionCard food={food} />
            </Link>
          ))}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default FoodDetails;
