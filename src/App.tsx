import React from 'react'
import Navbar from './components/Navbar'
import CartList from './components/CartList'

export function App() {
  return (
    <>
    <Navbar />
      <h1 className="text-center text-3xl mt-2 py-4">
        Checkout Page for solar module
      </h1>

      <CartList />
    </>
  )
}
