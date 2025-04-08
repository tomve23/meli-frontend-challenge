import api from '@/services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PRODUCTS } from '@/constants/api';
import { Product } from '@/models';
import ProductCard from '@/components/search/ProductCard';
import Breadcrumb from '@/components/common/Breadcrumb';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const searchProducts = async (query: string) => {
    try {
      const { data } = await api.get(`${SEARCH_PRODUCTS}${query}&page=1`);

      setProducts(data.items);
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    const search = searchParams.get('search')?.trim();

    if (search) {
      searchProducts(search);
    }
  }, [searchParams]);

  return (
    <>
      <Breadcrumb items={categories} className="mb-4" />
      <div className="rounded overflow-hidden px-4 bg-white">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="[&:not(:last-child)]:border-b border-background cursor-pointer"
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
