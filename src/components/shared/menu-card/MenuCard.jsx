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
    const result = await addToCart({ ...item, customerEmail }, 1);
    if (result.data.insertedId) {
      Swal.fire({
        title: "Added to cart",
        text: "Item added to cart successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="relative">
      <Link to={`/menu/${item._id}`}>
        <div className="flex flex-col lg:flex-row gap-7 p-4 md:p-0 w-full h-full">
          {/* <div className="w-[170px] h-[170px]"> */}
          <img
            src={item?.image}
            alt=""
            className="w-full h-48 lg:w-[180px] lg:h-full object-cover"
          />
          {/* </div> */}
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
      <div className="absolute h-full inset-0 w-full hidden  hover:flex items-center justify-center z-10 top-0">
        <button
          onClick={handleAddToCart}
          className="text-black bg-[#FFDE9F] hover:bg-[#FFDE9F]/90 px-10 py-4 text-lg font-medium "
        >
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
