import Author from "@/models/author";
import ProductDetail from "@/models/productDetail";

export default class ItemDetailResponse {
  constructor(author: Author, categories: string[], item: ProductDetail) {
    this.author = author;
    this.categories = categories;
    this.item = item;
  }

  author: Author;
  categories: string[];
  item: ProductDetail;
}
