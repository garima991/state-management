import productsReducer from '../store/slices/productSlice'
import cartReducer from '../store/slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from './middlewares/logger.js'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
  // we have a key here called middlewares where we can assign an array of middlewares
  // we have to pass callback function only 
  //must be a function that receives getDefaultMiddleware() and returns your custom list (typically with .concat())
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger)

})