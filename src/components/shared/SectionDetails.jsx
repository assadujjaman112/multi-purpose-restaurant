import { FaStarOfLife } from "react-icons/fa6";
import PropTypes from "prop-types";

const SectionDetails = ({ title, header, description }) => {
  return (
    <div>
      <p
        className="text-xl text-[#FFDE9F] flex gap-4 items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaStarOfLife className="text-lg"></FaStarOfLife> {title}
        <FaStarOfLife className="text-lg"></FaStarOfLife>
      </p>
      <h2
        className="text-3xl md:text-5xl lg:text-7xl font-elsie text-white mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {header}
      </h2>
      <p
        className="text-lg mt-6 lg:mt-10 text-[#99A9AD]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {description}
      </p>
    </div>
  );
};

SectionDetails.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionDetails;
