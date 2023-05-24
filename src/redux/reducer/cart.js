const initialState = {
  cart: [],
};

const actionHandlers = {
  ADD_PRODUCT: (state, action) => ({
    ...state,
    user: {},
    cart: action.payload,
  }),

  DELETE_PRODUCT: (state, action) => ({
    ...state,
    cart: [
      ...state?.cart.filter((product) => product.id !== action.payload.id),
    ],
  }),
  CLEAR_CART: (state) => ({
    ...state,
    cart: [],
  }),
};

const cartReducer = (state = initialState, action) => {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }
  return state;
};

export default cartReducer;
