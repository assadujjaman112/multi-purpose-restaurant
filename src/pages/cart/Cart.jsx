import { useState } from "react";
import Swal from "sweetalert2";
import MenuBanner from "../../components/shared/banner/MenuBanner";
import useCart from "../../hooks/useCart";
import { removeFromCart, updateCartQuantity } from "../../lib/helper";
import CartRow from "../../components/cart/CartRow";
import OrderSummary from "../../components/cart/OrderSummary";
import EmptyCart from "../../components/cart/EmptyCart";

const TAX_RATE = 0.1;

export const Cart = () => {
  const [cartItems, loading, refetch] = useCart();
  const [quantities, setQuantities] = useState({});

  const getQty = (item) => quantities[item._id] ?? item.quantity;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * getQty(item),
    0,
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
    const res = await removeFromCart(id);
    if (res.data.data.deletedCount) {
      setQuantities((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      refetch();
      Swal.fire({
        title: "Removed from cart",
        text: "Item removed from cart successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to remove item from cart",
        icon: "error",
        confirmButtonColor: "#FFDE9F",
        confirmButtonText: "OK",
      });
    }
  };

  const handleQuantityChange = (item, delta) => {
    const newQty = getQty(item) + delta;
    if (newQty < 1) return;
    setQuantities((prev) => ({ ...prev, [item._id]: newQty }));
  };

  const handleQuantityInput = (item, raw) => {
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      setQuantities((prev) => ({ ...prev, [item._id]: parsed }));
    }
  };

  const handleConfirm = async (item, qty) => {
    const newQty = qty ?? getQty(item);
    setQuantities((prev) => ({ ...prev, [item._id]: newQty }));
    await updateCartQuantity(item._id, newQty);
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
                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_5rem] gap-4 px-6 py-3 bg-zinc-800 text-[#99A9AD] text-sm uppercase tracking-wider">
                  <span>Item</span>
                  <span className="text-center">Price</span>
                  <span className="text-center">Quantity</span>
                  <span className="text-center">Total</span>
                  <span className="text-center">Actions</span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-zinc-700/60">
                  {cartItems.map((item) => (
                    <CartRow
                      key={item._id}
                      item={item}
                      quantity={getQty(item)}
                      onRemove={handleRemove}
                      onQuantityChange={handleQuantityChange}
                      onQuantityInput={handleQuantityInput}
                      onConfirm={handleConfirm}
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
