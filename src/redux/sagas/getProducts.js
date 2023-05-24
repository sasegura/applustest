import { call, put } from "redux-saga/effects";
import { apiUrl, getMethod, productsUrl } from "../../const/api";
import {
  getProductsError,
  getProductsStart,
  getProductsSuccess,
} from "../actions/product";
import apiCall from "../../utils/api";

export function* getProducts() {
  try {
    yield put(getProductsStart());
    const result = yield call(apiCall, apiUrl, productsUrl, null, getMethod);
    yield put(getProductsSuccess(result));
  } catch (error) {
    yield put(getProductsError(error));
  }
}
