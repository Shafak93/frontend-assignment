import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/productsReducer";

const store = createStore(productsReducer, applyMiddleware(thunk));
export default store;
