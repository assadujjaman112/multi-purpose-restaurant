import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

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

export default EmptyCart;
