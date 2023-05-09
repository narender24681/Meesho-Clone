import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as SignupReducer } from "./signupReducer/reducer";
import { reducer as LoginReducer } from "./LoginReducer/Reducer";
import {reducer as ProductReducer}from "./productReducer/reducer"
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
  ProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
