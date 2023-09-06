import { useEffect } from 'react'
import { fetchProducts } from '../redux/cart'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

export const Cart = () => {
  const dispatch = useAppDispatch()
  const { products, loading, error } = useAppSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      {loading && <div>...Loading</div>}
      {!loading && error && <div> Error: {error} </div>}
      {!loading &&
        products &&
        Object.keys(products).map(productName => {
          return <div key={productName}>{productName}</div>
        })}
    </div>
  )
}
