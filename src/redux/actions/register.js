export const registerUser = (payload) => ({
  type: "REGISTER_USER",
  payload: payload,
});

export const registerUserStart = () => ({
  type: "REGISTER_USER_START",
});

export const registerUserSuccess = (result) => ({
  type: "REGISTER_USER_SUCCESS",
  result: result,
});

export const registerUserError = (error) => ({
  type: "REGISTER_USER_ERROR",
  error: error,
});
