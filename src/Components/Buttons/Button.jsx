import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-[#FFDE9F] px-5 py-2 lg:px-10 lg:py-5 text-lg lg:text-xl  font-medium hover:bg-black border-[#FFDE9F] border hover:text-[#FFDE9F]">
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
