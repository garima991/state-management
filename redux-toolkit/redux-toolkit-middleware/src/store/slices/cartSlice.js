import { createSelector, createSlice } from '@reduxjs/toolkit'

const findItemIndex = (state, action) =>
  state.list.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true
    },
    fetchCartItemsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong!'
    },
    loadCartItems(state, action) {
      state.loading = false
      state.list = action.payload.products
    },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1
      else state.list.push({ ...action.payload, quantity: 1 })
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      state.list.splice(existingItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1
      }
    },   
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action)
      if (existingItemIndex !== -1) {
        if (state.list[existingItemIndex].quantity > 1) {
          state.list[existingItemIndex].quantity -= 1
        }
         else {
          state.list.splice(existingItemIndex, 1)
        }
      }
    }
    
  },
})

// selectors
export const getCartItems = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      )
      return { ...cartProduct, quantity }
    })
    .filter(({ title }) => title)
}

// you can memoize the selector using createSelector
export const getAllCartItems =  createSelector(getCartItems, (state) => state);

export const getCartLoadingState = (state) => state.cartItems.loading;
export const getCartError = (state) => state.cartItems.error;

export const {
  fetchCartItems,
  fetchCartItemsError,
  loadCartItems,
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions

export default slice.reducer