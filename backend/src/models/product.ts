import Price from "@/models/price";

export default class Product {
  constructor(
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
  }

  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
