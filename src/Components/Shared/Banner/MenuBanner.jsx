import PropTypes from "prop-types";

const MenuBanner = ({ image, title }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt=""
        className="w-full h-[250px] object-cover opacity-40"
      />
      <div className="absolute top-0 flex justify-center w-full">
        <h5
          className="font-elsie text-6xl md:text-8xl text-white mt-9"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h5>
      </div>
    </div>
  );
};
MenuBanner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MenuBanner;
