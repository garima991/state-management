import { combineReducers, createStore } from "redux";
import productsReducer from "../features/productsReducer";
import cartReducer from "../features/cartReducer";
import wishListReducer from "../features/wishListReducer";

// used to combine all the reducers
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__?.());
