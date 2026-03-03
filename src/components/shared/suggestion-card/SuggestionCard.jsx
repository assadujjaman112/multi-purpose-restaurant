import PropTypes from "prop-types";

const SuggestionCard = ({ food }) => {
  return (
    <div className="hover:cursor-pointer hover:z-10 hover:shadow-md hover:shadow-[#FFDE9F] hover:-translate-y-2 transition duration-500">
      <img src={food?.image} alt="" className="w-full h-[250px] object-cover" />
      <div className="px-3 py-5 space-y-8">
        <div className="flex  justify-between ">
          <h4 className="text-white text-3xl hover:text-[#FFDE9F] font-elsie">
            {food.name}
          </h4>
          <p className="text-3xl text-[#FFDE9F] font-elsie flex items-start">
            ${food.price}
          </p>
        </div>

        <p className="text-sm md:text-xl text-[#99A9AD] font-elsie">
          {food.description}
        </p>
      </div>
    </div>
  );
};

SuggestionCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
export default SuggestionCard;
