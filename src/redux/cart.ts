import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Cart } from '../types/Cart'

const initialState: Cart = {
  loading: false,
  error: '',
  products: {},
  // basketProducts: [],
  amount: 0,
  total: 0
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
  return axios.get('https://testtask.twnty.de/').then(response => response.data)
})

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    switchMode: (state: Cart, action: PayloadAction<string>) => {
      // logic
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state: Cart) => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = {}
      if (action.error.message) {
        state.error = action.error.message
      }
    })
  }
})

export const { switchMode } = cart.actions

export default cart.reducer
