export const getProducts = () => ({
  type: "GET_PRODUCTS",
});

export const clearProductsList = () => ({
  type: "CLEAR_PRODUCTS_LIST",
});

export const getProductsStart = () => ({
  type: "GET_PRODUCTS_START",
});

export const getProductsSuccess = (result) => ({
  type: "GET_PRODUCTS_SUCCESS",
  result: result,
});

export const getProductsError = (error) => ({
  type: "GET_PRODUCTS_ERROR",
  error: error,
});
