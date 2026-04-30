import axios from "axios";

const getCart = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/carts`, {
    params: { email },
  });
  return Array.isArray(res.data.data) ? res.data.data : [];
};

export const addToCart = async (item, quantity, customerEmail) => {
  const cart = await getCart(customerEmail);
  const existing = cart.find((c) => c.name === item.name);

  if (existing) {
    await updateCartQuantity(existing._id, existing.quantity + quantity);
    return { success: true, type: "updated" };
  }

  await axios.post(`${import.meta.env.VITE_API_URL}/carts`, {
    ...item,
    quantity,
    customerEmail,
  });
  return { success: true, type: "inserted" };
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
