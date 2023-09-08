export interface Product {
  name: string,
  amountOrdered: number
  quantity: number,
  price: number,
}

export interface Cart {
  loading: boolean,
  error: string,
  products: Product[]
  amount: number
  total: number
}
