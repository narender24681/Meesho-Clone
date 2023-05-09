import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as SignupReducer } from "./signupReducer/reducer";
import { reducer as LoginReducer } from "./LoginReducer/Reducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
