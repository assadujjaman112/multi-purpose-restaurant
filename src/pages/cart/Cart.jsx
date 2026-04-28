import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import Swal from "sweetalert2";
import MenuBanner from "../../components/shared/banner/MenuBanner";
import useCart from "../../hooks/useCart";
import { removeFromCart, updateCartQuantity } from "../../lib/helper";

const TAX_RATE = 0.1;

export const Cart = () => {
  const [cartItems, loading, refetch] = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleRemove = async (id, name) => {
    const result = await Swal.fire({
      title: "Remove item?",
      text: `"${name}" will be removed from your cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFDE9F",
      cancelButtonColor: "#374151",
      confirmButtonText: "Remove",
      background: "#1c2628",
      color: "#fff",
    });
    if (!result.isConfirmed) return;
    await removeFromCart(id);
    refetch();
  };

  const handleQuantityChange = async (item, delta) => {
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    await updateCartQuantity(item._id, newQty);
    refetch();
  };

  if (loading) {
    return (
      <div>
        <MenuBanner
          image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
          title="My Cart"
        />
        <div className="flex justify-center items-center py-32">
          <div className="w-12 h-12 rounded-full border-4 border-[#FFDE9F] border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <MenuBanner
        image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
        title="My Cart"
      />

      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]" />

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="w-11/12 lg:w-[88%] mx-auto py-12 lg:py-20 flex flex-col lg:flex-row gap-8">
            {/* Cart table */}
            <div className="flex-1 min-w-0">
              <h2 className="font-elsie text-3xl text-white mb-6">
                Your Items{" "}
                <span className="text-[#99A9AD] text-xl">
                  ({cartItems.length})
                </span>
              </h2>
              <div className="rounded-xl overflow-hidden border border-zinc-700">
                {/* Table header */}
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-zinc-800 text-[#99A9AD] text-sm uppercase tracking-wider">
                  <span>Item</span>
                  <span className="text-center">Price</span>
                  <span className="text-center">Quantity</span>
                  <span className="text-center">Total</span>
                  <span />
                </div>

                {/* Rows */}
                <div className="divide-y divide-zinc-700/60">
                  {cartItems.map((item) => (
                    <CartRow
                      key={item._id}
                      item={item}
                      onRemove={handleRemove}
                      onQuantityChange={handleQuantityChange}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:w-80 shrink-0">
              <OrderSummary
                itemCount={cartItems.length}
                subtotal={subtotal}
                tax={tax}
                total={total}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartRow = ({ item, onRemove, onQuantityChange }) => {
  const rowTotal = (parseFloat(item.price) * item.quantity).toFixed(2);
  return (
    <div className="bg-zinc-800/40 px-4 md:px-6 py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center">
      {/* Item info */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg shrink-0"
        />
        <div className="min-w-0">
          <p className="text-white font-elsie text-lg leading-tight truncate">
            {item.name}
          </p>
          <p className="text-[#99A9AD] text-sm mt-0.5 line-clamp-1">
            {item.description}
          </p>
          <p className="text-[#FFDE9F] text-sm font-medium md:hidden mt-1">
            ${parseFloat(item.price).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Unit price (desktop) */}
      <p className="hidden md:block text-[#FFDE9F] font-elsie text-xl text-center">
        ${parseFloat(item.price).toFixed(2)}
      </p>

      {/* Quantity stepper */}
      <div className="flex items-center gap-2 justify-start md:justify-center">
        <button
          onClick={() => onQuantityChange(item, -1)}
          disabled={item.quantity <= 1}
          className="w-8 h-8 rounded-md border border-zinc-600 flex items-center justify-center text-white hover:border-[#FFDE9F] hover:text-[#FFDE9F] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <FiMinus className="text-sm" />
        </button>
        <span className="w-8 text-center text-white font-medium">
          {item.quantity}
        </span>
        <button
          onClick={() => onQuantityChange(item, 1)}
          className="w-8 h-8 rounded-md border border-zinc-600 flex items-center justify-center text-white hover:border-[#FFDE9F] hover:text-[#FFDE9F] transition-colors"
        >
          <FiPlus className="text-sm" />
        </button>
      </div>

      {/* Row total (desktop) */}
      <p className="hidden md:block text-white font-elsie text-xl text-center">
        ${rowTotal}
      </p>

      {/* Remove */}
      <button
        onClick={() => onRemove(item._id, item.name)}
        className="text-zinc-500 hover:text-red-400 transition-colors justify-self-end md:justify-self-auto"
        aria-label="Remove item"
      >
        <FiTrash2 className="text-lg" />
      </button>
    </div>
  );
};

CartRow.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

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

    <button
      onClick={() =>
        Swal.fire({
          title: "Coming Soon",
          text: "Checkout functionality is on its way!",
          icon: "info",
          confirmButtonColor: "#FFDE9F",
          background: "#1c2628",
          color: "#fff",
        })
      }
      className="mt-6 w-full bg-[#FFDE9F] hover:bg-[#f0c981] text-black font-elsie text-lg py-3 rounded-lg transition-colors"
    >
      Proceed to Checkout
    </button>

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

const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-28 gap-6 text-center">
    <FiShoppingCart className="text-7xl text-zinc-600" />
    <div>
      <h3 className="font-elsie text-4xl text-white">Your cart is empty</h3>
      <p className="text-[#99A9AD] mt-2 text-lg">
        Looks like you haven&apos;t added anything yet.
      </p>
    </div>
    <Link
      to="/menu"
      className="mt-2 border border-[#FFDE9F] text-[#FFDE9F] hover:bg-[#FFDE9F] hover:text-black font-elsie text-lg px-8 py-3 rounded-lg transition-colors"
    >
      Browse Menu
    </Link>
  </div>
);
