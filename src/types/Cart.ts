export interface Product {
  name: string,
  amount: number,
  quantity: number,
  price: number,
}

export interface Cart {
  loading: boolean,
  products: Product[]
  amount: number
  total: number
}
