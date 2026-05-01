import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderSummary = ({ itemCount, subtotal, tax, total }) => (
  <div className="sticky top-24 bg-zinc-800/80 border border-zinc-700 rounded-xl p-6">
    <h3 className="font-elsie text-2xl text-white mb-6">Order Summary</h3>

    <div className="space-y-3 text-sm">
      <div className="flex justify-between text-[#99A9AD]">
        <span>Items ({itemCount})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-[#99A9AD]">
        <span>Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="h-[1px] bg-zinc-700 my-4" />
      <div className="flex justify-between items-center">
        <span className="text-white font-medium text-base">Total</span>
        <span className="text-[#FFDE9F] font-elsie text-2xl">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>

    <Link
      to="/checkout"
      className="mt-6 block text-center w-full bg-[#FFDE9F] hover:bg-[#f0c981] text-black font-elsie text-lg py-3 rounded-lg transition-colors"
    >
      Proceed to Checkout
    </Link>

    <Link
      to="/menu"
      className="mt-3 block text-center text-[#99A9AD] hover:text-[#FFDE9F] text-sm transition-colors"
    >
      ← Continue Shopping
    </Link>
  </div>
);

OrderSummary.propTypes = {
  itemCount: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderSummary;
