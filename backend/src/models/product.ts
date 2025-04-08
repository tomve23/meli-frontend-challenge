import { Price, Address } from "@/models";

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  address: Address;
  condition: string;
  free_shipping: boolean;
}
