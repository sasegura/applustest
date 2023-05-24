import { combineReducers } from "redux";
import productsReducer from "./products";
import userReducer from "./user";
import cartReducer from "./cart";

const reducer = combineReducers({ userReducer, productsReducer, cartReducer });
export default reducer;
