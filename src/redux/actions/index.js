export const setUserLogout = (payload) => ({
  type: "SET_USER_LOGGED_OUT",
  payload: payload,
});

export const loginUser = (payload) => ({
  type: "LOGIN_USER",
  payload: payload,
});

export const registerUser = (payload) => ({
  type: "REGISTER_USER",
  payload: payload,
});

export const getProducts = () => ({
  type: "GET_PRODUCTS",
});

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
