import { combineReducers, createStore,applyMiddleware } from "redux";
import shopReducer from "./Reducers/shopReducer";
import adminReducer from "./Reducers/adminReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  shop: shopReducer,
  admin:adminReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
