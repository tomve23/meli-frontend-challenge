import api from '@/services/api';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_URL } from '@/constants/api';
import { Product } from '@/models';
import ProductCard from '@/components/search/ProductCard';
import Breadcrumb from '@/components/common/Breadcrumb';

const SearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const searchProducts = async (query: string) => {
    try {
      const { data } = await api.get(PRODUCTS_URL, {
        params: {
          q: query,
        },
      });

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

  const handleRedirect =
    (item: Product) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      navigate(`/items/${item.id}`, {
        state: {
          product: item,
          categories: categories,
        },
      });
    };

  return (
    <>
      <Breadcrumb items={categories} className="mb-4" />
      <div className="rounded overflow-hidden px-4 bg-white">
        {products.map((product: Product) => (
          <Link
            to={`/items/${product.id}`}
            key={product.id}
            onClick={handleRedirect(product)}
          >
            <ProductCard
              key={product.id}
              product={product}
              className="[&:not(:last-child)]:border-b border-background"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
