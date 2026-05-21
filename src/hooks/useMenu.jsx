import { useEffect, useState } from "react";
import api from "../lib/api";

// Module-level cache — shared across all hook instances for the browser session.
// On error the promise is cleared so the next retry can start a fresh request.
let cachedMenu = null;
let fetchPromise = null;

const startFetch = () => {
  if (fetchPromise) return fetchPromise;
  fetchPromise = api
    .get("/foods")
    .then((res) => {
      const payload = res.data;
      cachedMenu = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.data)
        ? payload.data
        : [];
      return cachedMenu;
    })
    .catch((err) => {
      fetchPromise = null; // allow a retry
      throw err;
    });
  return fetchPromise;
};

export const clearMenuCache = () => {
  cachedMenu = null;
  fetchPromise = null;
};

const useMenu = () => {
  const [menu, setMenu] = useState(() => cachedMenu ?? []);
  const [loading, setLoading] = useState(cachedMenu === null);
  const [error, setError] = useState(null);

  const load = () => {
    if (cachedMenu !== null) {
      setMenu(cachedMenu);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    startFetch()
      .then((data) => { setMenu(data); })
      .catch((err) =>
        setError(err?.response?.data?.message || "Failed to load menu. Please try again.")
      )
      .finally(() => setLoading(false));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(); }, []);

  const refetch = () => {
    clearMenuCache();
    load();
  };

  return { menu, loading, error, refetch };
};

export default useMenu;
