import { Product } from '@/models';

export interface ProductDetail extends Product {
  sold_quantity?: number;
  description?: string;
}
