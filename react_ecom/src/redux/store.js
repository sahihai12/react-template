import { legacy_createStore as createStore } from "redux";
import rootreducers from "./reducers/CombineReducer";

const store =  createStore(rootreducers);

export default store;