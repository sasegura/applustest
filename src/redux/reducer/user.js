const initialState = {
  isloggedIn: false,
  isloginUser: false,
  loginError: {},
  user: {},
  token: "",
};

const actionHandlers = {
  GET_LOGIN_USER_START: (state) => ({
    ...state,
    user: {},
    isloginUser: true,
    loginError: {},
  }),
  GET_LOGIN_USER_SUCCESS: (state, action) => ({
    ...state,
    user: action.result.data.user,
    token: action.result.data.token,
    isloginUser: false,
    isloggedIn: true,
    loginError: {},
  }),
  GET_LOGIN_USER_ERROR: (state, action) => ({
    ...state,
    user: {},
    isloginUser: false,
    loginError: action.error,
  }),
  SET_USER_LOGGED_OUT: (state, action) => ({
    ...state,
    user: {},
    isloggedIn: false,
  }),
  REGISTER_USER_START: (state) => ({
    ...state,
    user: {},
    isloginUser: true,
    loginError: {},
  }),
  REGISTER_USER_SUCCESS: (state, action) => ({
    ...state,
    user: action.result.data.user,
    token: action.result.data.token,
    isloginUser: false,
    isloggedIn: true,
    loginError: {},
  }),
  REGISTER_USER_ERROR: (state, action) => ({
    ...state,
    user: {},
    isloginUser: false,
    loginError: action.error,
  }),
};

const userReducer = (state = initialState, action) => {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }
  return state;
};

export default userReducer;
