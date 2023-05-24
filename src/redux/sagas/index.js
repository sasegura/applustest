import { takeLatest, all } from "redux-saga/effects";

import { getProducts } from "./getProducts";
import { loginUser } from "./login";
import { registerUser } from "./register";

function* actionWatcher() {
  yield takeLatest("GET_PRODUCTS", getProducts);
  yield takeLatest("LOGIN_USER", loginUser);
  yield takeLatest("REGISTER_USER", registerUser);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
