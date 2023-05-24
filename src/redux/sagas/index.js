import axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  apiUrl,
  getMethod,
  loginUrl,
  postMethod,
  productsUrl,
  registerUrl,
} from "../../const/api";

const apiCall = (endpoint, method, parameters, data, verb) =>
  axios({
    method: verb,
    url: `${endpoint}/${method}${parameters !== null ? parameters : ""}`,
    data: data !== null ? data : "",
    headers: {
      Accept: "application/json",
    },
  });

export function* loginUser({ payload }) {
  try {
    yield put({ type: "GET_LOGIN_USER_START" });
    const result = yield call(
      apiCall,
      apiUrl,
      loginUrl,
      null,
      payload,
      postMethod
    );
    result.data.user = payload;
    yield put({ type: "GET_LOGIN_USER_SUCCESS", result });
  } catch (error) {
    yield put({ type: "GET_LOGIN_USER_ERROR", error });
  }
}

export function* registerUser({ payload }) {
  try {
    yield put({ type: "REGISTER_USER_START" });
    const result = yield call(
      apiCall,
      apiUrl,
      registerUrl,
      null,
      payload,
      postMethod
    );
    result.data.user = payload;
    yield put({ type: "REGISTER_USER_SUCCESS", result });
  } catch (error) {
    yield put({ type: "REGISTER_USER_ERROR", error });
  }
}

export function* getProducts() {
  try {
    yield put({ type: "GET_PRODUCTS_START" });
    const result = yield call(apiCall, apiUrl, productsUrl, null, getMethod);
    yield put({ type: "GET_PRODUCTS_SUCCESS", result });
  } catch (error) {
    yield put({ type: "GET_PRODUCTS_ERROR", error });
  }
}

function* actionWatcher() {
  yield takeLatest("GET_PRODUCTS", getProducts);
  yield takeLatest("LOGIN_USER", loginUser);
  yield takeLatest("REGISTER_USER", registerUser);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
