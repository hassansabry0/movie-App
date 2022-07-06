import { createStore } from "redux";
import combinedReducer from "./reducers/combinedReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const STORE = createStore(combinedReducer, composeWithDevTools());

export default STORE;
