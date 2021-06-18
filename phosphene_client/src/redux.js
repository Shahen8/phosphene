import { combineReducers, createStore, applyMiddleware } from "redux";
import shopReducer from "./Reducers/shopReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
Window.prototype.store = store

export default store;
