import Product from "@/models/product";
import Price from "@/models/price";

export default class ProductDetail extends Product {
  constructor(
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string
  ) {
    super(id, title, price, picture, condition, free_shipping);
    this.sold_quantity = sold_quantity;
    this.description = description;
  }

  sold_quantity: number;
  description: string;
}
