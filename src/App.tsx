import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartList from './components/CartList'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { updateTotal } from './redux/cart'
import { ToastContainer } from 'react-toastify'

export function App() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(store => store.cart.products)

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <>
      <Navbar />

      <h1 className="text-center text-2xl mt-2 py-8">
        Checkout Page for solar module
      </h1>

      <ToastContainer position="bottom-left" autoClose={3000}
 />

      <CartList />
    </>
  )
}
