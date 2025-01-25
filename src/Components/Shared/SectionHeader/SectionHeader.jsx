import PropTypes from "prop-types";
import { FaStarOfLife } from "react-icons/fa6";

const SectionHeader = ({ title, header, description }) => {
  return (
    <div>
      <p
        className="text-xl text-center text-[#FFDE9F] flex gap-4 items-center justify-center pt-8 md:pt-12 lg:pt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaStarOfLife className="text-lg"></FaStarOfLife> {title}
        <FaStarOfLife className="text-lg"></FaStarOfLife>
      </p>
      <h1
        className="text-3xl md:text-5xl lg:text-6xl font-elsie text-white mt-5 text-center "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {header}
      </h1>
      <p
        className="text-sm md:text-lg lg:text-xl text-center mt-6 lg:mt-10 text-[#99A9AD]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {description}
      </p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionHeader;
