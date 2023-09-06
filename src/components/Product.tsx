import React from 'react'

type Props = {
  name: string
  quantity: number
  price: number
}

const Product: React.FC<Props> = ({ name, quantity, price }) => {
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <img
        src="./solar-module.avif"
        alt={name + ' solar module'}
        className="w-40 rounded-lg"
      />

      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg">{price}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Amount</p>
        <p>{quantity}</p>
      </div>
    </div>
  )
}

export default Product
