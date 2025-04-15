import productsReducer from '../store/slices/productSlice'
import cartReducer from '../store/slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
})