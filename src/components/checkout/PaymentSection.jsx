import PropTypes from "prop-types";
import { FaStarOfLife } from "react-icons/fa6";

const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery" },
  // { id: "card", label: "Credit / Debit Card (demo)" },
];

const PaymentSection = ({ payment, onChange }) => (
  <section className="bg-zinc-800/80 border border-zinc-700 rounded-xl p-6">
    <p className="text-[#FFDE9F] flex gap-2 items-center text-xs tracking-widest uppercase mb-3">
      <FaStarOfLife className="text-[8px]" /> Payment
    </p>
    <h3 className="font-elsie text-2xl text-white mb-5">Payment Method</h3>

    <div className="flex flex-col gap-3">
      {PAYMENT_METHODS.map((method) => (
        <label
          key={method.id}
          className={`flex items-center gap-4 border-2 rounded-lg p-4 cursor-pointer transition-colors ${
            payment === method.id
              ? "border-[#FFDE9F] bg-[#FFDE9F]/5"
              : "border-zinc-600 hover:border-zinc-500"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={method.id}
            checked={payment === method.id}
            onChange={onChange}
            className="accent-[#FFDE9F] w-4 h-4 flex-shrink-0"
          />
          <span className="text-white">{method.label}</span>
        </label>
      ))}
    </div>
  </section>
);

PaymentSection.propTypes = {
  payment: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentSection;
