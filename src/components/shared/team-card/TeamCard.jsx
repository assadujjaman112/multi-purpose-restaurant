import PropTypes from "prop-types";

const TeamCard = ({ image, name, description }) => {
  return (
    <div className="relative">
      <img src={image} alt="" className="w-full h-[350px]" />

      <div className="flex flex-col items-center mt-6">
        <h4 className="text-white font-elsie text-3xl">{name}</h4>
        <p className=" font-elsie text-[#99A9AD] mt-3 text-xl">{description}</p>
      </div>
    </div>
  );
};
TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default TeamCard;
