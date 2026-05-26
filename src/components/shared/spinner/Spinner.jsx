import PropTypes from "prop-types";

const SIZES = {
  sm: "h-10 w-10 border-2",
  md: "h-12 w-12 border-4",
};

const Spinner = ({ size = "md", className = "" }) => (
  <div
    role="status"
    aria-label="Loading"
    className={`rounded-full border-[#FFDE9F] border-t-transparent animate-spin ${SIZES[size]} ${className}`}
  />
);

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md"]),
  className: PropTypes.string,
};

export default Spinner;
