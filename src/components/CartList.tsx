import React, { useEffect } from 'react'
import { fetchProducts } from '../redux/cart'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import Product from './Product'

const CartList = () => {
  const dispatch = useAppDispatch()
  const { loading, error, products, amount, total } = useAppSelector(
    state => state.cart
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <div>
        {loading && <div>...Loading</div>}
        {!loading && error && <div> Error: {error} </div>}
        {!loading &&
          products &&
          Object.entries(products).map(([productName, productInfo]) => {
            return (
              <Product
                key={productName}
                name={productName}
                quantity={productInfo.quantity}
                price={productInfo.price}
              />
            )
          })}
      </div>

      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium"> Total:</p>
        <p className="text-2xl font-medium">${total}</p>
      </div>
    </div>
  )
}

export default CartList
