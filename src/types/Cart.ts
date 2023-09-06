interface ProductInfo {
  quantity: number
  price: number
}

export interface Product {
  [productName: string]: ProductInfo
}

export interface Cart {
  loading: boolean,
  error: string,
  products: Product[]
  amount: number
  total: number
}
