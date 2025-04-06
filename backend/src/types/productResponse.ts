import { Author } from "@/types/author";
import { Product, ProductDetail } from "@/types/product";

export interface SearchResponse {
  author: Author;
  categories: string[];
  items: Product[];
}

export interface ProductDetailResponse {
  author: Author;
  categories: string[];
  item: ProductDetail;
}
