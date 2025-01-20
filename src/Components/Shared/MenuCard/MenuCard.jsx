import PropTypes from "prop-types";

const MenuCard = ({ item }) => {
  return (
    <div className="flex gap-7">
      {/* <div className="w-[170px] h-[170px]"> */}
        <img src={item?.image} alt="" className="w-[180px] h-full object-cover" />
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
  );
};

MenuCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default MenuCard;
