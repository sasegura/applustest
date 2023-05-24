export const loginUser = (payload) => ({
  type: "LOGIN_USER",
  payload: payload,
});

export const loginUserStart = () => ({
  type: "GET_LOGIN_USER_START",
});

export const loginUserSuccess = (result) => ({
  type: "GET_LOGIN_USER_SUCCESS",
  result: result,
});

export const loginUserError = (error) => ({
  type: "GET_LOGIN_USER_ERROR",
  error: error,
});
