import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(() => {
    if (!user?.email) {
      setCartItems([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/carts`, {
        params: { email: user.email },
      })
      .then((res) => {
        setCartItems(Array.isArray(res.data.data) ? res.data.data : []);
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return [cartItems, loading, fetchCart];
};

export default useCart;
