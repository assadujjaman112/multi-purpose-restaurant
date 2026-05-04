import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../lib/helper";
import Swal from "sweetalert2";

const MenuCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    const result = await addToCart(item, 1, customerEmail);
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
    <div className="relative">
      <Link to={`/menu/${item._id}`}>
        <div className="flex flex-col lg:flex-row gap-7 p-4 md:p-0 w-full h-full">
          <div className="w-full h-48 lg:w-[160px] lg:h-auto shrink-0">
            <img
              src={item?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-2">
            <h4 className="text-white font-elsie font-medium text-3xl hover:text-[#FFDE9F]">
              {item?.name}
            </h4>
            <p className="text-[#99A9AD] text-lg font-elsie font-normal mt-5 ">
              {item.description}
            </p>
            <p className="text-[#FFDE9F] text-4xl  font-elsie mt-6">
              $ {item.price}
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute inset-0 w-full h-full sm:flex hidden opacity-0 hover:opacity-100 transition-opacity duration-300 items-center justify-center z-10 bg-black/60 backdrop-blur-sm">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-[#FFDE9F] hover:bg-[#FFDE9F]/80 text-black font-semibold text-sm uppercase tracking-widest px-8 py-3 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M7 13H5.4M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuCard;
