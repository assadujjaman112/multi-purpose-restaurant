import PropTypes from "prop-types";

const ChooseCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="space-y-4" data-aos="fade-up" data-aos-duration="1000">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center border border-[#FFDE9F] rounded-full w-24 h-24">
          <Icon className="text-[#FFDE9F] text-6xl" />
        </div>
      </div>
      <h1 className="text-center font-elsie font-medium text-3xl text-white">
        {title}
      </h1>
      <p className="text-center font-medium text-[#99A9AD] ">{description}</p>
    </div>
  );
};

ChooseCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ChooseCard;
