import { Author, Product, ProductDetail } from '@/models';

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
