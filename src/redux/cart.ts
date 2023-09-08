import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Cart, Product } from '../types/Cart'

const initialState: Cart = {
  loading: false,
  error: '',
  products: [],
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
    increaseAmount: (state: Cart, action: PayloadAction<string>) => {
      const item = state.products.find(
        product => product.name === action.payload
      )

      if (item) {
        item.amountOrdered++
        item.quantity--
      }
    },
    decreaseAmount: (state: Cart, action: PayloadAction<string>) => {
      const item = state.products.find(
        product => product.name === action.payload
      )

      if (item) {
        item.amountOrdered--
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
        amount += product.amountOrdered
        total += product.amountOrdered * product.price
      })

      state.amount = amount
      state.total = total
    },
    removeAll: (state: Cart) => {
      state.amount = 0
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
          ...value,
          name: key,
          amountOrdered: 1
        }))
        state.error = ''
      }
    )
    builder.addCase(fetchProducts.rejected, (state, action) => {
      toast.error(`${action.error.message} 😢`)

      state.loading = false
      state.products = []
      if (action.error.message) {
        state.error = action.error.message
      }
    })
  }
})

export const {
  increaseAmount,
  decreaseAmount,
  removeItem,
  updateTotal,
  removeAll
} = cart.actions

export default cart.reducer
