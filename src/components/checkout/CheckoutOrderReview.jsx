import PropTypes from "prop-types";

const CheckoutOrderReview = ({
  cartItems,
  subtotal,
  tax,
  total,
  placing,
  onPlaceOrder,
}) => (
  <div className="sticky top-24 bg-zinc-800/80 border border-zinc-700 rounded-xl p-6 space-y-5">
    <h3 className="font-elsie text-2xl text-white">Order Review</h3>

    <div className="space-y-3 max-h-64 overflow-y-auto no-scrollbar">
      {cartItems.map((item) => (
        <div key={item._id} className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-elsie truncate">{item.name}</p>
            <p className="text-[#99A9AD] text-xs">× {item.quantity}</p>
          </div>
          <span className="text-[#FFDE9F] text-sm font-elsie flex-shrink-0">
            ${(parseFloat(item.price) * item.quantity).toFixed(2)}
          </span>
        </div>
      ))}
    </div>

    <div className="h-[1px] bg-zinc-700" />

    <div className="space-y-2 text-sm">
      <div className="flex justify-between text-[#99A9AD]">
        <span>Subtotal ({cartItems.length} items)</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-[#99A9AD]">
        <span>Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-[#99A9AD]">
        <span>Delivery</span>
        <span className="text-green-400">Free</span>
      </div>
      <div className="h-[1px] bg-zinc-700 my-1" />
      <div className="flex justify-between items-center">
        <span className="text-white font-medium text-base">Total</span>
        <span className="text-[#FFDE9F] font-elsie text-2xl">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>

    <button
      onClick={onPlaceOrder}
      disabled={placing || cartItems.length === 0}
      className="hidden lg:block w-full bg-[#FFDE9F] hover:bg-[#f0c981] disabled:opacity-50 disabled:cursor-not-allowed text-black font-elsie text-lg py-3 rounded-lg transition-colors"
    >
      {placing ? "Placing Order…" : "Place Order"}
    </button>
  </div>
);

CheckoutOrderReview.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  subtotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  placing: PropTypes.bool.isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
};

export default CheckoutOrderReview;
