import Author from "@/models/author";
import Product from "@/models/product";

export default class SearchResponse {
  constructor(author: Author, categories: string[], items: Product[]) {
    this.author = author;
    this.categories = categories;
    this.items = items;
  }

  author: Author;
  categories: string[];
  items: Product[];
}
