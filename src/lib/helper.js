import axios from "axios";

const getCart = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/carts`, {
    params: { email },
  });
  return Array.isArray(res.data.data) ? res.data.data : [];
};

export const addToCart = async (item, quantity, customerEmail) => {
  const cart = await getCart(customerEmail);
  const existing = cart.find((c) => c.foodId === item._id);

  if (existing) {
    await updateCartQuantity(existing._id, existing.quantity + quantity);
    return { success: true, type: "updated" };
  }

  const { _id, ...itemData } = item;
  await axios.post(`${import.meta.env.VITE_API_URL}/carts`, {
    ...itemData,
    foodId: _id,
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
