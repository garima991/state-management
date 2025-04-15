import { legacy_createStore as createStore } from "redux"
import counterReducer, { initialState } from "../features/counterFeature";

const store = createStore(counterReducer);

export default store;