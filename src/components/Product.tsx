import classNames from 'classnames'
import React from 'react'
import { decreaseAmount, increaseAmount, removeItem } from '../redux/cart'
import { useAppDispatch } from '../redux/hooks'

type Props = {
  name: string
  amount: number
  price: number
  quantity: number
}

const Product: React.FC<Props> = ({ name, amount, price, quantity }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-row items-center gap-8 px-10 hover:bg-gray-100 transition duration-300 ease-in-out">
      <img
        src="./solar-module.avif"
        alt={name + ' solar module'}
        className="w-32 rounded-lg"
      />

      <div className="w-1/2 px-10">
        <p className="text-base">
          <span className="text-gray-600 text-sm font-medium tracking-wide">
            Name:{' '}
          </span>
          {name}
        </p>
        <p className="text-base tracking-wide">
          <span className="text-gray-600 text-sm font-medium tracking-wide">
            Price:{' '}
          </span>
          ${price}
        </p>

        <p className="text-base tracking-wide">
          <span className="text-gray-600 text-sm font-medium tracking-wide">
            Available:{' '}
          </span>
          {quantity}
        </p>
        <button
          className="text-red-500 tracking-wide pt-1 pb-3 transition duration-300 ease-in-out transform hover:scale-105 hover:text-red-700 hover:underline"
          onClick={() => dispatch(removeItem(name))}
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Quantity</p>
        <div className="flex flex-row gap-4 items-center text-gray-600 font-medium">
          <button
            className="text-xl"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(name))
              } else {
                dispatch(decreaseAmount(name))
              }
            }}
          >
            -
          </button>

          <p>{amount}</p>
          <button
            className={classNames('text-xl', {
              'opacity-20 pointer-events-none': quantity === 0
            })}
            onClick={() => {
              if (quantity > 0) {
                dispatch(increaseAmount(name))
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
