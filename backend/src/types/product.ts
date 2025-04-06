export interface Price {
  amount: number;
  currency: string;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ProductDetail extends Product {
  sold_quantity: number;
  description: string;
}
