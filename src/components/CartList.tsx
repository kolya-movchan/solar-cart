import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/cart'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Product from './Product'
import { toast } from 'react-toastify'

const CartList = () => {
  const dispatch = useAppDispatch()
  const { loading, error, products, amount, total } = useAppSelector(
    state => state.cart
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="flex flex-col justify-center items-center	">
      {loading && <div>...Loading</div>}
      {!loading && error && <div> Error: {error} </div>}
      {!loading && products && (
        <>
          <div className="">
            {products.map(product => {
              const { name, quantity, price, amount: productAmount } = product
              return (
                <Product
                  key={name}
                  name={name}
                  amount={productAmount}
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

          <div className="flex flex-row items-center justify-evenly py-8">
            <p className="text-2xl font-medium">
              Total: <span className="text-2xl font-medium">${total}</span>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default CartList
