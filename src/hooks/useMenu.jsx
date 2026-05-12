import { useEffect, useState } from "react";
import api from "../lib/api";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api
      .get("/foods")
      .then((result) => {
        setMenu(Array.isArray(result.data.data) ? result.data.data : []);
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "Failed to load menu. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { menu, loading, error };
};

export default useMenu;
