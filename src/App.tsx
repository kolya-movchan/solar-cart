import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import CartList from './components/CartList'
import Navbar from './components/Navbar'
import { updateTotal } from './redux/cart'
import { useAppDispatch, useAppSelector } from './redux/hooks'

export function App() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(store => store.cart.products)

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <>
      <Navbar />

      <h1 className="text-center text-2xl py-8">
        Checkout Page for solar module
      </h1>

      <CartList />

      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  )
}
