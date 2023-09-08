import React from 'react'
import { Product } from '../types/Cart'

type Props = {
  products: Product[]
  total: number,
}

const Receipt: React.FC<Props> = ({ products, total }) => {
  return (
    <div
      className={
        ' bg-white border-t border-gray-300 p-4 shadow-lg transform transition-transform duration-500 ease-in-out border-none rounded-lg'
      }
    >
      {' '}
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <p className="text-lg font-medium">Products ordered:</p>
      <ul className="list-disc pl-4">
        {products.map(product => {
          const { name, amountOrdered, quantity } = product
          return (
            <li key={name}>
              {name} x{amountOrdered},{' '}
              <span className="text-gray-600 text-sm font-medium tracking-wide">
                available:
              </span>{' '}
              {quantity}
            </li>
          )
        })}
      </ul>
      <p className="text-lg font-medium mt-4">Total: ${total}</p>
    </div>
  )
}

export default Receipt
