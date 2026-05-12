import { useCallback, useContext, useEffect, useState } from "react";
import api from "../lib/api";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = useCallback(() => {
    if (!user?.email) {
      setCartItems([]);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    api
      .get("/carts", { params: { email: user.email } })
      .then((res) => {
        setCartItems(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "Failed to load cart. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return [cartItems, loading, fetchCart, error];
};

export default useCart;
