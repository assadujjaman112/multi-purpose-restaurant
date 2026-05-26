import { useState } from "react";
import { showAlert } from "../../lib/swal";
import MenuBanner from "../../components/shared/banner/MenuBanner";
import useCart from "../../hooks/useCart";
import { removeFromCart, updateCartQuantity } from "../../lib/helper";
import { TAX_RATE } from "../../lib/env";
import CartRow from "../../components/cart/CartRow";
import OrderSummary from "../../components/cart/OrderSummary";
import EmptyCart from "../../components/cart/EmptyCart";
import Spinner from "../../components/shared/spinner/Spinner";

export const Cart = () => {
  const [cartItems, loading, refetch, cartError] = useCart();
  const [quantities, setQuantities] = useState({});

  const getQty = (item) => quantities[item._id] ?? item.quantity;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * getQty(item),
    0,
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const handleRemove = async (id, name) => {
    const result = await showAlert({
      title: "Remove item?",
      text: `"${name}" will be removed from your cart.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Remove",
    });
    if (!result.isConfirmed) return;
    const res = await removeFromCart(id);
    if (res.success) {
      setQuantities((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      refetch();
      showAlert({
        title: "Removed from cart",
        text: "Item removed from cart successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      showAlert({
        title: "Error",
        text: res.error || "Failed to remove item from cart",
        icon: "error",
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
    const res = await updateCartQuantity(item._id, newQty);
    if (!res.success) {
      showAlert({
        title: "Error",
        text: res.error || "Failed to update quantity",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return (
      <div>
        <MenuBanner
          image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
          title="My Cart"
        />
        <div className="flex justify-center items-center py-32">
          <Spinner />
        </div>
      </div>
    );
  }

  if (cartError) {
    return (
      <div>
        <MenuBanner
          image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
          title="My Cart"
        />
        <div className="flex flex-col items-center justify-center gap-4 py-32">
          <p className="text-red-400 text-lg text-center">{cartError}</p>
          <button
            onClick={refetch}
            className="border border-[#FFDE9F] px-6 py-2 text-[#FFDE9F] hover:bg-[#FFDE9F] hover:text-black transition-colors"
          >
            Retry
          </button>
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
