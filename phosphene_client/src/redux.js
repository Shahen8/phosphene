import { combineReducers, createStore,applyMiddleware } from "redux";
import shopReducer from "./Reducers/shopReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
  shop: shopReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;
