import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MenuBanner from "../../components/shared/banner/MenuBanner";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";
import { removeFromCart } from "../../lib/helper";
import { TAX_RATE } from "../../lib/env";
import ContactSection from "../../components/checkout/ContactSection";
import DeliverySection from "../../components/checkout/DeliverySection";
import PaymentSection from "../../components/checkout/PaymentSection";
import CheckoutOrderReview from "../../components/checkout/CheckoutOrderReview";
const DEFAULT_DELIVERY = parseFloat(import.meta.env.VITE_DELIVERY_CHARGE) || 0;

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, loading, refetch, cartError] = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    note: "",
    payment: "cod",
  });
  const [deliveryCharge, setDeliveryCharge] = useState(DEFAULT_DELIVERY);
  const [placing, setPlacing] = useState(false);
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0,
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + deliveryCharge;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.address.trim()) e.address = "Delivery address is required";
    if (!form.city.trim()) e.city = "City is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handlePlaceOrder = async (e) => {
    e?.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setPlacing(true);
    try {
      const results = await Promise.all(cartItems.map((item) => removeFromCart(item._id)));
      if (results.some((r) => !r.success)) throw new Error("Failed to clear cart items");
      refetch();
      await Swal.fire({
        title: "Order Placed!",
        html: `<p style="color:#99A9AD;margin-top:4px">Your order has been placed successfully.<br/>We'll start preparing it right away.</p>`,
        icon: "success",
        confirmButtonColor: "#FFDE9F",
        confirmButtonText: "View My Orders",
        background: "#1c2628",
        color: "#fff",
      });
      navigate("/my-orders");
    } catch {
      Swal.fire({
        title: "Something went wrong",
        text: "Failed to place your order. Please try again.",
        icon: "error",
        confirmButtonColor: "#FFDE9F",
        background: "#1c2628",
        color: "#fff",
      });
    } finally {
      setPlacing(false);
    }
  };

  if (loading) {
    return (
      <div>
        <MenuBanner
          image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
          title="Checkout"
        />
        <div className="flex justify-center items-center py-32">
          <div className="w-12 h-12 rounded-full border-4 border-[#FFDE9F] border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  if (cartError) {
    return (
      <div>
        <MenuBanner
          image="https://i.postimg.cc/C1DRkDwP/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay-2829-6471.jpg"
          title="Checkout"
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
        title="Checkout"
      />

      <div className="relative">
        <span className="w-[1px] h-full absolute left-[11.5%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[30.7%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[50%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[69.3%] -z-10 bg-[#99A9AD1A]" />
        <span className="w-[1px] h-full absolute left-[88.5%] -z-10 bg-[#99A9AD1A]" />

        <div className="w-11/12 lg:w-[88%] mx-auto py-12 lg:py-20 flex flex-col lg:flex-row gap-8">
          {/* Left: form */}
          <form
            onSubmit={handlePlaceOrder}
            className="flex-1 min-w-0 space-y-6"
          >
            <ContactSection form={form} errors={errors} onChange={handleChange} />
            <DeliverySection form={form} errors={errors} onChange={handleChange} />
            <PaymentSection payment={form.payment} onChange={handleChange} />

            {/* Mobile CTA */}
            <button
              type="submit"
              disabled={placing || cartItems.length === 0}
              className="lg:hidden w-full bg-[#FFDE9F] hover:bg-[#f0c981] disabled:opacity-50 disabled:cursor-not-allowed text-black font-elsie text-lg py-3 rounded-lg transition-colors"
            >
              {placing
                ? "Placing Order…"
                : `Place Order · $${total.toFixed(2)}`}
            </button>
          </form>

          {/* Right: order review */}
          <div className="lg:w-80 shrink-0">
            <CheckoutOrderReview
              cartItems={cartItems}
              subtotal={subtotal}
              taxRate={TAX_RATE}
              tax={tax}
              deliveryCharge={deliveryCharge}
              onDeliveryChange={(val) => setDeliveryCharge(val)}
              total={total}
              placing={placing}
              onPlaceOrder={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
