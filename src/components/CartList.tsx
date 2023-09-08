import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetchProducts, removeAll } from '../redux/cart'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Product from './Product'

const CartList = () => {
  const dispatch = useAppDispatch()
  const { loading, products, amount, total } = useAppSelector(
    state => state.cart
  )
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false)

  const handleSubmit = () => {
    toast.success('Order is Completed')
    setIsOrderSubmitted(true)
    dispatch(removeAll())
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="flex flex-col justify-center items-center	">
      {loading && <div>...Loading</div>}
      {!loading && products && !isOrderSubmitted && (
        <>
          <div className="">
            {products.map(product => {
              const { name, quantity, price, amountOrdered } = product
              return (
                <Product
                  key={name}
                  name={name}
                  amount={amountOrdered}
                  price={price}
                  quantity={quantity}
                />
              )
            })}
          </div>

          {amount < 1 && !products.length && (
            <p className="text-2-xl text-gray-700 font-medium text-center">
              There is nothing in your basket yet 🙁
            </p>
          )}

          <div className="flex flex-row items-center justify-evenly gap-4 p-4 m-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-2xl font-medium">
              Total:
              <span className="text-2xl font-medium text-green-600 ml-2">
                ${total}
              </span>
            </p>

            <button
              className={classNames(
                'bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md',
                {
                  'opacity-50 pointer-events-none cursor-not-allowed':
                    amount === 0 || isOrderSubmitted
                }
              )}
              onClick={() => handleSubmit()}
            >
              Submit Order
            </button>
          </div>
        </>
      )}

      {isOrderSubmitted && (
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
      )}
    </div>
  )
}

export default CartList
