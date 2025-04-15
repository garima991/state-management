import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true
    },
    fetchProductsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong!'
    },
    updateAllProducts(state, action) {
      state.loading = false
      state.list = action.payload
      state.error = ''
    },
  },
})

export const { updateAllProducts, fetchProducts, fetchProductsError } = slice.actions
export default slice.reducer;



// you cannot directly update the whole state in redux 
// instead you can return it 
// eg. state = action.payload  --- is wrong
// return action.payload -- is correct