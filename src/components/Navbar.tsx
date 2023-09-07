import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Navbar = () => {
  const amount = useAppSelector(store => store.cart.amount)

  return (
    <div className="flex flex-row justify-center mt-2 pt-4 text-lg font-medium">
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {amount}
        </span>
      </p>
    </div>
  )
}

export default Navbar
