import axios from "axios";

export const addToCart = async (item, quantity) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/carts`, {
    ...item,
    quantity,
  });
  return res;
};
