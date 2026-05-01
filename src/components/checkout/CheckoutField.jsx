import PropTypes from "prop-types";

const CheckoutField = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[#99A9AD] text-xs uppercase tracking-wider">
      {label}{" "}
      {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

CheckoutField.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CheckoutField.defaultProps = {
  required: false,
  error: null,
};

export default CheckoutField;
