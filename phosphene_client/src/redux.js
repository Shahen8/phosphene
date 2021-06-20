import { combineReducers, createStore, applyMiddleware } from "redux";
import shopReducer from "./Reducers/shopReducer";
import adminReducer from "./Reducers/adminReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  shop: shopReducer,
  admin: adminReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
Window.prototype.store = store

export default store;
