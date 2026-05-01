import PropTypes from "prop-types";
import { FaStarOfLife } from "react-icons/fa6";
import { FiFileText, FiMapPin } from "react-icons/fi";
import CheckoutField from "./CheckoutField";

const DeliverySection = ({ form, errors, onChange }) => (
  <section className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6">
    <p className="text-[#FFDE9F] flex gap-2 items-center text-xs tracking-widest uppercase mb-3">
      <FaStarOfLife className="text-[8px]" /> Delivery
    </p>
    <h3 className="font-elsie text-2xl text-white mb-5">Delivery Address</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2">
        <CheckoutField label="Street Address" required error={errors.address}>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#99A9AD]" />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="123 Main Street, Apt 4B"
              className={`w-full bg-transparent border-2 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors ${errors.address ? "border-red-500" : "border-zinc-600"}`}
            />
          </div>
        </CheckoutField>
      </div>

      <CheckoutField label="City" required error={errors.city}>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={onChange}
          placeholder="New York"
          className={`w-full bg-transparent border-2 rounded-lg px-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors ${errors.city ? "border-red-500" : "border-zinc-600"}`}
        />
      </CheckoutField>

      <CheckoutField label="ZIP / Postal Code">
        <input
          type="text"
          name="zip"
          value={form.zip}
          onChange={onChange}
          placeholder="10001"
          className="w-full bg-transparent border-2 border-zinc-600 rounded-lg px-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors"
        />
      </CheckoutField>

      <div className="sm:col-span-2">
        <CheckoutField label="Delivery Note (optional)">
          <div className="relative">
            <FiFileText className="absolute left-3 top-3.5 text-[#99A9AD]" />
            <textarea
              name="note"
              value={form.note}
              onChange={onChange}
              rows={3}
              placeholder="E.g. Ring the bell, leave at door, no onions…"
              className="w-full bg-transparent border-2 border-zinc-600 rounded-lg pl-9 pr-4 py-2.5 text-white placeholder-[#99A9AD]/50 focus:outline-none focus:border-[#FFDE9F] transition-colors resize-none"
            />
          </div>
        </CheckoutField>
      </div>
    </div>
  </section>
);

DeliverySection.propTypes = {
  form: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DeliverySection;
