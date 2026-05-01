import PropTypes from "prop-types";
import { FaStarOfLife } from "react-icons/fa6";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import CheckoutField from "./CheckoutField";

const ContactSection = ({ form, errors, onChange }) => (
  <section className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6">
    <p className="text-[#FFDE9F] flex gap-2 items-center text-xs tracking-widest uppercase mb-3">
      <FaStarOfLife className="text-[8px]" /> Contact Information
    </p>
    <h3 className="font-elsie text-2xl text-white mb-5">Your Details</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <CheckoutField label="Full Name" required error={errors.name}>
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99A9AD]" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="John Doe"
            className={`w-full bg-transparent border-2 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors ${errors.name ? "border-red-500" : "border-zinc-600"}`}
          />
        </div>
      </CheckoutField>

      <CheckoutField label="Email">
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99A9AD]" />
          <input
            type="email"
            name="email"
            value={form.email}
            readOnly
            className="w-full bg-transparent border-2 border-zinc-600 rounded-lg pl-9 pr-4 py-2.5 text-[#99A9AD] cursor-not-allowed opacity-60"
          />
        </div>
      </CheckoutField>

      <div className="sm:col-span-2">
        <CheckoutField label="Phone Number" required error={errors.phone}>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99A9AD]" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="+1 (555) 000-0000"
              className={`w-full bg-transparent border-2 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors ${errors.phone ? "border-red-500" : "border-zinc-600"}`}
            />
          </div>
        </CheckoutField>
      </div>
    </div>
  </section>
);

ContactSection.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactSection;
