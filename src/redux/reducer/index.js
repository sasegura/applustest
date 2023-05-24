const initialState = {
  isloggedIn: false,
  isloginUser: false,
  loginError: {},
  user: {},
  token: "",
  loadingProducts: false,
  products: [],
  productsError: {},
  cart: null,
};
const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_LOGIN_USER_START":
      return { ...state, user: {}, isloginUser: true, loginError: {} };
    case "GET_LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.result.data.user,
        token: action.result.data.token,
        isloginUser: false,
        isloggedIn: true,
        loginError: {},
      };
    case "GET_LOGIN_USER_ERROR":
      return {
        ...state,
        user: {},
        isloginUser: false,
        loginError: action.error,
      };

    case "REGISTER_USER_START":
      return { ...state, user: {}, isloginUser: true, loginError: {} };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        user: action.result.data.user,
        token: action.result.data.token,
        isloginUser: false,
        isloggedIn: true,
        loginError: {},
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        user: {},
        isloginUser: false,
        loginError: action.error,
      };

    case "SET_USER_LOGGED_OUT":
      return { ...state, user: {}, isloggedIn: false };

    case "GET_PRODUCTS_START":
      return {
        ...state,
        products: [],
        loadingProducts: true,
        productsError: {},
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.result.data,
        loadingProducts: false,
        productsError: {},
      };
    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        products: [],
        loadingProducts: false,
        productsError: action.error,
      };

    case "ADD_PRODUCT":
      return { ...state, cart: [...state?.cart, payload] };
    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: [...state?.cart.filter((product) => product.id !== payload.id)],
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
