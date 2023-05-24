export const addProductToCart = (payload) => ({
  type: "ADD_PRODUCT",
  payload: payload,
});

export const deleteProductFromCart = (payload) => ({
  type: "DELETE_PRODUCT",
  payload: payload,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const payProducts = () => ({
  type: "PAY_PRODUCTS_CART",
});
