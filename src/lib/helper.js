import axios from "axios";

export const addToCart = async (item, quantity, customerEmail) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/carts`, {
    ...item,
    quantity,
    customerEmail,
  });
  return res;
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}/carts/${id}`);
  return res;
};

export const updateCartQuantity = async (id, quantity) => {
  const res = await axios.patch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
    quantity,
  });
  return res;
};
