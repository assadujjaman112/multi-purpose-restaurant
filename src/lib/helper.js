import axios from "axios";

const getErrorMessage = (err) =>
  err?.response?.data?.message || err?.message || "Something went wrong. Please try again.";

const getCart = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/carts`, {
    params: { email },
  });
  return Array.isArray(res.data.data) ? res.data.data : [];
};

export const addToCart = async (item, quantity, customerEmail) => {
  try {
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
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
};

export const removeFromCart = async (id) => {
  try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/carts/${id}`);
    const deletedCount = res.data?.data?.deletedCount ?? 0;
    return { success: deletedCount > 0, deletedCount };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
};

export const updateCartQuantity = async (id, quantity) => {
  try {
    await axios.patch(`${import.meta.env.VITE_API_URL}/carts/${id}`, { quantity });
    return { success: true };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
};
