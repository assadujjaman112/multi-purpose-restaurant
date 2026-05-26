import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useMenu from "../../hooks/useMenu";
import { FaStarOfLife } from "react-icons/fa6";
import { BiPackage } from "react-icons/bi";
import { STATUSES } from "../../components/my-orders/orderConfig";
import StatusBadge from "../../components/my-orders/StatusBadge";
import ProgressTracker from "../../components/my-orders/ProgressTracker";
import Spinner from "../../components/shared/spinner/Spinner";

const buildOrders = (foods) => {
  if (!foods || foods.length === 0) return [];
  const byCategory = foods.reduce((acc, food) => {
    if (!acc[food.category]) acc[food.category] = [];
    acc[food.category].push(food);
    return acc;
  }, {});

  const pick = (cat, count = 1) =>
    (byCategory[cat] || []).slice(0, count).map((f) => ({
      name: f.name,
      category: f.category,
      qty: 1,
      price: parseFloat(f.price),
      image: f.image,
      id: f._id,
    }));

  return [
    {
      id: "ORD-2026-001",
      date: "Apr 20, 2026",
      status: "Delivered",
      items: [...pick("dinner", 1), ...pick("drink", 1)],
    },
    {
      id: "ORD-2026-002",
      date: "Apr 23, 2026",
      status: "On the way",
      items: [...pick("lunch", 2)],
    },
    {
      id: "ORD-2026-003",
      date: "Apr 25, 2026",
      status: "Preparing",
      items: [...pick("breakfast", 1), ...pick("dessert", 1)],
    },
    {
      id: "ORD-2026-004",
      date: "Apr 26, 2026",
      status: "Placed",
      items: [...pick("dinner", 1)],
    },
  ].map((order) => ({
    ...order,
    total: order.items.reduce((s, i) => s + i.price * i.qty, 0),
  }));
};

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { menu, loading, error, refetch } = useMenu();
  const [orders, setOrders] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (!loading && !error) {
      setOrders(buildOrders(menu));
    }
  }, [menu, loading, error]);

  const filters = ["All", ...STATUSES];
  const filtered =
    filter === "All" ? orders : orders.filter((o) => o.status === filter);

  const totalSpent = orders.reduce((s, o) => s + o.total, 0);

  return (
    <div className="relative min-h-screen">
      <img
        src="https://i.postimg.cc/13HG5KmD/191203005340-blue-zones-food.jpg"
        alt=""
        className="fixed inset-0 min-h-screen w-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto py-16">
        {/* Header */}
        <p className="text-[#FFDE9F] flex gap-3 items-center justify-center text-sm tracking-widest uppercase mb-4">
          <FaStarOfLife className="text-xs" /> My Orders{" "}
          <FaStarOfLife className="text-xs" />
        </p>
        <h2 className="text-3xl md:text-5xl font-elsie text-white text-center mb-2">
          Order History
        </h2>
        <p className="text-[#99A9AD] text-center text-sm mb-10">
          {user?.displayName
            ? `Welcome back, ${user.displayName}`
            : "Track and manage your orders"}
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <Spinner size="sm" />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <BiPackage className="text-6xl text-zinc-700 mb-4" />
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={refetch}
              className="px-6 py-2 border border-[#FFDE9F] text-[#FFDE9F] rounded-lg hover:bg-[#FFDE9F] hover:text-black transition-colors text-sm"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { label: "Total Orders", value: orders.length },
                {
                  label: "Delivered",
                  value: orders.filter((o) => o.status === "Delivered").length,
                },
                {
                  label: "In Progress",
                  value: orders.filter((o) => o.status !== "Delivered").length,
                },
                { label: "Total Spent", value: `$${totalSpent.toFixed(2)}` },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-zinc-800/70 border border-zinc-700 rounded-lg px-4 py-4 text-center"
                >
                  <p className="text-[#FFDE9F] text-xl md:text-2xl font-elsie">
                    {card.value}
                  </p>
                  <p className="text-[#99A9AD] text-xs mt-1">{card.label}</p>
                </div>
              ))}
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                    filter === f
                      ? "border-[#FFDE9F] bg-[#FFDE9F]/10 text-[#FFDE9F]"
                      : "border-zinc-600 text-[#99A9AD] hover:border-[#FFDE9F]/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Orders list */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <BiPackage className="text-6xl text-zinc-700 mb-4" />
                <p className="text-zinc-500 text-lg">No orders found</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((order) => {
                  const isExpanded = expandedId === order.id;
                  return (
                    <div
                      key={order.id}
                      className="bg-zinc-800/80 border border-zinc-700 rounded-xl overflow-hidden"
                    >
                      {/* Header row */}
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : order.id)
                        }
                        className="w-full text-left px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-zinc-700/30 transition-colors"
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-white font-medium font-elsie text-lg">
                              {order.id}
                            </span>
                            <StatusBadge status={order.status} />
                          </div>
                          <span className="text-[#99A9AD] text-sm">
                            {order.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[#FFDE9F] font-elsie text-xl">
                            ${order.total.toFixed(2)}
                          </span>
                          <span
                            className={`text-[#99A9AD] text-xs transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          >
                            ▼
                          </span>
                        </div>
                      </button>

                      {/* Expanded */}
                      {isExpanded && (
                        <div className="px-5 pb-5 border-t border-zinc-700">
                          <ProgressTracker status={order.status} />

                          <div className="flex flex-col gap-3 mt-5">
                            {order.items.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center gap-4 bg-zinc-900/50 rounded-lg p-3"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-white font-elsie text-base truncate">
                                    {item.name}
                                  </p>
                                  <p className="text-[#99A9AD] text-xs capitalize">
                                    {item.category}
                                  </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <p className="text-[#FFDE9F] font-elsie">
                                    ${(item.price * item.qty).toFixed(2)}
                                  </p>
                                  <p className="text-[#99A9AD] text-xs">
                                    × {item.qty}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-700">
                            <span className="text-[#99A9AD] text-sm">
                              Order Total
                            </span>
                            <span className="text-[#FFDE9F] font-elsie text-xl">
                              ${order.total.toFixed(2)}
                            </span>
                          </div>

                          {order.status === "Delivered" && (
                            <button className="mt-4 w-full py-2.5 border border-[#FFDE9F] text-[#FFDE9F] font-elsie rounded-lg hover:bg-[#FFDE9F] hover:text-black transition-colors text-base">
                              Reorder
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
