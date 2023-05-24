const initialState = {
  loadingProducts: false,
  products: null,
  productsError: {},
};

const actionHandlers = {
  GET_PRODUCTS_START: (state) => ({
    ...state,
    products: [],
    loadingProducts: true,
    productsError: {},
  }),
  CLEAR_PRODUCTS_LIST: (state) => ({
    ...state,
    products: [],
    loadingProducts: false,
    productsError: {},
  }),
  GET_PRODUCTS_SUCCESS: (state, action) => ({
    ...state,
    products: action.result.data,
    loadingProducts: false,
    productsError: {},
  }),
  GET_PRODUCTS_ERROR: (state, action) => ({
    ...state,
    products: [],
    loadingProducts: false,
    productsError: action.error,
  }),
};

const productsReducer = (state = initialState, action) => {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }
  return state;
};

export default productsReducer;
