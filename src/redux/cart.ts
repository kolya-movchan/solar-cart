import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Cart, Product } from '../types/Cart'
import { toast } from 'react-toastify'

const initialState: Cart = {
  loading: false,
  products: [],
  amount: 0,
  total: 0
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
  return axios
    .get('https://testtask.twnty.de/')
    .then(response => response.data)
})

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: (state: Cart, action: PayloadAction<string>) => {
      const item = state.products.find(
        product => product.name === action.payload
      )

      if (item) {
        item.amount++
        item.quantity--
      }
    },
    decreaseAmount: (state: Cart, action: PayloadAction<string>) => {
      const item = state.products.find(
        product => product.name === action.payload
      )

      if (item) {
        item.amount--
        item.quantity++
      }
    },
    removeItem: (state: Cart, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.name !== action.payload
      )
    },
    updateTotal: (state: Cart) => {
      let amount = 0
      let total = 0

      state.products.forEach(product => {
        amount += product.amount
        total += product.amount * product.price
      })

      state.amount = amount
      state.total = total
    }
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state: Cart) => {
      state.loading = true
    })
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.loading = false
        state.products = Object.entries(action.payload).map(([key, value]) => ({
          name: key,
          amount: 1,
          ...value
        }))
        state.error = ''
      }
    )
    builder.addCase(fetchProducts.rejected, (state, action) => {
      toast.error(`${action.error.message} 😢`)

      state.loading = false
      state.products = []
    })
  }
})

export const { increaseAmount, decreaseAmount, removeItem, updateTotal } =
  cart.actions

export default cart.reducer
