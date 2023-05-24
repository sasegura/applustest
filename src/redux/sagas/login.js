import { call, put } from "redux-saga/effects";
import { apiUrl, loginUrl, postMethod } from "../../const/api";
import {
  loginUserError,
  loginUserStart,
  loginUserSuccess,
} from "../actions/login";
import apiCall from "../api";

export function* loginUser({ payload }) {
  try {
    yield put(loginUserStart());
    const result = yield call(
      apiCall,
      apiUrl,
      loginUrl,
      null,
      payload,
      postMethod
    );
    result.data.user = payload;
    yield put(loginUserSuccess(result));
  } catch (error) {
    yield put(loginUserError(error));
  }
}
