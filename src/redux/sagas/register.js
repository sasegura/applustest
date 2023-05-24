import { call, put } from "redux-saga/effects";
import { apiUrl, postMethod, registerUrl } from "../../const/api";
import {
  registerUserError,
  registerUserStart,
  registerUserSuccess,
} from "../actions/register";
import apiCall from "../api";

export function* registerUser({ payload }) {
  try {
    yield put(registerUserStart());
    const result = yield call(
      apiCall,
      apiUrl,
      registerUrl,
      null,
      payload,
      postMethod
    );
    result.data.user = payload;
    yield put(registerUserSuccess(result));
  } catch (error) {
    yield put(registerUserError(error));
  }
}
